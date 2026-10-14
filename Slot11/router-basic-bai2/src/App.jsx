import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HelpLayout from './layouts/HelpLayout';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import FaqPage from './pages/help/FaqPage';
import RulesPage from './pages/help/RulesPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      {/* Route cha "/" – layout chung */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="books" element={<BooksPage />} />

        {/* Route lồng cấp 2: /help/... */}
        <Route path="help" element={<HelpLayout />}>
          {/* /help → /help/faq */}
          <Route index element={<Navigate to="faq" replace />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="rules" element={<RulesPage />} />
        </Route>

        {/* 404 nằm trong MainLayout → vẫn có navbar + footer */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}