import { useReducer } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import {
  TRANSITIONS, STATUS_INFO, EVENT_LABELS, ORDER_ACTIONS,
  initialOrderState, orderReducer,
} from './orderReducer';

const now = () =>
  new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

const OrderTracker = () => {
  const [state, dispatch] = useReducer(orderReducer, initialOrderState);
  const { status, cancelReason, error, timeline } = state;

  const allowedEvents = Object.keys(TRANSITIONS[status]);
  const isFinal = allowedEvents.length === 0;

  return (
    <Card style={{ maxWidth: 520 }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          Đơn hàng #DH1024
          <Badge bg={STATUS_INFO[status].bg}>{STATUS_INFO[status].label}</Badge>
        </Card.Title>

        {error && <Alert variant="danger" className="py-2">{error}</Alert>}

        {allowedEvents.includes('CANCEL') && (
          <Form.Control
            className="mb-2"
            placeholder="Lý do hủy (bắt buộc khi hủy)"
            value={cancelReason}
            onChange={(e) =>
              dispatch({ type: ORDER_ACTIONS.SET_REASON, payload: e.target.value })
            }
          />
        )}

        <div className="d-flex flex-wrap gap-2 mb-3">
          {Object.keys(EVENT_LABELS).map((event) => (
            <Button
              key={event}
              size="sm"
              variant={event === 'CANCEL' ? 'outline-danger' : 'outline-primary'}
              disabled={!allowedEvents.includes(event)}
              onClick={() => dispatch({ type: event, at: now() })}
            >
              {EVENT_LABELS[event]}
            </Button>
          ))}
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={() => dispatch({ type: 'SHIP', at: now() })}
          >
            Thử gửi SHIP
          </Button>
        </div>

        <ListGroup variant="flush">
          {timeline.map(({ status: s, at }, i) => (
            <ListGroup.Item key={`${s}-${i}`}>
              <Badge bg={STATUS_INFO[s].bg} className="me-2">{STATUS_INFO[s].label}</Badge>
              <small className="text-muted">{at}</small>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {isFinal && (
          <Button
            className="mt-3"
            size="sm"
            onClick={() => dispatch({ type: ORDER_ACTIONS.RESET })}
          >
            Tạo đơn mới
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default OrderTracker;