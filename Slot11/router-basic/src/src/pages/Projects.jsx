import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <h2 className="mb-4">Danh sách dự án</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map(p => (
          <Col key={p.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
                <Button
                  as={Link}
                  to={`/projects/${p.id}`}
                  variant="outline-primary"
                  size="sm"
                >
                  Chi tiết →
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}