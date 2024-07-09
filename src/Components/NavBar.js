import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const NavBar = ({ isLoggedIn, logout }) => {
  return (
    <AppBar position="fixed" style={{ width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          UploadMates
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/shared">
            Shared Files
          </Button>
          {isLoggedIn ? (
            <>
              <Button color="inherit" component={Link} to="/upload">
                Upload
              </Button>
              <Button color="inherit" component={Link} to="/managefiles">
                Manage Files
              </Button>
              <Box sx={{ ml: 1 }}>
                <Button color="inherit" onClick={logout}>
                  Logout
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </>
          )}
          <Button color="inherit" component={Link} to="/contact">
            Help!
          </Button>
          <Button color="inherit" component={Link} to="/faq">
            FAQ
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
