import { ThankYouQuestion } from './types';

interface ThankYouScreenProps {
  question?: ThankYouQuestion;
  isLoading?: boolean;
}

export default function ThankYouScreen({ question, isLoading }: ThankYouScreenProps) {
  return (
    <div className="text-center">
      {isLoading ? (
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Submitting...</h1>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{question?.title || "Thank you for your application!"}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">{question?.description || "We will get back to you soon."}</p>
        </>
      )}
    </div>
  );
}
