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
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`w-full text-left font-semibold p-4 border rounded-2xl cursor-pointer flex items-center justify-between transition-colors duration-200 ${selectedOption === option.value ? 'border-indigo-600 border-2' : 'border-gray-300 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700'}`}
          >
            <span className="text-gray-900 dark:text-white">{option.label}</span>
            {selectedOption === option.value && <span className="text-indigo-600 text-2xl">✓</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

