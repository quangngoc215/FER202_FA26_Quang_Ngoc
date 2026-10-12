import { Form, Button, Card } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Cảm ơn ${form.name}! Mình sẽ phản hồi sớm.`)
    navigate('/')
  }

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title as="h2">Liên hệ</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nội dung</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />
          </Form.Group>
          <Button type="submit" variant="primary">Gửi</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}