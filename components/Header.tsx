
import React from 'react';
import { EyeIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="inline-flex items-center gap-3 bg-white py-3 px-6 rounded-full shadow-md">
        <EyeIcon className="w-8 h-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          AI Image Analyzer
        </h1>
      </div>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        Upload any image and ask Gemini to describe it, answer questions, or perform detailed analysis.
      </p>
    </header>
  );
};

export default Header;
