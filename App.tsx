
import React, { useState, useCallback } from 'react';
import { analyzeImageWithGemini } from './services/geminiService';
import { fileToBase64 } from './utils/imageUtils';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import ImagePreview from './components/ImagePreview';
import PromptInput from './components/PromptInput';
import AnalysisResult from './components/AnalysisResult';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import { SparklesIcon, PhotoIcon } from './components/Icons';

interface ImageState {
  file: File;
  base64: string;
}

function App() {
  const [image, setImage] = useState<ImageState | null>(null);
  const [prompt, setPrompt] = useState<string>('Describe this image in detail.');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleImageUpload = useCallback(async (file: File) => {
    setError('');
    setAnalysisResult('');
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      setImage(null);
      return;
    }
    try {
      const base64 = await fileToBase64(file);
      setImage({ file, base64 });
    } catch (err) {
      setError('Failed to read image file. Please try again.');
      setImage(null);
    }
  }, []);

  const handleAnalyzeClick = async () => {
    if (!image) {
      setError('Please upload an image first.');
      return;
    }

    setIsLoading(true);
    setError('');
    setAnalysisResult('');

    try {
      const result = await analyzeImageWithGemini(image.base64, image.file.type, prompt);
      setAnalysisResult(result);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred during analysis.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setImage(null);
    setAnalysisResult('');
    setError('');
    setPrompt('Describe this image in detail.');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <Header />
      <main className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-8 mt-6 flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-slate-700">1. Upload Your Image</h2>
          {image ? (
            <ImagePreview imageBase64={image.base64} onClear={handleClear} />
          ) : (
            <ImageUploader onImageUpload={handleImageUpload} />
          )}

          {image && (
            <>
              <h2 className="text-xl font-bold text-slate-700">2. What do you want to know?</h2>
              <PromptInput value={prompt} onChange={(e) => setPrompt(e.target.value)} />
              <button
                onClick={handleAnalyzeClick}
                disabled={isLoading || !image}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <SparklesIcon className="w-5 h-5" />
                    Analyze Image
                  </>
                )}
              </button>
            </>
          )}
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col">
           <div className="w-full h-px bg-slate-200 lg:hidden mb-8"></div>
           <div className="lg:w-px lg:h-full bg-slate-200 lg:ml-8 lg:mr-8 hidden lg:block"></div>
           
           <div className="flex flex-col flex-1">
             <h2 className="text-xl font-bold text-slate-700 mb-4">3. AI Analysis</h2>
             <div className="bg-slate-50 rounded-lg p-4 flex-grow flex flex-col min-h-[300px]">
                {isLoading && !analysisResult && (
                   <div className="flex-grow flex flex-col items-center justify-center text-slate-500">
                     <SparklesIcon className="w-16 h-16 text-indigo-200 animate-pulse" />
                     <p className="mt-4 text-lg font-medium">Thinking...</p>
                   </div>
                )}
                {error && <ErrorMessage message={error} />}
                {analysisResult && <AnalysisResult result={analysisResult} />}
                {!isLoading && !analysisResult && !error && (
                   <div className="flex-grow flex flex-col items-center justify-center text-slate-400 text-center">
                     <PhotoIcon className="w-16 h-16 text-slate-300" />
                     <p className="mt-4 text-lg font-medium">Your analysis will appear here.</p>
                   </div>
                )}
             </div>
           </div>
        </div>
      </main>
    </div>
  );
}

export default App;
