import React from "react";
import '../styles/register.css';

const App = () => {
  return (
    <div className="register-container">
      <div className="register-left">
        <h2>Welcome Back!</h2>
        <p>If you already have an account, sign in here.</p>
        <a href="login">
          <button>Login</button>
        </a>
      </div>
      <div className="register-right">
        <h1>Create Your Account</h1>
        <div className="social-login">
          <button>Facebook</button>
          <button>Google</button>
        </div>
        <form>
          <input type="text" placeholder="Username or Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default App;
