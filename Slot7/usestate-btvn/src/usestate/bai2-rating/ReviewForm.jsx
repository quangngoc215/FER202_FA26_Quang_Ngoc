import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import StarRating from './StarRating';
import ReviewList from './ReviewList';
import { calcAverage } from './calcAverage';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  const canSubmit = rating > 0 && comment.trim().length >= 5;
  const average = calcAverage(reviews);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setReviews((prev) => [
      { id: Date.now(), rating, comment: comment.trim() },
      ...prev,
    ]);
    setRating(0);
    setComment('');
  };

  return (
    <div className="p-3">
      <h3 className="mb-3">⭐ Đánh giá sao</h3>

      <Card className="mb-3">
        <Card.Body>
          <Card.Title>
            Trung bình {average}/5 ({reviews.length} lượt)
          </Card.Title>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Chọn số sao</Form.Label>
              <div>
                <StarRating value={rating} onChange={setRating} />
              </div>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Nhận xét (ít nhất 5 ký tự)</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Cảm nhận của bạn..."
              />
            </Form.Group>

            <Button type="submit" variant="primary" disabled={!canSubmit}>
              Gửi đánh giá
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <h5>Danh sách nhận xét ({reviews.length})</h5>
      <ReviewList reviews={reviews} />
    </div>
  );
}