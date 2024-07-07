import React from "react";
import { useParams } from "react-router-dom";

const DownloadFile = ({ files }) => {
  const { id } = useParams();
  const file = files.find((file) => file.id === id);

  if (!file) {
    return <div>File not found</div>;
  }

  return (
    <div>
      <a href={file.link} download={file.name}>
        Click here to download {file.name}
      </a>
    </div>
  );
};

export default DownloadFile;
