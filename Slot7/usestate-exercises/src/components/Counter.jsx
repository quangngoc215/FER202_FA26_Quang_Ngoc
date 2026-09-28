import { useState } from 'react'
import { Button, Card, ButtonGroup, Badge } from 'react-bootstrap'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1)
  const handleReset = () => setCount(0)

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body className="text-center">
        <Card.Title>Bài 1: Counter</Card.Title>

        <h2 className="mb-4">
          Count: <Badge bg={count > 0 ? 'success' : count < 0 ? 'danger' : 'secondary'}>
            {count}
          </Badge>
        </h2>

        <ButtonGroup>
          <Button variant="danger" onClick={handleDecrement}>
             Giảm
          </Button>
          <Button variant="secondary" onClick={handleReset}>
             Reset
          </Button>
          <Button variant="success" onClick={handleIncrement}>
             Tăng
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}

export default Counter