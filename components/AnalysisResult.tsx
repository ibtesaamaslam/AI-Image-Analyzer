
import React from 'react';

interface AnalysisResultProps {
  result: string;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
  // Simple paragraph splitting for now. For full markdown, a library would be needed.
  const paragraphs = result.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="prose prose-slate max-w-none text-slate-800">
      {paragraphs.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
};

export default AnalysisResult;
