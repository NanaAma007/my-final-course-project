import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography, Box } from "@mui/material";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <div className="auth-page">
      <div className="auth-image" />
      <div className="auth-form">
        <Container className="content">
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleLogin}>
            Login
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Login;
