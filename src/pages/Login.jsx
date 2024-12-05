import React from 'react';
import '../styles/login.css'; 
import logo from '../img/harley motret putih.jpg';

const App = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h2>Login</h2>
        <div className="social-login">
          <button>Facebook</button>
          <button>Google</button>
        </div>
        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="login-right">
        <h3>New Here?</h3>
        <p>Sign up and discover a great amount of new opportunities</p>
        <a href="Register">
          <button>Register</button>
        </a>
      </div>
    </div>
  );
};


export default App;
