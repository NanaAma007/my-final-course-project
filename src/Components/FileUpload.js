import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Input, Box } from "@mui/material";
import "./FileUpload.css"; // Import the CSS file

const FileUpload = ({ addFile }) => {
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      const uniqueId = Math.random().toString(36).substring(2, 15); // Generate a unique ID
      setLink(`${window.location.origin}/download/${uniqueId}`);
      addFile({ name: e.target.files[0].name, link: fileUrl, id: uniqueId });
    }
  };

  const handleUpload = () => {
    if (file) {
      navigate("/shared");
    }
  };

  return (
    <div className="background">
      <Container className="content">
        <Typography variant="h4" gutterBottom>
          Upload Your File
        </Typography>
        <Input type="file" onChange={handleFileChange} />
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Box>
        {link && (
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              File uploaded! Share this link:
            </Typography>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default FileUpload;
