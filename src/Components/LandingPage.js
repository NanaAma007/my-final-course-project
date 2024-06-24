// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            UploadMates
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/service">
            Service
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/faq">
            FAQ
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ textAlign: "center", marginTop: 8 }}>
        <Typography variant="h3" gutterBottom>
          Upload File
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Effortlessly upload, share, and manage your files with UploadMates.
          Simplify your workflow and keep track of all your shared links in one
          place. Ready to get started? Click the button below!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/upload"
        >
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
