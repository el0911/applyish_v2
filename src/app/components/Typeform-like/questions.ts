import { Question } from './types';

export const questions: Question[] = [
  {
    type: 'welcome',
    title: 'Welcome to Your Job Application Journey!',
    description: 'Let\'s make your job search effortless. This quick form will help us understand your profile and preferences.',
    id: 'welcome',
  },
  {
    type: 'text',
    title: 'What is your full name?',
    id: 'fullname',
  },
  {
    type: 'email',
    title: 'What is your email address?',
    id: 'email',
  },
  {
    type: 'phone',
    title: 'What is your phone number?',
    id: 'phone',
  },
  {
    type: 'text',
    title: 'LinkedIn Profile URL',
    id: 'linkedinbio',
    optional: true,

  },
  // {
  //   type: 'text',
  //   title: 'GitHub Profile URL',
  //   id: 'github',
  // },
  {
    type: 'text',
    title: 'Portfolio URL',
    id: 'portfolio',
    optional: true,
  },
  {
    type: 'multiple-choice',
    title: 'Where did you hear about us?',
    id: 'howHearAboutUs',
    options: [
      'LinkedIn',
      'Facebook',
      'Instagram',
      'Twitter',
      'Google Search',
      'Friend/Colleague',
      'Other',
    ],
  },
  {
    type: 'multiple-choice',
    title: 'Why are you looking for a job?',
    id: 'whyLookingForJob',
    options: [
      'Career Change',
      'Better Opportunity',
      'Layoff/Redundancy',
      'Relocation',
      'Entry Level',
      'Other',
    ],
  },
  {
    type: 'text',
    title: 'What is your desired career path or role?',
    id: 'career',
  },
  {
    type: 'file',
    title: 'Please upload your resume.',
    id: 'resume',
  },
  {
    type: 'file',
    title: 'Please upload your cover letter.',
    id: 'resume_2',
    optional: true,
  },
  // {
  //   type: 'multiple-choice',
  //   title: 'Are you authorized to work in the US?',
  //   id: 'workAuthorization',
  //   options: ['Yes', 'No'],
  // },
  // {
  //   type: 'multiple-choice',
  //   title: 'Will you now or in the future require sponsorship for employment visa status?',
  //   id: 'sponsorship',
  //   options: ['Yes', 'No'],
  // },
  // {
  //   type: 'multiple-choice',
  //   title: 'What is your gender?',
  //   id: 'gender',
  //   options: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
  // },
  // {
  //   type: 'multiple-choice',
  //   title: 'What is your race?',
  //   id: 'race_',
  //   options: [
  //     'Hispanic or Latino',
  //     'White (Not Hispanic or Latino)',
  //     'Black or African American (Not Hispanic or Latino)',
  //     'Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)',
  //     'Asian (Not Hispanic or Latino)',
  //     'American Indian or Alaska Native (Not Hispanic or Latino)',
  //     'Two or More Races (Not Hispanic or Latino)',
  //     'Prefer not to say',
  //   ],
  // },
  // {
  //   type: 'multiple-choice',
  //   title: 'Are you a veteran?',
  //   id: 'veteran_status_',
  //   options: ['Yes', 'No', 'Prefer not to say'],
  // },
  // {
  //   type: 'multiple-choice',
  //   title: 'What is your disability status?',
  //   id: 'disability_status_',
  //   options: [
  //     'Yes, I have a disability (or previously had one)',
  //     'No, I don\'t have a disability',
  //     'I don\'t wish to answer',
  //   ],
  // },
  {
    type: 'thankyou',
    title: 'Thank you for your application!',
    description: 'We will get back to you soon.',
    id: 'thankyou',
  },
];