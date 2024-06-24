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
      setLink(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpload = () => {
    if (file) {
      addFile({ name: file.name, link });
      navigate("/shared");
    }
  };

  return (
    <div className="background">
      <Container sx={{ textAlign: "center", marginTop: 8 }}>
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
