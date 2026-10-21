import React from 'react';
import useAxios from '../hooks/useAxios';

const UseAxiosDemo = () => {
  const { data, loading, error } = useAxios('https://jsonplaceholder.typicode.com/posts/1');

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div>
      <h2>Custom Hook useAxios</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default UseAxiosDemo;