import { Outlet, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const HelpLayout = () => (
  <div>
    <h2 className="mb-3">Hướng dẫn sử dụng thư viện</h2>
    <Nav variant="tabs" className="mb-3">
      {/* Link tương đối: to="faq" → /help/faq */}
      <Nav.Item>
        <Nav.Link as={NavLink} to="faq">Câu hỏi thường gặp</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="rules">Nội quy</Nav.Link>
      </Nav.Item>
    </Nav>
    <Outlet />
  </div>
);

export default HelpLayout;