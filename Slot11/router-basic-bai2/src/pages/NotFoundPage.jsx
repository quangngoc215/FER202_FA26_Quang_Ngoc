import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const NotFoundPage = () => (
  <Alert variant="warning">
    <h4>404 – Không tìm thấy trang</h4>
    <Link to="/">← Về trang chủ thư viện</Link>
  </Alert>
);

export default NotFoundPage;