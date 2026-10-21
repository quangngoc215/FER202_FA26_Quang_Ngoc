import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: { userId: 1, _limit: 5 }
        });
        setPosts(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>GET – Danh sách bài viết của user 1</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>#{post.id} – {post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;