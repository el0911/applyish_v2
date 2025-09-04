import { Question } from './types';

interface NavigationProps {
  questions: Question[];
  currentQuestionIndex: number;
  onGoTo: (index: number) => void;
}

export default function Navigation({ questions, currentQuestionIndex, onGoTo }: NavigationProps) {
  const filteredQuestions = questions.filter(q => q.type !== 'welcome' && q.type !== 'thankyou');

  return (
    <div className="w-full flex rounded-full h-2 bg-gray-200 dark:bg-gray-700 mt-8 overflow-hidden">
      {filteredQuestions.map((q, index) => {
        const questionIndex = questions.indexOf(q);
        const isActive = currentQuestionIndex === questionIndex;
        const isCompleted = currentQuestionIndex > questionIndex;

        return (
            <div key={index} className="flex-1 h-full">
                <button
                  onClick={() => onGoTo(questionIndex)}
                  className={`w-full h-full transition-all duration-300 ease-in-out ${isActive ? 'bg-blue-500' : isCompleted ? 'bg-green-500' : 'bg-transparent'}`}
                />
            </div>
        )
    }) }
    </div>
  );
}
