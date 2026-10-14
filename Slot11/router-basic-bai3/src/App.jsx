import { Routes, Route, Navigate } from 'react-router-dom';
import CourseListPage from './bai3/CourseListPage';
import CourseDetailPage from './bai3/CourseDetailPage';

export default function App() {
  return (
    <Routes>
      {/* "/" tự chuyển sang "/courses" */}
      <Route path="/" element={<Navigate to="/courses" replace />} />
      <Route path="/courses" element={<CourseListPage />} />
      <Route path="/courses/:code" element={<CourseDetailPage />} />
    </Routes>
  );
}