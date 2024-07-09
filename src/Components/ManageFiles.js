import React, { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ManageFiles = ({ files, deleteFile, downloadFile, shareFile }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleClick = (event, file) => {
    setAnchorEl(event.currentTarget);
    setSelectedFile(file);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedFile(null);
  };

  const handleDelete = () => {
    deleteFile(selectedFile);
    handleClose();
  };

  const handleDownload = () => {
    downloadFile(selectedFile);
    handleClose();
  };

  const handleShare = () => {
    shareFile(selectedFile);
    handleClose();
  };

  return (
    <Container sx={{ textAlign: "center", marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>
        Manage Files
      </Typography>
      <List sx={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
        {files.map((file, index) => (
          <React.Fragment key={file.id}>
            <ListItem
              disablePadding
              sx={{
                backgroundColor: "#f5f5f5",
                marginBottom: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ListItemText primary={file.name} />
              <IconButton
                aria-controls={`menu-${file.id}`}
                aria-haspopup="true"
                onClick={(event) => handleClick(event, file)}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id={`menu-${file.id}`}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleDownload}>Download</MenuItem>
                <MenuItem onClick={handleShare}>Share</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </ListItem>
            {index < files.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default ManageFiles;
