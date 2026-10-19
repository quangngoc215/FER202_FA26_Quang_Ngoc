import { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosDemo = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setData(response.data))
      .catch(error => setError(error.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Axios Demo</h3>
      {data ? (
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AxiosDemo;