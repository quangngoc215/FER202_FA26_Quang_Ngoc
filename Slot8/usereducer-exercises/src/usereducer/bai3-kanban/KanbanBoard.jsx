import { useReducer, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {
  COLUMNS, taskReducer, initialTaskState,
  addTask, clearDone,
} from './taskReducer';
import TaskCard from './components/TaskCard';

const KanbanBoard = () => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');
  const [filter, setFilter] = useState('all');

  const visible = state.tasks.filter(
    (t) => filter === 'all' || t.priority === filter,
  );
  const doneCount = state.tasks.filter((t) => t.column === 'done').length;

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask(title, priority));
    setTitle('');
  };

  return (
    <>
      <Row className="g-2 mb-3">
        <Col md={7}>
          <Form onSubmit={handleAdd}>
            <InputGroup>
              <Form.Control
                placeholder="Tên công việc"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Select
                style={{ maxWidth: 110 }}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="low">Thấp</option>
                <option value="high">Cao</option>
              </Form.Select>
              <Button type="submit" disabled={!title.trim()}>Thêm</Button>
            </InputGroup>
          </Form>
        </Col>

        <Col md={3}>
          <Form.Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Lọc ưu tiên"
          >
            <option value="all">Mọi mức ưu tiên</option>
            <option value="high">Chỉ ưu tiên cao</option>
            <option value="low">Chỉ ưu tiên thấp</option>
          </Form.Select>
        </Col>

        <Col md={2}>
          <Button
            variant="outline-success"
            className="w-100"
            disabled={doneCount === 0}
            onClick={() => dispatch(clearDone())}
          >
            Dọn cột xong
          </Button>
        </Col>
      </Row>

      <Row>
        {COLUMNS.map(({ key, title: columnTitle }, colIndex) => {
          const tasks = visible.filter((t) => t.column === key);
          return (
            <Col md={4} key={key}>
              <Card bg="light" className="h-100">
                <Card.Header className="d-flex justify-content-between">
                  {columnTitle} <Badge bg="dark">{tasks.length}</Badge>
                </Card.Header>
                <Card.Body className="p-2">
                  {tasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      dispatch={dispatch}
                      isFirst={colIndex === 0}
                      isLast={colIndex === COLUMNS.length - 1}
                    />
                  ))}
                  {tasks.length === 0 && <small className="text-muted">Trống</small>}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default KanbanBoard;