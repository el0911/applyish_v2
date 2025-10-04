import { useState, useEffect } from 'react';
import { FileUploadQuestion } from './v3/questionTypes';

interface FileQuestionProps {
  question: FileUploadQuestion;
  onNext: (answer: { [key: string]: File | null }) => void;
  answers: { [key: string]: string | number | File | Date | boolean | string[] | undefined | null };
}

export default function FileQuestion({ question, onNext, answers }: FileQuestionProps) {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (answers[question.id] instanceof File) {
      setFile(answers[question.id] as File);
    } else if (typeof answers[question.id] === 'string') {
        // If it's a string, it means it's a URL from a previous submission
        // We can't re-populate the file input with a URL, so we just display the name
        // For now, we'll just set the file name for display purposes
        setFile(new File([], answers[question.id] as string));
    }
  }, [answers, question.id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setError(null);
      } else {
        setFile(null);
        setError('Please upload a PDF, DOC, or DOCX file.');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file && !question.optional) {
      setError('Please upload a resume to continue.');
      return;
    }
    onNext({ [question.id]: file });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <label className="block text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {question.title} {question.optional && <span className="text-base font-normal text-gray-500 dark:text-gray-400">(optional)</span>}
        </label>
        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOC, or DOCX</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" required={!question.optional} />
            </label>
        </div>
        {file && <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">File: {file.name}</p>}
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        {!file && !question.optional && <p className="mt-2 text-sm text-red-500 font-bold">A resume is required to continue.</p>}
        <div className="mt-4 flex justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next
            </button>
            {question.optional && (
                <button type="button" onClick={() => onNext({ [question.id]: null })} className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-3 px-6 rounded-full">
                    Skip
                </button>
            )}
        </div>
      </form>
    </div>
  );
}