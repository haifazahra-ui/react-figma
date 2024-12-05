import React from 'react';
import '../styles/dashboard.css';
import logo from '../img/harley motret hitam.jpg';

function App() {
  return (
    <div>

      <header>
        <div className="logo">
          <img 
            src={logo}
            alt="harley motret logo" 
            className="logo" 
          />
          <h2 style={{ marginLeft: '20%' }}>Harley Motret</h2>
        </div>
        <nav>
          <a href="home">Home</a>
          <a href="home">About Us</a>
          <a href="home">Service</a>
          <a href="home">Contact Us</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Welcome to <br /> Harley Motret Katalog
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sollicitudin arcu. 
            Fusce sed imperdiet lectus, nec convallis turpis.
          </p>
          <a href="home.html">
            <button>More Info</button>
          </a>
        </div>
        <div className="hero-image">
          <img 
            src={logo}
            alt="Harley Motret Logo" 
          />
        </div>
      </section>
    </div>
  );
}

export default App;
