export function calcStats(students) {
  const total = students.length;
  const average =
    total === 0
      ? '0.00'
      : (students.reduce((s, x) => s + x.score, 0) / total).toFixed(2);
  const passed = students.filter((s) => s.score >= 5).length;
  return { total, average, passed };
}