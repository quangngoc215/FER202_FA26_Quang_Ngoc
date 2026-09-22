import Card from 'react-bootstrap/Card';

// ===== Dữ liệu cho sẵn (đặt ở đầu file, phía trên component) =====
const fullName = 'Nguyễn Văn An';
const birthYear = 2005;
const currentYear = 2026;
const major = 'Software Engineering';
const hour = new Date().getHours();

const WelcomeCard = () => {
  // ===== Bước 2: Xác định buổi trong ngày =====
  // Chỉ dùng let duy nhất cho session
  let session = 'sáng';
  if (hour >= 12 && hour < 18) session = 'chiều';
  else if (hour >= 18) session = 'tối';

  // ===== Bước 3: Tính tuổi =====
  const age = currentYear - birthYear;

  // ===== Bước 4: Tạo lời chào bằng template literal =====
  const greeting = `Chào buổi ${session}, ${fullName}!`;

  // ===== Bước 5: Chọn màu viền theo độ tuổi =====
  const borderClass = age >= 18 ? 'border-success' : 'border-warning';

  // ===== Bước 6: Dựng giao diện =====
  return (
    <Card className={`shadow-sm ${borderClass}`} style={{ maxWidth: 400 }}>
      <Card.Header>Thẻ sinh viên</Card.Header>
      <Card.Body>
        <Card.Title>{greeting}</Card.Title>
        <Card.Text>
          You are {age} years old and studying {major}.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WelcomeCard;