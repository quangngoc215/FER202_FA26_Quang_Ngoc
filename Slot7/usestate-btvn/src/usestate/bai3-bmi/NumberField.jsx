import { Form } from 'react-bootstrap';

export default function NumberField({
  label,
  value,
  onChange,
  error,
  placeholder,
}) {
  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        isInvalid={!!error}
        placeholder={placeholder}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
}