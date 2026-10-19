import React from 'react';
import AxiosDemo from './components/AxiosDemo';
import PostList from './components/PostList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <React.StrictMode>
        <AxiosDemo />
        <hr />
        <PostList />
      </React.StrictMode>
    </div>
  );
}

export default App;