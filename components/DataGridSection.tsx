import React from 'react';

type Props = {
  data: any[];
  errors: string[];
};

export const DataGridSection: React.FC<Props> = ({ data, errors }) => {
  return (
    <div>
      <h2>📊 Data Preview</h2>
      {errors.length > 0 ? (
        <ul style={{ color: 'red' }}>{errors.map((err, i) => <li key={i}>{err}</li>)}</ul>
      ) : (
        <table border={1} cellPadding={6} style={{ backgroundColor: 'white' }}>
          <thead>
            <tr>{data[0]?.map((header: string, idx: number) => <th key={idx}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {data.slice(1).map((row: any[], idx: number) => (
              <tr key={idx}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};