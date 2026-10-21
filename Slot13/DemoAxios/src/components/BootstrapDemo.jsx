import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Alert, Spinner, Form, Button, Modal, Toast, ToastContainer } from 'react-bootstrap';

const BootstrapDemo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts', { params: { _limit: 3 } })
      .then(res => setPosts(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const confirmDelete = (id) => { setDeleteId(id); setShowModal(true); };
  
  const handleDelete = () => {
    // Giả lập xóa thành công
    setPosts(posts.filter(p => p.id !== deleteId));
    setShowModal(false);
    setShowToast(true);
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      <h2>Giao diện React-Bootstrap</h2>
      {posts.map(post => (
        <Card key={post.id} className="mb-2">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Button variant="danger" size="sm" onClick={() => confirmDelete(post.id)}>Xóa</Button>
          </Card.Body>
        </Card>
      ))}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton><Modal.Title>Xác nhận</Modal.Title></Modal.Header>
        <Modal.Body>Bạn có chắc muốn xóa bài #{deleteId}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Hủy</Button>
          <Button variant="danger" onClick={handleDelete}>Xóa</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="bottom-end">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide bg="success">
          <Toast.Body className="text-white">Đã xóa thành công!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default BootstrapDemo;