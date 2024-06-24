/* src/components/FileList.css */
// src/components/FileList.js
import React from "react";
import "./FileList.css";

const FileList = ({ files }) => {
  return (
    <div className="file-list">
      {files.map((file, index) => (
        <div key={index} className="file-item">
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            {file.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FileList;
