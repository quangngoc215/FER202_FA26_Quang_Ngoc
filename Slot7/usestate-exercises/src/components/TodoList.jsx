import { useState } from 'react'
import { Card, Form, Button, ListGroup, InputGroup } from 'react-bootstrap'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return
    setTodos([...todos, inputValue.trim()])
    setInputValue('')
  }

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <Card.Title>Bài 4: Todo List</Card.Title>

        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Please input a task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
          />
          <Button variant="danger" onClick={handleAddTodo}>
            Add Todo
          </Button>
        </InputGroup>

        <Card className="border">
          <Card.Header className="text-center fw-bold">Todo List</Card.Header>
          <ListGroup variant="flush">
            {todos.length === 0 ? (
              <ListGroup.Item className="text-muted text-center">
                Chưa có công việc nào
              </ListGroup.Item>
            ) : (
              todos.map((todo, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span>{todo}</span>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Card>
      </Card.Body>
    </Card>
  )
}

export default TodoList