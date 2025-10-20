interface BaseQuestion {
  id?: string;
  type: string;
  title: string | { text: string; highlighted?: boolean }[];
  subtitle?: string;
  emoji?: string;
  body?: { text: string; highlighted?: boolean }[];
  autoAdvance?: boolean;
}

interface PainPointQuestion extends BaseQuestion {
  type: "pain-point";
  id: string;
  title: string;
  subtitle: string;
  quote: { text: string; highlighted?: boolean }[];
}

interface ProblemValidationQuestion extends BaseQuestion {
  type: "problem-validation";
  title: string;
  subtitle: string;
  emoji: string;
  body: { text: string; highlighted?: boolean }[];
  bottomText?: { text: string; highlighted?: boolean }[];
}

export interface SocialProofQuestion extends BaseQuestion {
  type: "social-proof";
  title: string;
  subtitle: string;
  testimonial: {
    text: { text: string; highlighted?: boolean }[];
    author: string;
    stars: number;
    avatar: string;
    trustpilot_stars?: string;
  };
  screenshots?: {
    title: string;
    images: string[];
  };
}

interface ApplicationTimeRealityQuestion extends BaseQuestion {
  type: "application-time-reality";
  title: string;
  subtitle: string;
  emoji: string;
  points: { text: string; highlighted?: boolean }[][];
}

interface ValuePreviewQuestion extends BaseQuestion {
  type: "value-preview";
  subtitle: string;
  body: { text: string; highlighted?: boolean }[];
  bottomText?: { text: string; highlighted?: boolean }[];
  testimonial?: {
      text: { text: string; highlighted?: boolean }[];
      author: string;
      stars: number;
      avatar: string;
      trustpilot_stars: string;
    };
  bulletPoints?: { text: string; highlighted?: boolean }[][];
}

interface HowItWorksQuestion extends BaseQuestion {
  type: "how-it-works";
  title: string;
  subtitle: string;
  emoji: string;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
  testimonial?: {
    text: { text: string; highlighted?: boolean }[];
    author: string;
    stars: number;
    avatar: string;
    trustpilot_stars: string;
  };
  screenshots?: {
    title: string;
    images: string[];
  };
}

interface TestimonialScreenshotsQuestion extends BaseQuestion {
  type: "testimonial-screenshots";
  title: string;
  subtitle: string;
}

interface TimeAvailabilityQuestion extends BaseQuestion {
  type: "time-availability";
  options: string[];
  answerKey: string;
}

interface ApplicationBlockersQuestion extends BaseQuestion {
  type: "application-blockers";
  subheader: string;
  options: string[];
  answerKey: string;
  multiSelect: boolean;
}

interface SkillsFlexibilityQuestion extends BaseQuestion {
  type: "skills-flexibility";
  subheader: string;
  answerKey: string;
}

interface OpenEndedChallengeQuestion extends BaseQuestion {
  type: "open-ended-challenge";
  placeholder: string;
  helperText: string;
  answerKey: string;
  optional: boolean;
}

interface LoadingAnimationQuestion extends BaseQuestion {
  type: "loading-animation";
  title: string;
  subtitle: string;
  duration: number;
}

interface FindingJobsAnimationQuestion extends BaseQuestion {
  type: "finding-jobs-animation";
  duration: number;
  testimonial: {
    text: { text: string; highlighted?: boolean }[];
    author: string;
    stars: number;
    avatar: string;
    trustpilot_stars: string;
  };
}

interface CalendarIntroductionQuestion extends BaseQuestion {
  type: "calendar-introduction";
  title: string;
  subtitle: string;
  body: { text: string; highlighted?: boolean }[];
  expectations: string[];
  buttonText: string;
}

export interface CalendarBookingQuestion extends BaseQuestion {
  type: "calendar-booking";
  title: string;
  subtitle: string;
  buttonText?: string;
  fields?: {
    name: string;
    label: string;
    type: string;
    required: boolean;
    placeholder: string;
  }[];
  calendarConfig: {
    duration: number;
    type: string;
    calendlyUrl: string;
  };
  helperText?: string;
  callout?: {
    text: { text: string; highlighted?: boolean }[];
    style: 'info' | 'success';
  };
}

