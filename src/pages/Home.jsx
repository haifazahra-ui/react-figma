import React from 'react';
import '../styles/home.css';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>My Website</h1>
          <nav aria-label="Main navigation">
            <ul>
              <li><a href="/">Dashboard</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container">
          <h2>Welcome to Our Website</h2>
          <p>Your journey to excellence starts here.</p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>Rent, Buy and Sell camera services in Bandung city.</p>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Rental Camera</h3>
            </div>
            <div className="service-item">
              <h3>Jasa Photographer</h3>
            </div>
            <div className="service-item">
              <h3>Jual Beli Camera</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            For inquiries, please DM us at{' '}
            <a href="https://www.instagram.com/harley.motret/" target="_blank" rel="noopener noreferrer">
              @harley.motret
            </a>.
          </p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 My Website. All rights reserved.</p>
          <p><a href="#home">Back to top</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
