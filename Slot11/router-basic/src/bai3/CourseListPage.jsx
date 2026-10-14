import { Link } from 'react-router-dom';
import { Table, Container, Card } from 'react-bootstrap';
import { COURSES } from './courses';

const CourseListPage = () => (
  <Container className="my-4">
    <Card className="shadow-sm">
      <Card.Body>
        <h2 className="mb-3">Danh sách môn học</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Mã môn</th>
              <th>Tên môn</th>
              <th>Kỳ</th>
              <th>Tín chỉ</th>
            </tr>
          </thead>
          <tbody>
            {COURSES.map((c) => (
              <tr key={c.code}>
                <td>
                  <Link to={`/courses/${c.code}`}>{c.code}</Link>
                </td>
                <td>{c.name}</td>
                <td>{c.semester}</td>
                <td>{c.credits}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </Container>
);

export default CourseListPage;