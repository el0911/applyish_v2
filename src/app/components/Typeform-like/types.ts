export interface BaseQuestion {
  type: string;
  id: string;
  title: string;
  optional?: boolean;
}

export interface WelcomeQuestion extends BaseQuestion {
  type: 'welcome';
  description: string;
}

export interface TextQuestion extends BaseQuestion {
  type: 'text' | 'email' | 'phone';
}

export interface FileQuestion extends BaseQuestion {
  type: 'file';
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: string[];
}

export interface ThankYouQuestion extends BaseQuestion {
  type: 'thankyou';
  description: string;
}

export type Question = WelcomeQuestion | TextQuestion | FileQuestion | MultipleChoiceQuestion | ThankYouQuestion;
