import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import FileUpload from "./Components/FileUpload";
import SharedFiles from "./Components/SharedFiles";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { CssBaseline } from "@mui/material";
import DownloadFile from "./Components/DownloadFile";
import ManageFiles from "./Components/ManageFiles";
import NavBar from "./Components/NavBar";

const App = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [sharedFiles, setSharedFiles] = useState([]);
  const [manageFiles, setManageFiles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const addManagedFile = (file) => {
    setManageFiles([...manageFiles, file]);
  };

  const deleteFile = (fileToDelete) => {
    const updatedSharedFiles = sharedFiles.filter(
      (file) => file.id !== fileToDelete.id
    );
    setSharedFiles(updatedSharedFiles);

    const updatedManagedFiles = manageFiles.filter(
      (file) => file.id !== fileToDelete.id
    );
    setManageFiles(updatedManagedFiles);
  };

  const downloadFile = (fileToDownload) => {
    const link = document.createElement("a");
    link.href = fileToDownload.link;
    link.download = fileToDownload.name;
    link.click();
  };

  const shareFile = (fileToShare) => {
    const shareableLink = `${window.location.origin}/download/${fileToShare.id}`;
    navigator.clipboard.writeText(shareableLink).then(() => {
      alert("Link copied to clipboard: " + shareableLink);
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("currentUser");
  };

  return (
    <Router>
      <CssBaseline />
      <NavBar isLoggedIn={isLoggedIn} logout={logout} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/upload"
          element={
            isLoggedIn ? (
              <FileUpload addFile={addManagedFile} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/shared" element={<SharedFiles files={sharedFiles} />} />
        <Route
          path="/managefiles"
          element={
            isLoggedIn ? (
              <ManageFiles
                files={manageFiles}
                deleteFile={deleteFile}
                downloadFile={downloadFile}
                shareFile={shareFile}
              />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<Signup setUsers={setUsers} />} />
        <Route
          path="/download/:id"
          element={<DownloadFile files={manageFiles} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
