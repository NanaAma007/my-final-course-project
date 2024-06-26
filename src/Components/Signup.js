import React, { useState, useEffect } from "react";
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
    users.push({ email, password, confirmPassword });
    localStorage.setItem("users", JSON.stringify(users));
    setUsers(users);
    alert("SignUp Successful");
    // Handle signup logic here
    // console.log("Signup:", { email, password });
  };

  return (
    <div className="form-container">
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
    </div>
  );
};

export default Signup;
