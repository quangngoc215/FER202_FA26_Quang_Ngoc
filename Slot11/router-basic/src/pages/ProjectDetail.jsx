import { useParams, Link, useNavigate } from 'react-router-dom'
import { Card, Button, Badge, Alert } from 'react-bootstrap'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <Alert variant="danger">
        Không tìm thấy dự án!{' '}
        <Link to="/projects">Quay lại danh sách</Link>
      </Alert>
    )
  }

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title as="h2">{project.name}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">Năm {project.year}</Card.Subtitle>
        <Card.Text>{project.description}</Card.Text>
        <div className="mb-3">
          {project.tech.map(t => (
            <Badge bg="secondary" className="me-2" key={t}>{t}</Badge>
          ))}
        </div>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          ← Quay lại
        </Button>
      </Card.Body>
    </Card>
  )
}