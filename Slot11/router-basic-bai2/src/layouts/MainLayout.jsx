import { Outlet, NavLink, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const MainLayout = () => (
  <>
    <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">📚 Thư viện FPT</Navbar.Brand>
        <Nav className="ms-auto">
          {/* "Trang chủ" cần `end` để không active ở mọi URL */}
          <Nav.Link as={NavLink} to="/" end>Trang chủ</Nav.Link>
          <Nav.Link as={NavLink} to="/books">Sách</Nav.Link>
          {/* "Hướng dẫn" KHÔNG có end → vẫn active ở /help/faq, /help/rules */}
          <Nav.Link as={NavLink} to="/help">Hướng dẫn</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Container as="main" className="pb-4">
      {/* Route con khớp URL được render TẠI ĐÂY */}
      <Outlet />
    </Container>

    <footer className="text-center text-muted py-3 border-top mt-4">
      © 2026 Thư viện FPT University – Made by Sinh viên FER202
    </footer>
  </>
);

export default MainLayout;