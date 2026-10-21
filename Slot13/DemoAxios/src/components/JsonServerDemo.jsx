import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

const JsonServerDemo = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');

  const fetchPosts = () => {
    api.get('/posts').then(res => setPosts(res.data)).catch(console.error);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await api.post('/posts', { title, body: 'Nội dung mới', userId: 1 });
    setTitle('');
    fetchPosts();
  };

  return (
    <div>
      <h2>JSON Server Demo</h2>
      <form onSubmit={handleAdd}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Tiêu đề mới" required />
        <button type="submit">Thêm</button>
      </form>
      <ul>
        {posts.map(p => <li key={p.id}>{p.title}</li>)}
      </ul>
    </div>
  );
};

export default JsonServerDemo;