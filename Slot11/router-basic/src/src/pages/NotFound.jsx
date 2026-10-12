import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="lead">Trang bạn tìm không tồn tại 😢</p>
      <Button as={Link} to="/" variant="primary">Về trang chủ</Button>
    </div>
  )
}