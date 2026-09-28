import { useState } from 'react'
import { Card, Form } from 'react-bootstrap'

function ControlledInput() {
  const [text, setText] = useState('')

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <Card.Title>Bài 2: Controlled Input</Card.Title>
        <Form.Control
          type="text"
          placeholder="Nhập văn bản..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mb-3"
        />
        <Card.Text>
          Bạn đã nhập: <strong>{text}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ControlledInput