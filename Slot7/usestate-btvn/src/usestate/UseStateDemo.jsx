import { useState } from 'react';
import { Nav, Tab, Container } from 'react-bootstrap';
import FaqAccordion from './bai1-faq/FaqAccordion';
import ReviewForm from './bai2-rating/ReviewForm';
import BmiCalculator from './bai3-bmi/BmiCalculator';
import StudentManager from './bai4-students/StudentManager';
import QuizApp from './bai5-quiz/QuizApp';

const TABS = [
  { key: 'faq', label: '1. FAQ', component: <FaqAccordion /> },
  { key: 'review', label: '2. Đánh giá sao', component: <ReviewForm /> },
  { key: 'bmi', label: '3. BMI', component: <BmiCalculator /> },
  { key: 'students', label: '4. Quản lý điểm', component: <StudentManager /> },
  { key: 'quiz', label: '5. Quiz', component: <QuizApp /> },
];

export default function UseStateDemo() {
  const [activeKey, setActiveKey] = useState('faq');

  return (
    <Container className="my-4">
      <h2 className="mb-4">useState Exercises</h2>
      <Tab.Container activeKey={activeKey} onSelect={(k) => k && setActiveKey(k)}>
        <Nav variant="tabs" className="mb-3 flex-wrap">
          {TABS.map((t) => (
            <Nav.Item key={t.key}>
              <Nav.Link eventKey={t.key}>{t.label}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          {TABS.map((t) => (
            <Tab.Pane key={t.key} eventKey={t.key}>
              {t.component}
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}