import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyCarousel from './components/MyCarousel'
import Home from './pages/Home'
import About from './pages/About'
import New from './pages/New'
import Contact from './pages/Contact'
import ProductList from './pages/ProductList'

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <MyCarousel />

        <Container className="mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/new" element={<New />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </Container>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App