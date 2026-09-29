import { Button, ButtonGroup } from 'react-bootstrap';

export default function UnitToggle({ unit, onChange }) {
  return (
    <ButtonGroup size="sm">
      <Button
        variant={unit === 'cm' ? 'primary' : 'outline-primary'}
        onClick={() => onChange('cm')}
      >
        cm
      </Button>
      <Button
        variant={unit === 'm' ? 'primary' : 'outline-primary'}
        onClick={() => onChange('m')}
      >
        m
      </Button>
    </ButtonGroup>
  );
}