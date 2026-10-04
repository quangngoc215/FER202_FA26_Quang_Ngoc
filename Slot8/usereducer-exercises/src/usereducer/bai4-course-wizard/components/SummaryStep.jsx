import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const formatVND = (n) =>
  n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

const SummaryStep = ({ values, course, error, onChange }) => (
  <>
    <ListGroup className="mb-3">
      <ListGroup.Item>{`Học viên: ${values.fullName}`}</ListGroup.Item>
      <ListGroup.Item>{`Liên hệ: ${values.email} · ${values.phone}`}</ListGroup.Item>
      <ListGroup.Item>{`Khóa học: ${course?.name ?? ''} · ${values.schedule}`}</ListGroup.Item>
      <ListGroup.Item className="fw-bold">
        {`Học phí: ${course ? formatVND(course.fee) : ''}`}
      </ListGroup.Item>
    </ListGroup>

    <Form.Check
      id="wz-agree"
      name="agree"
      className="mb-3"
      label="Tôi xác nhận thông tin trên là chính xác"
      checked={values.agree}
      onChange={onChange}
      isInvalid={Boolean(error)}
      feedback={error}
      feedbackType="invalid"
    />
  </>
);

export default SummaryStep;