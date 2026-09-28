import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body className="text-center">
        <Card.Title>Bài 3: Toggle Visibility</Card.Title>
        <Button
          variant={isVisible ? 'danger' : 'success'}
          className="mb-3"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? 'Hide' : 'Show'}
        </Button>
        {isVisible && <h3>Toggle me!</h3>}
      </Card.Body>
    </Card>
  )
}

export default ToggleVisibility