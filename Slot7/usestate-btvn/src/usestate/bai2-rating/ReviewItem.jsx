import { Card, Badge } from 'react-bootstrap';

export default function ReviewItem({ rating, comment }) {
  return (
    <Card className="mb-2">
      <Card.Body>
        <div className="mb-1">
          <span style={{ color: '#f5b301' }}>{'★'.repeat(rating)}</span>
          <span style={{ color: '#d3d3d3' }}>{'★'.repeat(5 - rating)}</span>{' '}
          <Badge bg="secondary">{rating}/5</Badge>
        </div>
        <div>{comment}</div>
      </Card.Body>
    </Card>
  );
}