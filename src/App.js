// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import FileUpload from "./Components/FileUpload";
import SharedFiles from "./Components/SharedFiles";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { CssBaseline } from "@mui/material";

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [files, setFiles] = useState([]);

  const addFile = (file) => {
    setFiles([...files, file]);
  };

  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/upload" element={<FileUpload addFile={addFile} />} />
        <Route path="/shared" element={<SharedFiles files={files} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup setUsers={setUsers} />} />
      </Routes>
    </Router>
  );
};

export default App;
