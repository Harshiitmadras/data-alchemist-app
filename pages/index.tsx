import React, { useState } from 'react';
import { FileUploader } from '../components/FileUploader';
import { DataGridSection } from '../components/DataGridSection';
import { RuleBuilder } from '../components/RuleBuilder';
import { parseCSV } from '../lib/parser';
import { validateData } from '../lib/validators';
import { suggestAIEnhancements } from '../lib/ai';

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [aiSuggestion, setAiSuggestion] = useState<string>('');

  const handleFileUpload = async (file: File) => {
    const parsedData = await parseCSV(file);
    const validationErrors = validateData(parsedData);
    setData(parsedData);
    setErrors(validationErrors);
    setAiSuggestion(suggestAIEnhancements(parsedData));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <header style={{ padding: '1rem', backgroundColor: '#004080', color: 'white' }}>
        <h1>⚗️ Data Alchemist</h1>
        <p>Transform your CSVs with rule-based intelligence & AI suggestions.</p>
      </header>
      <main style={{ padding: '2rem' }}>
        <FileUploader onFileUpload={handleFileUpload} />
        <hr />
        <DataGridSection data={data} errors={errors} />
        <hr />
        <RuleBuilder data={data} />
        <hr />
        {aiSuggestion && (
          <div style={{ backgroundColor: '#fff8dc', padding: '1rem', borderRadius: '8px' }}>
            <strong>🤖 AI Suggestion:</strong>
            <p>{aiSuggestion}</p>
          </div>
        )}
      </main>
    </div>
  );
}