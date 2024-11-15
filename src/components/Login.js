import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setLoginSuccess(true);
      setErrorMessage("");
      setTimeout(() => {
        navigate("/job-list");
      }, 2000);
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
      setLoginSuccess(false);
    }
  };

  // Admin login navigation
  

  return (
    <div className="login-container">
      {/* Admin Login Button */}
      
      
      <div className="login-box">
        <h2>User Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        {loginSuccess && <div className="success-message">Logged in successfully!</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;
