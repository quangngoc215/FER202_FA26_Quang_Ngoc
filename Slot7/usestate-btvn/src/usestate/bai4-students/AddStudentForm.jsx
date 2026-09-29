import { Form, Button, Row, Col } from 'react-bootstrap';

export default function AddStudentForm({
  newName,
  onNameChange,
  sortBy,
  onSortChange,
  onAdd,
  onBonusAll,
  canAdd,
  canBonus,
}) {
  return (
    <Form onSubmit={onAdd} className="mb-3">
      <Row className="g-2 align-items-end">
        <Col xs={12} md={5}>
          <Form.Label className="mb-1">Tên sinh viên mới</Form.Label>
          <Form.Control
            value={newName}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Ít nhất 3 ký tự"
          />
        </Col>
        <Col xs={12} md={3}>
          <Form.Label className="mb-1">Sắp xếp</Form.Label>
          <Form.Select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
            <option value="none">Thứ tự nhập</option>
            <option value="name">Theo tên A → Z</option>
            <option value="score">Điểm cao → thấp</option>
          </Form.Select>
        </Col>
        <Col xs={6} md={2}>
          <Button type="submit" variant="primary" className="w-100" disabled={!canAdd}>
            Thêm
          </Button>
        </Col>
        <Col xs={6} md={2}>
          <Button
            variant="outline-success"
            className="w-100"
            onClick={onBonusAll}
            disabled={!canBonus}
            type="button"
          >
            +0.5 cả lớp
          </Button>
        </Col>
      </Row>
    </Form>
  );
}