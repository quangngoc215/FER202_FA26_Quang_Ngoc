import { Link, useParams } from 'react-router-dom';
import { Alert, Card, Container } from 'react-bootstrap';
import { findCourse } from './courses';

const CourseDetailPage = () => {
  const { code } = useParams();        
  const course = findCourse(code);

  if (!course) {
    return (
      <Container className="my-4">
        <Alert variant="danger">
          Không tìm thấy môn học có mã <strong>{code}</strong>
        </Alert>
        <Link to="/courses">← Quay lại danh sách</Link>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="fs-3">{course.code}</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">{course.name}</Card.Subtitle>
          <p className="mb-1"><strong>Kỳ:</strong> {course.semester}</p>
          <p className="mb-1"><strong>Số tín chỉ:</strong> {course.credits}</p>
          <p className="mb-3"><strong>Mô tả:</strong> {course.desc}</p>
          <Link to="/courses">← Quay lại danh sách</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CourseDetailPage;