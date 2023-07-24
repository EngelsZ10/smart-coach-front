// Dropzone.js
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onFileDrop }) => {
  const [droppedFile, setDroppedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the dropped file
    setDroppedFile(acceptedFiles[0]);
    onFileDrop(acceptedFiles[0]);
  }, [onFileDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      {droppedFile ? (
        <div className="preview">
          {droppedFile.type.startsWith('image/') ? (
            <img src={URL.createObjectURL(droppedFile)} alt={droppedFile.name} />
          ) : (
            <p>{droppedFile.name}</p>
          )}
        </div>
      ) : (
        <p>Drag and drop a file here or click to select a file</p>
      )}
    </div>
  );
};

export default Dropzone;
