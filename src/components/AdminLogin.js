import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Example login logic, you can replace this with your API call
    setTimeout(() => {
      if (username === "admin" && password === "adminpassword123") {
        setMessage("Login successful!");
        setIsLoading(false);

        // Redirect to the admin dashboard page after successful login
        navigate("/admin-dashboard");  // This will navigate to the admin dashboard route
      } else {
        setMessage("Invalid credentials, please try again.");
        setIsLoading(false);
      }
    }, 1500); // Simulate a delay for login
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button className="login-button" type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && (
          <div
            className={`${
              message.includes("success") ? "success-message" : "error-message"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
