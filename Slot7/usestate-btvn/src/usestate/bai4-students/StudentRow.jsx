import { Form, Badge, Button } from 'react-bootstrap';
import { CITIES } from './constants';

export default function StudentRow({ student, onScoreChange, onCityChange, onRemove }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <Form.Control
          type="number"
          min={0}
          max={10}
          step={0.5}
          value={student.score}
          onChange={(e) => onScoreChange(student.id, e.target.value)}
        />
      </td>
      <td>
        <Form.Select
          value={student.contact.city}
          onChange={(e) => onCityChange(student.id, e.target.value)}
        >
          {CITIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Form.Select>
      </td>
      <td>
        {student.score >= 5 ? (
          <Badge bg="success">Đạt</Badge>
        ) : (
          <Badge bg="secondary">Chưa đạt</Badge>
        )}
      </td>
      <td>
        <Button
          size="sm"
          variant="outline-danger"
          onClick={() => onRemove(student.id)}
        >
          Xóa
        </Button>
      </td>
    </tr>
  );
}