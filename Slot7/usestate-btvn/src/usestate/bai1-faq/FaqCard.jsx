import { Card, Badge } from 'react-bootstrap';

export default function FaqCard({ question, answer, isOpen, onToggle }) {
  return (
    <Card className="mb-2">
      <Card.Header
        role="button"
        className="d-flex justify-content-between align-items-center"
        onClick={onToggle}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        <span>{question}</span>
        <Badge bg={isOpen ? 'danger' : 'primary'}>{isOpen ? '−' : '+'}</Badge>
      </Card.Header>
      {isOpen && <Card.Body>{answer}</Card.Body>}
    </Card>
  );
}