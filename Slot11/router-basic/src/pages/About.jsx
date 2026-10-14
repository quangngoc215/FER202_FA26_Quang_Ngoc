import { Card, ListGroup, Badge } from 'react-bootstrap'

export default function About() {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title as="h2">Về mình</Card.Title>
        <Card.Text>
          Mình đang học ReactJS tại FPT University. Yêu thích xây dựng SPA với React Router.
        </Card.Text>
        <h5 className="mt-4">Kỹ năng</h5>
        <div>
          {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'].map(s => (
            <Badge bg="primary" className="me-2 mb-2" key={s}>{s}</Badge>
          ))}
        </div>
        <h5 className="mt-4">Học vấn</h5>
        <ListGroup>
          <ListGroup.Item>FPT University – CNTT (2023–2027)</ListGroup.Item>
          <ListGroup.Item>Chứng chỉ ReactJS cơ bản</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}