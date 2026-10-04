import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import StepCounter from './bai1-step-counter/StepCounter';
import OrderTracker from './bai2-order-tracker/OrderTracker';
import KanbanBoard from './bai3-kanban/KanbanBoard';
import CourseWizard from './bai4-course-wizard/CourseWizard';
import NotesBoard from './bai5-notes-board/NotesBoard';

const LESSONS = [
  { key: 'b1', label: 'Bài 1 — StepCounter', render: () => <StepCounter /> },
  { key: 'b2', label: 'Bài 2 — OrderTracker', render: () => <OrderTracker /> },
  { key: 'b3', label: 'Bài 3 — KanbanBoard', render: () => <KanbanBoard /> },
  { key: 'b4', label: 'Bài 4 — CourseWizard', render: () => <CourseWizard /> },
  { key: 'b5', label: 'Bài 5 — NotesBoard', render: () => <NotesBoard /> },
];

const UseReducerDemo = () => {
  const [active, setActive] = useState('b1');
  const current = LESSONS.find((l) => l.key === active);

  return (
    <div className="container my-4">
      <h2 className="mb-3">useReducer Exercises</h2>

      <Nav variant="tabs" activeKey={active} onSelect={(k) => setActive(k)} className="mb-3">
        {LESSONS.map((l) => (
          <Nav.Item key={l.key}>
            <Nav.Link eventKey={l.key}>{l.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <div>{current.render()}</div>
    </div>
  );
};

export default UseReducerDemo;