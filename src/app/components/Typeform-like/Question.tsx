import { useState } from 'react';
import { TextQuestion } from './types';

interface QuestionProps {
  question: TextQuestion;
  onNext: (answer: { [key: string]: string | null }) => void;
  answers: { [key: string]: string | File | null };
}

export default function QuestionComponent({ question, onNext, answers }: QuestionProps) {
  const [answer, setAnswer] = useState(answers[question.id] as string || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ [question.id]: answer });
  };

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit}>
        <label className="block text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {question.title} {question.optional && <span className="text-base font-normal text-gray-500 dark:text-gray-400">(optional)</span>}
        </label>
        <input
          type={question.type}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
          required={!question.optional}
        />
        <div className="mt-4 flex justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Next
            </button>
            {question.optional && (
                <button type="button" onClick={() => onNext({ [question.id]: null })} className="bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-2 px-4 rounded">
                    Skip
                </button>
            )}
        </div>
      </form>
    </div>
  );
}

