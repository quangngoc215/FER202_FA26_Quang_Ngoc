import { Table } from 'react-bootstrap';
import StudentRow from './StudentRow';

export default function StudentTable({
  students,
  onScoreChange,
  onCityChange,
  onRemove,
}) {
  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>Họ tên</th>
          <th style={{ width: 120 }}>Điểm</th>
          <th style={{ width: 160 }}>Thành phố</th>
          <th style={{ width: 100 }}>Kết quả</th>
          <th style={{ width: 80 }}></th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center text-muted">
              Chưa có sinh viên.
            </td>
          </tr>
        ) : (
          students.map((s) => (
            <StudentRow
              key={s.id}
              student={s}
              onScoreChange={onScoreChange}
              onCityChange={onCityChange}
              onRemove={onRemove}
            />
          ))
        )}
      </tbody>
    </Table>
  );
}