import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostSearch = () => {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          signal: controller.signal
        });
        setPost(res.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => controller.abort(); // Cleanup
  }, [postId]);

  return (
    <div>
      <h2>Tìm kiếm bài viết (AbortController)</h2>
      <input 
        type="number" 
        value={postId} 
        onChange={e => setPostId(e.target.value)} 
        min="1" max="100"
      />
      {loading && <p>Đang tải...</p>}
      {post && !loading && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostSearch;