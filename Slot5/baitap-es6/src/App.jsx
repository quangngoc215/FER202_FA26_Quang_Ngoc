import ProductList from './components/ProductList';
import { products } from './data/products';

function App() {
  return (
    <div className="container my-4">
      <ProductList products={products} />
    </div>
  );
}

export default App;