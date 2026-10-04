export const COURSES = [
  { id: 'react', name: 'ReactJS cơ bản', fee: 2500000 },
  { id: 'node', name: 'NodeJS & Express', fee: 3000000 },
  { id: 'fullstack', name: 'Fullstack MERN', fee: 5000000 },
];
export const SCHEDULES = ['Sáng 2-4-6', 'Tối 3-5-7', 'Cuối tuần'];
export const STEPS = ['Thông tin', 'Khóa học', 'Xác nhận'];

const STEP_FIELDS = [
  ['fullName', 'email', 'phone'],
  ['courseId', 'schedule'],
  ['agree'],
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const WIZARD_ACTIONS = {
  CHANGE: 'wizard/change',
  NEXT: 'wizard/next',
  BACK: 'wizard/back',
  GO_TO: 'wizard/goTo',
  SUBMIT: 'wizard/submit',
  RESET: 'wizard/reset',
};

export const validateField = (name, values) => {
  const v = values[name];
  switch (name) {
    case 'fullName': return v.trim().length >= 3 ? '' : 'Họ tên ít nhất 3 ký tự';
    case 'email': return EMAIL_REGEX.test(v) ? '' : 'Email không hợp lệ';
    case 'phone': return /^0\d{9}$/.test(v) ? '' : 'Số điện thoại gồm 10 số, bắt đầu bằng 0';
    case 'courseId': return v ? '' : 'Chọn một khóa học';
    case 'schedule': return v ? '' : 'Chọn lịch học';
    case 'agree': return v ? '' : 'Bạn cần xác nhận thông tin';
    default: return '';
  }
};

const validateStep = (step, values) =>
  STEP_FIELDS[step].reduce((errors, name) => {
    const message = validateField(name, values);
    return message ? { ...errors, [name]: message } : errors;
  }, {});

export const initWizard = (initialCourseId = '') => ({
  step: 0,
  maxVisited: 0,
  values: {
    fullName: '', email: '', phone: '',
    courseId: initialCourseId, schedule: '', agree: false,
  },
  errors: {},
  submitted: false,
});

export const wizardReducer = (state, action) => {
  switch (action.type) {
    case WIZARD_ACTIONS.CHANGE: {
      const { name, value } = action.payload;
      const values = { ...state.values, [name]: value };
      const errors = state.errors[name]
        ? { ...state.errors, [name]: validateField(name, values) }
        : state.errors;
      return { ...state, values, errors };
    }
    case WIZARD_ACTIONS.NEXT: {
      const errors = validateStep(state.step, state.values);
      if (Object.keys(errors).length > 0) return { ...state, errors };
      const step = Math.min(state.step + 1, STEPS.length - 1);
      return { ...state, step, maxVisited: Math.max(state.maxVisited, step), errors: {} };
    }
    case WIZARD_ACTIONS.BACK:
      return { ...state, step: Math.max(state.step - 1, 0), errors: {} };
    case WIZARD_ACTIONS.GO_TO:
      return action.payload <= state.maxVisited
        ? { ...state, step: action.payload, errors: {} }
        : state;
    case WIZARD_ACTIONS.SUBMIT: {
      const errors = validateStep(state.step, state.values);
      if (Object.keys(errors).length > 0) return { ...state, errors };
      return { ...state, submitted: true };
    }
    case WIZARD_ACTIONS.RESET:
      return initWizard(action.payload);
    default:
      throw new Error(`Action không hợp lệ: ${action.type}`);
  }
};