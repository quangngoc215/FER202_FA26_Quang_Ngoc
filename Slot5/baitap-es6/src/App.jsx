import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './components/ProductCard';

const productA = {
  id: 1,
  name: 'Tai nghe Bluetooth',
  price: 590000,
  image: 'https://picsum.photos/seed/headphone/300/200',
  rating: { rate: 4.5, count: 120 },
  category: { name: 'Âm thanh' },
};
const productB = { id: 2, name: 'Chuột không dây', price: 0 };
const productC = { id: 3 };

function App() {
  const list = [productA, productB, productC];
  return (
    <div className="container my-4">
      <Row className="g-4">
        {list.map((p) => (
          <Col md={4} key={p.id}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;