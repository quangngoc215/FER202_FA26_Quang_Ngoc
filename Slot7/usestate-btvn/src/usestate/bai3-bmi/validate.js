export function validateHeight(value, unit) {
  if (value === '') return null;
  const v = Number(value);
  const min = unit === 'cm' ? 50 : 0.5;
  const max = unit === 'cm' ? 250 : 2.5;
  if (!(v >= min && v <= max)) {
    return `Chiều cao từ ${min} đến ${max} ${unit}`;
  }
  return null;
}

export function validateWeight(value) {
  if (value === '') return null;
  const v = Number(value);
  if (!(v >= 10 && v <= 300)) {
    return 'Cân nặng từ 10 đến 300 kg';
  }
  return null;
}