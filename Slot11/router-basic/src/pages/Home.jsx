import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Card className="text-center shadow-sm">
      <Card.Body>
        <Card.Title as="h1">Trang chủ</Card.Title>
        <Card.Text>
          Chào mừng bạn đến với trang chủ của tôi!
        </Card.Text>
        <Button as={Link} to="/projects" variant="primary" className="me-2">
          Xem dự án
        </Button>
        <Button as={Link} to="/contact" variant="outline-secondary">
          Liên hệ
        </Button>
      </Card.Body>
    </Card>
  )
}