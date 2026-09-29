import { Card, ListGroup } from 'react-bootstrap';

export default function QuizQuestion({ question, selected, onSelect }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title className="mb-3">{question.text}</Card.Title>
        <ListGroup>
          {question.options.map((opt, i) => (
            <ListGroup.Item
              key={i}
              action
              active={selected === i}
              onClick={() => onSelect(i)}
              style={{ cursor: 'pointer' }}
            >
              {String.fromCharCode(65 + i)}. {opt}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}