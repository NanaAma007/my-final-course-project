import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";

const SharedFiles = ({ files }) => {
  // Ensure files is defined and not null or empty
  if (!files || files.length === 0) {
    return (
      <Container sx={{ textAlign: "center", marginTop: 8 }}>
        <Typography variant="h4" gutterBottom>
          No files shared yet
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ textAlign: "center", marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>
        Shared Files
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <List sx={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
          {files.map((file, index) => (
            <React.Fragment key={index}>
              <ListItem
                component="a"
                href={file.link}
                target="_blank"
                rel="noopener noreferrer"
                button
                sx={{
                  backgroundColor: "#f5f5f5",
                  marginBottom: 1,
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <ListItemText primary={file.name} />
              </ListItem>
              {index < files.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default SharedFiles;
