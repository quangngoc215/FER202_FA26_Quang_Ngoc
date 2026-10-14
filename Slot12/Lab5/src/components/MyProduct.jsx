import { Card, Button, Badge } from 'react-bootstrap'

function MyProduct({ product }) {
  const { name, description, price, discount, instock, rating, category, image } = product

  const finalPrice = price - (price * discount) / 100

  const formatPrice = (value) =>
    value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })

  return (
    <Card className="h-100 shadow-sm">
      {/* Ảnh sản phẩm — lấy từ product.image */}
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ height: '200px', objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column">
        {/* Category + Badge giảm giá */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Badge bg="secondary">{category}</Badge>
          {discount > 0 && (
            <Badge bg="danger">-{discount}%</Badge>
          )}
        </div>

        {/* Tên sản phẩm */}
        <Card.Title>{name}</Card.Title>

        {/* Đánh giá */}
        <div className="mb-2 text-warning">
          {'★'.repeat(Math.round(rating))}
          {'☆'.repeat(5 - Math.round(rating))}
          <span className="text-muted ms-2">({rating})</span>
        </div>

        {/* Mô tả */}
        <Card.Text className="text-muted small flex-grow-1">
          {description}
        </Card.Text>

        {/* Giá */}
        <div className="mb-3">
          {discount > 0 ? (
            <>
              <span className="text-danger fw-bold fs-5">
                {formatPrice(finalPrice)}
              </span>
              <span className="text-muted text-decoration-line-through ms-2">
                {formatPrice(price)}
              </span>
            </>
          ) : (
            <span className="fw-bold fs-5">{formatPrice(price)}</span>
          )}
        </div>

        {/* Button thêm vào giỏ */}
        {instock && discount > 0 ? (
          <Button variant="primary" className="w-100">
            Thêm vào giỏ
          </Button>
        ) : (
          <Button variant="secondary" className="w-100" disabled>
            {instock ? 'Không giảm giá' : 'Hết hàng'}
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default MyProduct