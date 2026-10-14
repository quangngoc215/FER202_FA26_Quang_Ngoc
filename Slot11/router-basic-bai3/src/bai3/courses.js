export const COURSES = [
  {
    code: 'PRF192',
    name: 'Programming Fundamentals',
    credits: 3,
    semester: 'Fall 2025',
    desc: 'Lập trình cơ bản với C, nền tảng tư duy thuật toán.',
  },
  {
    code: 'WED201c',
    name: 'Web Design',
    credits: 3,
    semester: 'Spring 2026',
    desc: 'Thiết kế giao diện web với HTML, CSS và các nguyên lý UX/UI.',
  },
  {
    code: 'PRO192',
    name: 'Object-Oriented Programming',
    credits: 3,
    semester: 'Spring 2026',
    desc: 'Lập trình hướng đối tượng với Java: class, kế thừa, đa hình.',
  },
  {
    code: 'FER202',
    name: 'Front-End Development with React',
    credits: 3,
    semester: 'Summer 2026',
    desc: 'Xây dựng SPA với React, React Router, hooks và component.',
  },
  {
    code: 'SWP391',
    name: 'Software Project',
    credits: 3,
    semester: 'Summer 2026',
    desc: 'Đồ án nhóm: phân tích, thiết kế và triển khai sản phẩm phần mềm.',
  },
];

export const findCourse = (code) =>
  COURSES.find((c) => c.code.toLowerCase() === String(code).toLowerCase());