import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography, Box } from "@mui/material";
import "./Auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // Handle signup logic
  };

  return (
    <div className="auth-page">
      <div className="auth-image" />
      <div className="auth-form">
        <Container className="content">
          <Typography variant="h4" gutterBottom>
            Signup
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
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleSignup}>
            Signup
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
