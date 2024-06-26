import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import "./LandingPage.css"; // Import the new CSS file

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
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/faq">
            FAQ
          </Button>
        </Toolbar>
      </AppBar>
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
            component={Link}
            to="/upload"
          >
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
