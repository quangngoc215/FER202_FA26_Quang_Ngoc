import { Container, Row, Col } from 'react-bootstrap'
import MyProduct from '../components/MyProduct'
import products from '../data/products'

function ProductList() {
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Danh sách sản phẩm</h1>

      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <MyProduct product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductList