import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

const Home = () => <h2>Trang chủ</h2>;
const About = () => <h2>Giới thiệu</h2>;
const PostDetail = () => {
  const { id } = useParams();
  return <h2>Chi tiết bài viết số {id}</h2>;
};

const RouterDemo = () => {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Trang chủ</Link>
          <Link to="/about" style={{ marginRight: '10px' }}>Giới thiệu</Link>
          <Link to="/posts/1">Bài viết 1</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="*" element={<h2>404 - Không tìm thấy trang</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouterDemo;