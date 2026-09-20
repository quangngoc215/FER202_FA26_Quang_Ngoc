import 'bootstrap/dist/css/bootstrap.min.css';
// Import default
import ProductList from './components/ProductList';
// Hoặc import named cũng được: import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;