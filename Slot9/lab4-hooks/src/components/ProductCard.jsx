import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { formatVND, getFinalPrice } from '../utils/format';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, discount = 0, inStock, category, rating } = product;
  const finalPrice = getFinalPrice(product);

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between mb-2">
          <Badge bg="secondary">{category?.name ?? 'Khác'}</Badge>
          {discount > 0 && <Badge bg="danger">-{discount}%</Badge>}
        </div>
        <Card.Title className="fs-6">{name}</Card.Title>
        <div className="mb-2">
          <span className="fw-bold text-danger">{formatVND(finalPrice)}</span>{' '}
          {discount > 0 && <small className="text-muted text-decoration-line-through">{formatVND(price)}</small>}
        </div>
        <small className="text-muted mb-3">⭐ {rating?.rate ?? '—'}</small>
        <Button
          variant="primary"
          className="mt-auto"
          disabled={!inStock}
          onClick={() => onAddToCart?.(product)}
        >
          {inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;