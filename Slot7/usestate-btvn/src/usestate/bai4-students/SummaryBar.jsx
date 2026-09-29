export default function SummaryBar({ total, average, passed }) {
  return (
    <div className="fw-semibold">
      Sĩ số: {total} · Điểm trung bình: {average} · Đạt: {passed}/{total}
    </div>
  );
}