import { ProgressBar, Badge } from 'react-bootstrap';

export default function ProgressHeader({ index, total, answeredCount }) {
  const progress = (answeredCount / total) * 100;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fw-semibold">
          Câu {index + 1}/{total}
        </span>
        <Badge bg="info">
          Đã trả lời: {answeredCount}/{total}
        </Badge>
      </div>
      <ProgressBar
        now={progress}
        className="mb-3"
        label={`${Math.round(progress)}%`}
      />
    </>
  );
}