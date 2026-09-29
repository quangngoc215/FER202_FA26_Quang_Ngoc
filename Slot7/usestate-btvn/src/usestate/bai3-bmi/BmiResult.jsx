import { Alert } from 'react-bootstrap';

export default function BmiResult({ bmi, result }) {
  if (!result) {
    return (
      <Alert variant="light" className="mb-0 text-muted">
        Nhập chiều cao và cân nặng để xem kết quả.
      </Alert>
    );
  }
  return (
    <Alert variant={result.variant} className="mb-0">
      <strong>BMI = {bmi.toFixed(1)}</strong> → {result.label}
    </Alert>
  );
}