import { WelcomeQuestion } from './types';

interface WelcomeScreenProps {
  question: WelcomeQuestion;
  onNext: () => void;
}

export default function WelcomeScreen({ question, onNext }: WelcomeScreenProps) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{question.title}</h1>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">{question.description}</p>
      <button onClick={onNext} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Start
      </button>
    </div>
  );
}
