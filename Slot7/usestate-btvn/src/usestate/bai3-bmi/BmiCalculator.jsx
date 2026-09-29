import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import UnitToggle from './UnitToggle';
import NumberField from './NumberField';
import BmiResult from './BmiResult';
import { classify } from './classify';
import { validateHeight, validateWeight } from './validate';

export default function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('cm');

  const heightError = validateHeight(height, unit);
  const weightError = validateWeight(weight);

  const h = Number(height);
  const w = Number(weight);
  const heightM = unit === 'cm' ? h / 100 : h;

  const ready =
    height !== '' &&
    weight !== '' &&
    !heightError &&
    !weightError &&
    heightM > 0;

  const bmi = ready ? w / (heightM * heightM) : null;
  const result = bmi !== null ? classify(bmi) : null;

  const changeUnit = (next) => {
    if (next === unit) return;
    if (height !== '') {
      const converted =
        unit === 'cm' ? Number(height) / 100 : Number(height) * 100;
      setHeight(String(Number(converted)));
    }
    setUnit(next);
  };

  return (
    <div className="p-3">
      <h3 className="mb-3">🧮 Máy tính BMI</h3>

      <Card>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label>Đơn vị chiều cao</Form.Label>
            <div>
              <UnitToggle unit={unit} onChange={changeUnit} />
            </div>
          </Form.Group>

          <NumberField
            label={`Chiều cao (${unit})`}
            value={height}
            onChange={setHeight}
            error={heightError}
            placeholder={unit === 'cm' ? '170' : '1.7'}
          />

          <div className="mb-3">
            <NumberField
              label="Cân nặng (kg)"
              value={weight}
              onChange={setWeight}
              error={weightError}
              placeholder="65"
            />
          </div>

          <BmiResult bmi={bmi} result={result} />
        </Card.Body>
      </Card>
    </div>
  );
}