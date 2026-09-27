import React from 'react';
import './App.css';

// Import ảnh
import bannerImg from './assets/images/pizza1.jpg';
import pizza2 from './assets/images/pizza2.jpg';
import pizza3 from './assets/images/pizza3.jpg';
import pizza4 from './assets/images/pizza4.jpg';
import pizza5 from './assets/images/pizza5.jpg';

import menu1 from './assets/images/menu1.jpg';
import menu2 from './assets/images/menu2.jpg';
import menu3 from './assets/images/menu3.jpg';
import menu4 from './assets/images/menu4.jpg';

function App() {
  // Danh sách món pizza cho Our Menu
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', img: menu1, oldPrice: '$40.00', newPrice: '$24.00' },
    { id: 2, name: 'Mushroom Pizza',  img: menu2, oldPrice: '$25.00', newPrice: '$20.00' },
    { id: 3, name: 'Hawaiian Pizza',  img: menu3, oldPrice: '$30.00', newPrice: '$25.00' },
    { id: 4, name: 'Pesto Pizza',     img: menu4, oldPrice: '$40.00', newPrice: '$30.00' },
  ];

  return (
    <div className="App">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2c2c2c' }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Pizza House
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            {/* Menu bên trái */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>

            {/* Ô tìm kiếm bên phải */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">🔍</button>
            </form>
          </div>
        </div>
      </nav>

      {/* ================= HERO / BANNER ================= */}
      <div
        className="hero-section d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '450px',
          position: 'relative',
        }}
      >
        <div className="container text-center">
          <h1 className="display-3 fw-bold">Neapolitan Pizza</h1>
          <p className="lead">
            If you are looking for a traditional Italian pizza, the Neapolitan is the best option!
          </p>
        </div>
      </div>

      {/* ================= OUR MENU ================= */}
      <div className="container my-5">
        <h2 className="mb-4">Our Menu</h2>
        <div className="row g-4">
          {menuItems.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <div className="card h-100 shadow-sm position-relative">
                {/* Nhãn SALE vàng */}
                <span
                  className="badge bg-warning text-dark position-absolute"
                  style={{ top: '10px', left: '10px', zIndex: 2 }}
                >
                  SALE
                </span>

                <img src={item.img} className="card-img-top" alt={item.name} />

                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="mb-2">
                    <span className="text-muted text-decoration-line-through me-2">
                      {item.oldPrice}
                    </span>
                    <span className="text-warning fw-bold">{item.newPrice}</span>
                  </p>
                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOOK YOUR TABLE ================= */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Book Your Table</h2>
        <form className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name *"
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email *"
              required
            />
          </div>
          <div className="col-md-4">
            <select className="form-select" defaultValue="">
              <option value="" disabled>Select a Service</option>
              <option value="dine-in">Dine In</option>
              <option value="takeaway">Take Away</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
          <div className="col-12">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Please write your comment"
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-warning fw-bold">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="text-white text-center py-3" style={{ backgroundColor: '#2c2c2c' }}>
        <p className="mb-0">© 2025 Pizza House - Lab2 BTVN</p>
      </footer>
    </div>
  );
}

export default App;