import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Lab5</h5>
            <p className="mb-0">Website demo React + Bootstrap</p>
          </Col>
          <Col md={4}>
            <h5>Liên hệ</h5>
            <p className="mb-0">Email: contact@lab5.com</p>
            <p className="mb-0">Điện thoại: 0123 456 789</p>
          </Col>
          <Col md={4}>
            <h5>Theo dõi</h5>
            <p className="mb-0">Facebook | GitHub | YouTube</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="mb-0">© 2026 Lab5. All rights reserved.</p>
      </Container>
    </footer>
  )
}

export default Footer