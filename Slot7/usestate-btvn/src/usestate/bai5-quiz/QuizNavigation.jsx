import { Button } from 'react-bootstrap';

export default function QuizNavigation({
  index,
  isLast,
  canNext,
  canSubmit,
  onPrev,
  onNext,
  onSubmit,
}) {
  return (
    <div className="d-flex gap-2">
      <Button
        variant="outline-secondary"
        disabled={index === 0}
        onClick={onPrev}
      >
        ← Trước
      </Button>

      {isLast ? (
        <Button variant="success" disabled={!canSubmit} onClick={onSubmit}>
          Nộp bài
        </Button>
      ) : (
        <Button variant="primary" disabled={!canNext} onClick={onNext}>
          Tiếp →
        </Button>
      )}
    </div>
  );
}