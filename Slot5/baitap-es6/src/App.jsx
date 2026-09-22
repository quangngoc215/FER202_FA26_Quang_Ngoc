import StudentCard from './components/StudentCard';

const students = [
  {
    id: 'SE1701',
    name: 'Nguyễn Văn An',
    major: 'Software Engineering',
    gpa: 8.5,
    avatar: 'https://i.pravatar.cc/200?img=12',
    contact: { email: 'an.nv@fpt.edu.vn', phone: '0901 234 567' },
  },
  {
    id: 'SE1702',
    name: 'Trần Thị Bình',
    major: 'Artificial Intelligence',
    gpa: 9.1,
    avatar: 'https://i.pravatar.cc/200?img=32',
    contact: { email: 'binh.tt@fpt.edu.vn', phone: '0902 345 678' },
  },
  {
    id: 'SE1703',
    name: 'Lê Văn Cường',
    major: 'Digital Marketing',
    gpa: 7.8,
    avatar: 'https://i.pravatar.cc/200?img=45',
    contact: { email: 'cuong.lv@fpt.edu.vn', phone: '0903 456 789' },
  },
];

function App() {
  return (
    <div className="container my-4 d-flex gap-3 flex-wrap">
      {students.map((s) => (
        <StudentCard key={s.id} student={s} />
      ))}
    </div>
  );
}

export default App;