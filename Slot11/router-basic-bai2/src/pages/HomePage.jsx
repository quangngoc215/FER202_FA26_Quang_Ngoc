import { Card } from 'react-bootstrap';

const HomePage = () => (
  <Card className="shadow-sm">
    <Card.Body>
      <h2>Chào mừng đến Thư viện FPT</h2>
      <p className="mb-0">
        Chọn mục "Sách" để xem danh sách, hoặc "Hướng dẫn" để biết cách mượn sách.
      </p>
    </Card.Body>
  </Card>
);

export default HomePage;