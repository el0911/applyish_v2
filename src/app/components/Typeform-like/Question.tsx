import { useState } from 'react';
import { TextQuestion } from './types';

interface QuestionProps {
  question: TextQuestion;
  onNext: (answer: { [key: string]: string | null }) => void;
  answers: { [key: string]: string | number | File | Date | boolean | string[] | undefined | null };
}

export default function QuestionComponent({ question, onNext, answers }: QuestionProps) {
  const [answer, setAnswer] = useState(answers[question.id] as string || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ [question.id]: answer });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <label className="block text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {question.title} {question.optional && <span className="text-base font-normal text-gray-500 dark:text-gray-400">(optional)</span>}
        </label>
        {question.subtitle && <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{question.subtitle}</p>}
        <input
          type={question.type}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400"
          required={!question.optional}
        />
        <div className="mt-4 flex justify-center space-x-4">
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
              Next
            </button>
            {question.optional && (
                <button type="button" onClick={() => onNext({ [question.id]: null })} className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-3 px-10 rounded-full">
                    Skip
                </button>
            )}
        </div>
      </form>
    </div>
  );
}

