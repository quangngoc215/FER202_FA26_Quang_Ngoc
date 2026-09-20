import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductInfo from './ProductInfo';

// Dữ liệu mẫu danh sách pizza
const pizzas = [
  {
    id: 1,
    name: 'Pizza Hải Sản',
    price: 12.99,
    tag: 'Hot',
    avatar: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400',
  },
  {
    id: 2,
    name: 'Pizza Pepperoni',
    price: 10.5,
    tag: 'New',
    avatar: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400',
  },
  {
    id: 3,
    name: 'Pizza Phô Mai',
    price: 9.99,
    tag: 'Sale',
    avatar: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400',
  },
  {
    id: 4,
    name: 'Pizza Rau Củ',
    price: 8.5,
    tag: 'Vegan',
    avatar: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400',
  },
];

// Named export
export function ProductList() {
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">🍕 Danh sách Pizza</h1>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {pizzas.map((pizza) => (
          <Col key={pizza.id} className="d-flex justify-content-center">
            <ProductInfo
              name={pizza.name}
              price={pizza.price}
              tag={pizza.tag}
              avatar={pizza.avatar}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// Default export
export default ProductList;