interface ConfirmationBridgeQuestion extends BaseQuestion {
  type: "confirmation-bridge";
  title: string;
  subtitle: string;
  body: { text: string; highlighted?: boolean }[];
  callout?: {
    text: { text: string; highlighted?: boolean }[];
    icon?: string;
    style: 'info' | 'success';
  };
  buttonText: string;
}

export interface ConfirmationScreenQuestion extends BaseQuestion {
  type: "confirmation-screen";
  confirmationMessage: {
    dateLabel: string;
    emailLabel: string;
  };
  whatYouReceive: {
    icon: string;
    title: string;
    items: string[];
  };
  cta: string;
  optionalButtons: {
    label: string;
    action: string;
  }[];
  footer: string;
  nextSteps?: {
    title: string;
    items: {
      text: string;
      subtext: string;
      cta: string | null;
      action: string | null;
    }[];
  };
}

interface TextInputQuestion extends BaseQuestion {
  type: "text";
  id: string;
  title: string;
  placeholder: string;
  answerKey: string;
  required: boolean;
}

export interface EmailQuestion extends BaseQuestion {
  type: "email";
  id: string;
  title: string;
  subtitle: string;
  placeholder: string;
  answerKey: string;
  required: boolean;
  helperText?: string;
  valueProps?: string[];
}

export interface PhoneInputQuestion extends BaseQuestion {
  type: "phone-input";
  id: string;
  title: string;
  answerKey: string;
  required: boolean;
  placeholder: string;
}

interface MultipleChoiceQuestionType extends BaseQuestion {
  type: "multiple-choice";
  id: string;
  title: string;
  options: {
    value: string;
    label: string;
  }[];
  answerKey: string;
}

export interface FileUploadQuestion extends BaseQuestion {
  type: "file-upload";
  id: string;
  title: string;
  answerKey: string;
  fileType: string;
  maxSize: string;
  optional: boolean;
}

interface ServicePrimerQuestion extends BaseQuestion {
  type: "service-primer";
  title: string;
  subtitle: string;
  options: {
    title: string;
    description: string;
    value: string;
  }[];
}

interface ServiceSelectionQuestion extends BaseQuestion {
  type: "service-selection";
  title: string;
  subtitle: string;
  callout: {
    text: { text: string; highlighted?: boolean }[];
    icon: string;
    style: 'info' | 'success';
  };
  plans: {
    id: string;
    name: string;
    price: number;
    period: string;
    badge: string | null;
    description: string;
    features: ({ text: string; highlighted?: boolean }[] | string)[];
    buttonText: string;
    buttonStyle: string;
    elevated?: boolean;
  }[];
  mobileOrder: string[];
  answerKey: string;
}

export type Question =
  | PainPointQuestion
  | ProblemValidationQuestion
  | SocialProofQuestion
  | ApplicationTimeRealityQuestion
  | ValuePreviewQuestion
  | HowItWorksQuestion
  | TestimonialScreenshotsQuestion
  | TimeAvailabilityQuestion
  | ApplicationBlockersQuestion
  | SkillsFlexibilityQuestion
  | OpenEndedChallengeQuestion
  | LoadingAnimationQuestion
  | FindingJobsAnimationQuestion
  | CalendarIntroductionQuestion
  | CalendarBookingQuestion
  | ConfirmationBridgeQuestion
  | ConfirmationScreenQuestion
  | TextInputQuestion
  | EmailQuestion
  | PhoneInputQuestion
  | MultipleChoiceQuestionType
  | FileUploadQuestion
  | ServicePrimerQuestion
  | ServiceSelectionQuestion
  | ThankYouCustomQuestion;

interface ThankYouCustomQuestion extends BaseQuestion {
  type: "thank-you-custom";
  title: string;
  description: string;
  emoji?: string;
}
