import { MultipleChoiceQuestion as MultipleChoiceQuestionType } from './types';

interface MultipleChoiceQuestionProps {
  question: MultipleChoiceQuestionType;
  onNext: (answer: { [key: string]: string }) => void;
  answers: { [key: string]: string | File | null };
}

export default function MultipleChoiceQuestion({ question, onNext, answers }: MultipleChoiceQuestionProps) {
  const handleSelect = (option: string) => {
    onNext({ [question.id]: option });
  };

  const selectedOption = answers[question.id] as string | null;

  return (
    <div className="w-full max-w-lg">
      <h2 className="block text-2xl font-bold mb-4 text-gray-900 dark:text-white">{question.title}</h2>
      <div className="space-y-2">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`w-full text-left font-semibold py-2 px-4 border rounded shadow transition-colors duration-200 ${selectedOption === option ? 'bg-blue-500 text-white border-blue-500' : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

