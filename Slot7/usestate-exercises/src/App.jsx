import { Container } from 'react-bootstrap'
import Counter from './components/Counter'
import ControlledInput from './components/ControlledInput'
import ToggleVisibility from './components/ToggleVisibility'
import TodoList from './components/TodoList'

function App() {
  return (
    <Container className="my-4" style={{ maxWidth: '720px' }}>
      <h1 className="text-center mb-4">Exercise 12: useState</h1>
      <Counter />
      <ControlledInput />
      <ToggleVisibility />
      <TodoList />
    </Container>
  )
}

export default App