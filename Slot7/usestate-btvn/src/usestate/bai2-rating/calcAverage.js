export function calcAverage(reviews) {
  if (reviews.length === 0) return '0.0';
  const sum = reviews.reduce((s, r) => s + r.rating, 0);
  return (sum / reviews.length).toFixed(1);
}