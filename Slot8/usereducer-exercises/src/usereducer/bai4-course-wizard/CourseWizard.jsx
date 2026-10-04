import { useReducer } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {
  COURSES, SCHEDULES, STEPS,
  wizardReducer, initWizard, WIZARD_ACTIONS,
} from './wizardReducer';
import StepNav from './components/StepNav';
import SummaryStep from './components/SummaryStep';

const formatVND = (n) =>
  n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

const CourseWizard = ({ initialCourseId = 'react' }) => {
  const [state, dispatch] = useReducer(wizardReducer, initialCourseId, initWizard);
  const { step, maxVisited, values, errors, submitted } = state;
  const course = COURSES.find((c) => c.id === values.courseId);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: WIZARD_ACTIONS.CHANGE,
      payload: { name, value: type === 'checkbox' ? checked : value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: step === STEPS.length - 1 ? WIZARD_ACTIONS.SUBMIT : WIZARD_ACTIONS.NEXT,
    });
  };

  if (submitted) {
    return (
      <Alert variant="success" style={{ maxWidth: 560 }}>
        <Alert.Heading>Đăng ký thành công!</Alert.Heading>
        <p>{`${values.fullName} đã đăng ký ${course.name} (${values.schedule}). Học phí: ${formatVND(course.fee)}.`}</p>
        <Button
          variant="outline-success"
          onClick={() =>
            dispatch({ type: WIZARD_ACTIONS.RESET, payload: initialCourseId })
          }
        >
          Đăng ký khóa khác
        </Button>
      </Alert>
    );
  }

  const field = (name, label, type = 'text') => (
    <Form.Group className="mb-3" controlId={`wz-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={values[name]}
        onChange={handleChange}
        isInvalid={Boolean(errors[name])}
      />
      <Form.Control.Feedback type="invalid">{errors[name]}</Form.Control.Feedback>
    </Form.Group>
  );

  return (
    <Card style={{ maxWidth: 560 }}>
      <Card.Header>
        <StepNav step={step} maxVisited={maxVisited} dispatch={dispatch} />
      </Card.Header>

      <Card.Body>
        <Form noValidate onSubmit={handleSubmit}>
          {step === 0 && (
            <>
              {field('fullName', 'Họ và tên')}
              {field('email', 'Email', 'email')}
              {field('phone', 'Số điện thoại', 'tel')}
            </>
          )}

          {step === 1 && (
            <>
              <Form.Group className="mb-3" controlId="wz-courseId">
                <Form.Label>Khóa học</Form.Label>
                <Form.Select
                  name="courseId"
                  value={values.courseId}
                  onChange={handleChange}
                  isInvalid={Boolean(errors.courseId)}
                >
                  <option value="">-- Chọn khóa học --</option>
                  {COURSES.map(({ id, name, fee }) => (
                    <option key={id} value={id}>
                      {`${name} – ${formatVND(fee)}`}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.courseId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="d-block">Lịch học</Form.Label>
                {SCHEDULES.map((s, i) => (
                  <Form.Check
                    inline
                    key={s}
                    type="radio"
                    id={`wz-schedule-${i}`}
                    name="schedule"
                    label={s}
                    value={s}
                    checked={values.schedule === s}
                    onChange={handleChange}
                    isInvalid={Boolean(errors.schedule)}
                  />
                ))}
                {errors.schedule && (
                  <div className="text-danger small">{errors.schedule}</div>
                )}
              </Form.Group>
            </>
          )}

          {step === 2 && (
            <SummaryStep
              values={values}
              course={course}
              error={errors.agree}
              onChange={handleChange}
            />
          )}

          <div className="d-flex justify-content-between">
            <Button
              variant="outline-secondary"
              disabled={step === 0}
              onClick={() => dispatch({ type: WIZARD_ACTIONS.BACK })}
            >
              ← Quay lại
            </Button>
            <Button
              type="submit"
              variant={step === STEPS.length - 1 ? 'success' : 'primary'}
            >
              {step === STEPS.length - 1 ? 'Xác nhận đăng ký' : 'Tiếp tục →'}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CourseWizard;