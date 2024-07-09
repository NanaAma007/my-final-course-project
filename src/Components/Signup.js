import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";

const Signup = ({ setUsers }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    document.body.classList.add("login-signup-body");
    return () => {
      document.body.classList.remove("login-signup-body");
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setUsers(users);
    alert("SignUp Successful");
  };

  return (
    <div className="form-container-wrapper">
      <h2>Signup</h2>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Signup;
