import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";
import "./LandingPage.css";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check local storage for login status
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleUploadClick = () => {
    if (!isLoggedIn) {
      alert("Please log in or sign up to upload files.");
      navigate("/login");
    } else {
      navigate("/upload");
    }
  };

  return (
    <div className="landing-page">
      <Container className="landing-content">
        <Typography variant="h3" gutterBottom className="center-text">
          Upload File
        </Typography>
        <Typography variant="subtitle1" gutterBottom className="center-text">
          Effortlessly upload, share, and manage your files with UploadMates.
          Simplify your workflow and keep track of all your shared links in one
          place. Ready to get started? Click the button below!
        </Typography>
        <div className="center-button">
          <Button
            variant="contained"
            color="primary"
            onClick={handleUploadClick}
          >
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
