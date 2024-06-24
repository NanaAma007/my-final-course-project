// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import FileUpload from "./Components/FileUpload";
import SharedFiles from "./Components/SharedFiles";
import { CssBaseline } from "@mui/material";

const App = () => {
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
      </Routes>
    </Router>
  );
};

export default App;
