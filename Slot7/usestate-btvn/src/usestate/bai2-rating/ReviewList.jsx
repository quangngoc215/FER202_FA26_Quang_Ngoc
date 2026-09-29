import ReviewItem from './ReviewItem';

export default function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return <p className="text-muted">Chưa có đánh giá nào.</p>;
  }
  return reviews.map((r) => (
    <ReviewItem key={r.id} rating={r.rating} comment={r.comment} />
  ));
}