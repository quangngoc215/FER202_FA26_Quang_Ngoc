import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const resPost = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setPost(resPost.data);
        
        const [resAuthor, resComments] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`),
          axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
        ]);
        
        setAuthor(resAuthor.data);
        setComments(resComments.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Không có dữ liệu</div>;

  return (
    <div>
      <h2>Chi tiết bài viết</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p><strong>Tác giả:</strong> {author?.name}</p>
      <h4>Bình luận ({comments.length}):</h4>
      <ul>
        {comments.slice(0, 3).map(c => <li key={c.id}>{c.name}: {c.body}</li>)}
      </ul>
    </div>
  );
};

export default PostDetail;