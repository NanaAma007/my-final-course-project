// src/components/SharedFiles.js
import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const SharedFiles = ({ files }) => {
  return (
    <Container sx={{ textAlign: "center", marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>
        Shared Files
      </Typography>
      <List>
        {files.map((file, index) => (
          <ListItem
            key={index}
            component="a"
            href={file.link}
            target="_blank"
            rel="noopener noreferrer"
            button
          >
            <ListItemText primary={file.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SharedFiles;
