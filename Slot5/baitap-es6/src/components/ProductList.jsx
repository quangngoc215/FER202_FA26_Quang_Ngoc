import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const categories = ['Tất cả', ...new Set(products.map((p) => p.category.name))];

  return (
    <>
      <h3 className="my-3">{`Có ${products.length} sản phẩm`}</h3>
      <div className="mb-3 d-flex gap-2 flex-wrap">
        {categories.map((c) => (
          <Button key={c} variant="outline-primary" size="sm">
            {c}
          </Button>
        ))}
      </div>
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;