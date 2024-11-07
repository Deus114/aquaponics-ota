import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '*',
    multiple: false,
  });

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className={`container ${darkMode ? '' : 'dark'}`}>
      <header className="header">
        <h1>My Aquaponics</h1>
      </header>

      <div {...getRootProps({ className: 'drop-area' })}>
        <input {...getInputProps()} />
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p>Drag and drop here<br />or<br />click to select file</p>
        )}
      </div>
      <br />
      <label htmlFor="file-upload" className="upload-btn">
        Upload
      </label>
      <input
        id="file-upload"
        type="file"
        accept="*"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />

      <div className="settings">
        <h2 className='sett'>Settings</h2>
        <div className="setting-item">
          <label>OTA Mode</label>
          <select>
            <option value="firmware">Firmware</option>
          </select>
        </div>

        <div className="setting-item">
          <label>Dark UI</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
