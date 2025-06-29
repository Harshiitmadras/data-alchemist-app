import React from 'react';

type Props = {
  onFileUpload: (file: File) => void;
};

export const FileUploader: React.FC<Props> = ({ onFileUpload }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  };
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label><strong>📤 Upload CSV File:</strong></label><br />
      <input type="file" accept=".csv" onChange={handleChange} />
    </div>
  );
};