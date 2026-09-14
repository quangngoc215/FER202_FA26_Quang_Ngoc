function ProductInfo(props) {
  return (
    <div className="product-info">
      <h2>Thông tin sản phẩm</h2>
      <p><strong>Tên:</strong> {props.name}</p>
      <p><strong>Giá:</strong> {props.price.toLocaleString('vi-VN')} VNĐ</p>
      <p><strong>Tag:</strong> {props.tag}</p>
    </div>
  )
}

export default ProductInfo