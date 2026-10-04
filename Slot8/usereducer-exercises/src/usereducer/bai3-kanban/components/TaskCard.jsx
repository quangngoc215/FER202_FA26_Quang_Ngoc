import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { moveTask, renameTask, deleteTask } from '../taskReducer';

const PRIORITY = {
  high: { label: 'Cao', bg: 'danger' },
  low: { label: 'Thấp', bg: 'secondary' },
};

const TaskCard = ({ task, isFirst, isLast, dispatch }) => {
  const { id, title, priority } = task;

  const handleRename = () => {
    const next = window.prompt('Tên mới', title);
    if (next !== null) dispatch(renameTask(id, next));
  };

  return (
    <Card className="mb-2 shadow-sm">
      <Card.Body className="p-2">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <span title="Nhấp đúp để đổi tên" onDoubleClick={handleRename}>
            {title}
          </span>
          <Badge bg={PRIORITY[priority].bg}>{PRIORITY[priority].label}</Badge>
        </div>

        <div className="d-flex gap-1 mt-2">
          <Button
            size="sm"
            variant="outline-secondary"
            disabled={isFirst}
            onClick={() => dispatch(moveTask(id, -1))}
          >
            ←
          </Button>
          <Button
            size="sm"
            variant="outline-secondary"
            disabled={isLast}
            onClick={() => dispatch(moveTask(id, 1))}
          >
            →
          </Button>
          <Button
            size="sm"
            variant="outline-danger"
            className="ms-auto"
            onClick={() => dispatch(deleteTask(id))}
          >
            Xóa
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;