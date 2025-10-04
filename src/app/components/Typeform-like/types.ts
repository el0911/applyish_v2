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
  id: string;
  title: string;
}

export interface FileQuestion extends BaseQuestion {
  type: 'file';
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: {
    value:string,
    label:string
  }[];
}

export interface ThankYouQuestion extends BaseQuestion {
  type: 'thankyou';
  description: string;
}

export type Question = WelcomeQuestion | TextQuestion | FileQuestion | MultipleChoiceQuestion | ThankYouQuestion;

export interface FormData {
  [key: string]: string | number | File | Date | boolean | string[] | undefined | null;
  // Pain points (Steps 1, 3, 6, 7)
  pain_linkedin_200apps?: boolean;
  pain_black_hole?: boolean;
  pain_ats_filters?: boolean;
  pain_job_site_jumping?: boolean;
  
  // Service selection (Step 12)
  plan_selected?: "bulk" | "pro" | "custom";
  plan_price?: 50 | 55 | 65;
  plan_type?: "one-time" | "weekly";
  
  // Qualification (Steps 14-17)
  time_availability?: string;
  blockers?: string[];
  open_to_learn?: boolean;
  biggest_challenge?: string;
  
  // Booking (Step 20)
  full_name?: string;
  email?: string;
  phone?: string;
  call_datetime?: Date;
  timezone?: string;
  
  // Metadata
  flow_started?: Date;
  flow_completed?: Date;
}
