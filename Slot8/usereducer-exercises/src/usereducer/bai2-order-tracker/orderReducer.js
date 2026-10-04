export const TRANSITIONS = {
  pending:   { CONFIRM: 'confirmed', CANCEL: 'cancelled' },
  confirmed: { SHIP: 'shipping', CANCEL: 'cancelled' },
  shipping:  { DELIVER: 'delivered' },
  delivered: {},
  cancelled: {},
};

export const STATUS_INFO = {
  pending:   { label: 'Chờ xác nhận', bg: 'secondary' },
  confirmed: { label: 'Đã xác nhận', bg: 'primary' },
  shipping:  { label: 'Đang giao', bg: 'warning' },
  delivered: { label: 'Đã giao', bg: 'success' },
  cancelled: { label: 'Đã hủy', bg: 'danger' },
};

export const EVENT_LABELS = {
  CONFIRM: 'Xác nhận',
  SHIP: 'Giao hàng',
  DELIVER: 'Đã nhận hàng',
  CANCEL: 'Hủy đơn',
};

export const ORDER_ACTIONS = {
  SET_REASON: 'order/setReason',
  RESET: 'order/reset',
};

export const initialOrderState = {
  status: 'pending',
  cancelReason: '',
  error: '',
  timeline: [{ status: 'pending', at: '08:00' }],
};

export const orderReducer = (state, action) => {
  if (action.type === ORDER_ACTIONS.SET_REASON) {
    return { ...state, cancelReason: action.payload, error: '' };
  }
  if (action.type === ORDER_ACTIONS.RESET) return initialOrderState;

  const nextStatus = TRANSITIONS[state.status][action.type];
  if (!nextStatus) {
    return {
      ...state,
      error: `Không thể "${action.type}" khi đơn đang "${STATUS_INFO[state.status].label}"`,
    };
  }
  if (action.type === 'CANCEL' && state.cancelReason.trim().length < 5) {
    return { ...state, error: 'Nhập lý do hủy (ít nhất 5 ký tự)' };
  }
  return {
    ...state,
    status: nextStatus,
    error: '',
    timeline: [...state.timeline, { status: nextStatus, at: action.at }],
  };
};