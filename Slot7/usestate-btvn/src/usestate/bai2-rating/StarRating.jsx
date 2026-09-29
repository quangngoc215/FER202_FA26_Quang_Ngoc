import { useState } from 'react';
import { LABELS } from './labels';

export default function StarRating({ value, onChange, max = 5 }) {
  const [hovered, setHovered] = useState(0);
  const display = hovered || value;

  return (
    <div
      className="d-flex align-items-center gap-2"
      onMouseLeave={() => setHovered(0)}
    >
      <div className="d-flex">
        {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
          <span
            key={star}
            onMouseEnter={() => setHovered(star)}
            onClick={() => onChange(star === value ? 0 : star)}
            style={{
              cursor: 'pointer',
              fontSize: '2rem',
              lineHeight: 1,
              color: star <= display ? '#f5b301' : '#d3d3d3',
              transition: 'color 0.1s',
            }}
            aria-label={`${star} sao`}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-muted small">
        {LABELS[display] || 'Chưa đánh giá'}
      </span>
    </div>
  );
}