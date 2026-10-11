import { useState } from 'react';
import ThemeProvider from './context/ThemeProvider';
import AuthProvider from './context/AuthProvider';
import CartProvider from './context/CartProvider';
import { useAuth } from './context/useAuth';
import Layout from './components/layout/Layout';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginForm from './components/LoginForm';
import QuantityPicker from './components/QuantityPicker';
import MiniCart from './components/MiniCart';
import ProfilePreview from './components/ProfilePreview';
import ProductFilter from './components/ProductFilter';
import RegisterForm from './components/RegisterForm';
import ValidatedRegisterForm from './components/ValidatedRegisterForm';
import TodoList from './components/TodoList';
import CartDemoPage from './pages/CartDemoPage';
import { products } from './data/products';

const TITLES = { shop: 'Cửa hàng', cart: 'Giỏ hàng', checkout: 'Thanh toán', login: 'Đăng nhập' };

const AppContent = () => {
  const [page, setPage] = useState('shop');
  const { login } = useAuth();

  const handleLoginSuccess = (email) => {
    login(email);
    setPage('shop');
  };

  return (
    <Layout title={TITLES[page]} currentPage={page} onNavigate={setPage}>
      {page === 'shop' && <ShopPage />}
      {page === 'cart' && <CartPage onNavigate={setPage} />}
      {page === 'checkout' && <CheckoutPage onNavigate={setPage} />}
      {page === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
    </Layout>
  );
};

// Trang Lab hiển thị tất cả bài tập từ 1-8 (bài 9-10 là app cửa hàng phía trên)
const LabPage = () => (
  <div className="container my-4">
    <h2>Lab4 - Hooks</h2>

    <h4>Bài 1 - QuantityPicker</h4>
    <div className="d-flex flex-column gap-3 mb-4">
      <QuantityPicker />
      <QuantityPicker min={2} max={5} />
    </div>

    <h4>Bài 1 - MiniCart</h4>
    <MiniCart />
    <hr />

    <h4>Bài 2 - ProfilePreview</h4>
    <ProfilePreview />
    <hr />

    <h4>Bài 3 - ProductFilter</h4>
    <ProductFilter products={products} />
    <hr />

    <h4>Bài 4 - RegisterForm</h4>
    <RegisterForm />
    <hr />

    <h4>Bài 5 - ValidatedRegisterForm</h4>
    <ValidatedRegisterForm />
    <hr />

    <h4>Bài 6 - TodoList</h4>
    <TodoList />
    <hr />

    <h4>Bài 7 - CartDemoPage</h4>
    <CartDemoPage />
  </div>
);

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  </ThemeProvider>
);

export { LabPage };
export default App;