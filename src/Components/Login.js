import React, { useState, useEffect } from "react";
import "./LoginSignup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.classList.add("login-signup-body");

    return () => {
      document.body.classList.remove("login-signup-body");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login:", { email, password });
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
