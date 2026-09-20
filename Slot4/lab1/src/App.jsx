import 'bootstrap/dist/css/bootstrap.min.css';
import ProductInfo from './ProductInfo';
import './App.css'; 

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <ProductInfo 
        name="iPhone 15 Pro" 
        price="999" 
        tag="New" 
        avatar="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1280px-Pizza-3007395.jpg?utm_source=vi.wikipedia.org&utm_campaign=index&utm_content=thumbnail" 
      />
    </div>
  );
}

export default App;