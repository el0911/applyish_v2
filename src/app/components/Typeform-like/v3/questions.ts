import { Question } from './questionTypes';

export const questions: Question[] = [
  // --- SECTION 1: PAIN QUALIFICATION (Steps 1-6) ---
  {
    id: "pain_linkedin_200apps",
    type: "pain-point",
    title: "Do you relate to the following statement?",
    subtitle: "HOW WE HELP",
    quote: [{ text: "Every job I apply on LinkedIn already has " }, { text: "200+ applications", highlighted: true }],
  },
  {
    type: "problem-validation",
    title: "Not-so-good news",
    subtitle: "HOW WE HELP",
    emoji: "👻",
    body: [{ text: "57% of remote jobs get 300+ applications within 24 hours. No wonder it's easy to feel " }, { text: "invisible.", highlighted: true }],
  },
  {
    id: "pain_black_hole",
    type: "pain-point",
    title: "Do you relate to the following statement?",
    subtitle: "HOW WE HELP",
    quote: [{ text: "I'm afraid my resume disappears into a " }, { text: "black hole", highlighted: true }],
  },
  {
    type: "problem-validation",
    title: "What really happens",
    subtitle: "HOW WE HELP",
    emoji: "🤖",
    body: [{ text: "75% of all resumes never reach human recruiters.", highlighted: true }, { text: " Applicant Tracking Systems (ATS) reject them automatically — often " }, { text: "by mistake.", highlighted: true }],
  },
  {
    id: "pain_ats_filters",
    type: "pain-point",
    title: "Do you relate to the following statement?",
    subtitle: "HOW WE HELP",
    quote: [{ text: "I think " }, { text: "software filters my resume", highlighted: true }, { text: " before recruiters see it" }],
  },
  {
    id: "pain_job_site_jumping",
    type: "pain-point",
    title: "Do you relate to the following statement?",
    subtitle: "HOW WE HELP",
    quote: [{ text: "I'm " }, { text: "exhausted jumping between different job sites", highlighted: true }, { text: ", checking the same positions" }],
  },

  // --- SECTION 2: VALUE PREVIEW (Steps 7-13) ---
  {
    type: "social-proof",
    title: "But there's a way through",
    subtitle: "HOW WE HELP",
    testimonial: {
      text: [{ text: "I was getting nowhere with applications. After using Applyish, I got past ATS filters and landed " }, { text: "8 interviews in 2 weeks.", highlighted: true }],
      author: "Sarah M., Marketing Manager",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&h=120&fit=crop&crop=face",
    },
  },
  {
    type: "application-time-reality",
    title: "It's even worse than it feels",
    subtitle: "HOW WE HELP",
    emoji: "😩",
    points: [
      [{ text: "Average application takes " }, { text: "30+ minutes", highlighted: true }],
      [{ text: "90% is " }, { text: "repetitive data entry", highlighted: true }],
      [{ text: "Most job seekers spend " }, { text: "more time on forms than actual job search", highlighted: true }],
    ],
  },
  {
    type: "value-preview",
    title: [{ text: "Access " }, { text: "750k+ hidden jobs", highlighted: true }, { text: " monthly" }],
    subtitle: "HOW WE HELP",
    body: [
      { text: "Applyish scans hundreds of job boards daily to find opportunities you'd never see.", highlighted: true },
      { text: " Get access to private roles and exclusive listings " },
      { text: "not found on LinkedIn or Indeed.", highlighted: true }
    ],
    emoji: "🕵️",
    bottomText: [{ text: "Most job seekers " }, { text: "only see 1/4 of opportunities", highlighted: true }],
  },
  {
    type: "value-preview",
    title: "We find jobs that match your profile",
    subtitle: "HOW WE HELP",
    body: [
      { text: "Applyish analyzes your resume, location, and job preferences.", highlighted: true },
      { text: " Then we automatically apply to roles that fit—" },
      { text: "no more wasting time on irrelevant listings.", highlighted: true }
    ],
    emoji: "🎯",
  },
  {
    type: "value-preview",
    title: "We apply to 100+ jobs per week that match YOU",
    subtitle: "HOW WE HELP",
    body: [
      { text: "Applyish analyzes your resume, location, and preferences—", highlighted: true },
      { text: "then we  Apply to jobs that fit on your behalf . We submit " },
      { text: "100+ tailored applications weekly", highlighted: true },
      { text: " so you're constantly in front of hiring managers. " },
      { text: "Zero work on your end.", highlighted: true }
    ],
    emoji: "📈",
    testimonial: {
      text: [
        { text: "Having a service that applies to 100+ jobs for me every week saved countless hours and landed me " }, 
        { text: "12 interviews in three weeks!", highlighted: true }
      ],
      author: "Michael",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&h=120&fit=crop&crop=face",
      trustpilot_stars: "/trustpilot-5-star.png",
    },
  },
  {
    type: "how-it-works",
    title: "How Applyish Works",
    subtitle: "HOW WE HELP",
    steps: [
      {
        number: "1",
        title: "Tell us your preferences",
        description: "Share your resume, location, job titles, and salary requirements"
      },
      {
        number: "2", 
        title: "We find matching jobs",
        description: "Our system scans 750k+ jobs daily for roles that fit YOUR criteria"
      },
      {
        number: "3",
        title: "We apply automatically",
        description: "100+ tailored applications per week, submitted 24/7 on your behalf"
      },
      {
        number: "4",
        title: "You get interviews",
        description: "Track every application and interview invite in your weekly report"
      }
    ],
    emoji: "🔄",
  },
  {
    type: "testimonial-screenshots",
    title: "See the Proof: Real Interview Invites",
    subtitle: "HOW WE HELP",
  },

  // --- SECTION 3: QUALIFICATION QUESTIONS (Steps 14-17) ---
  {
    type: "time-availability",
    title: "How much time can you spend applying daily?",
    subtitle: "HOW WE HELP",
    options: [
      "3-4 hours",
      "1-2 hours",
      "30-60 mins",
      "10-30 mins",
      "Too busy to apply"
    ],
    answerKey: "timeAvailability",
    autoAdvance: true,
  },
  {
    type: "application-blockers",
    title: "What stops you from applying to more jobs?",
    subtitle: "HOW WE HELP",
    subheader: "Select all that apply",
    options: [
      "I don't have enough time",
      "Forms are exhausting",
      "Too many options to track",
      "Deadlines pass too quickly",
      "Lose track of applications",
      "Get distracted from applying"
    ],
    answerKey: "blockers",
    multiSelect: true,
  },
  {
    type: "skills-flexibility",
    title: "Open to learn new skills if the role requires it?",
    subtitle: "HOW WE HELP",
    subheader: "To move forward, specify",
    answerKey: "openToLearn",
  },
  {
    type: "open-ended-challenge",
    title: "What's your biggest job search challenge right now?",
    subtitle: "HOW WE HELP",
    placeholder: "e.g., Not getting responses, too many rejections, don't know where to start...",
    helperText: "Optional — but helps us personalize your onboarding call",
    answerKey: "biggestChallenge",
    optional: true,
  },
  {
    type: "loading-animation",
    title: "Analyzing your responses...",
    subtitle: "Please wait a moment",
    duration: 2000,
    autoAdvance: true,
  },

  // --- SECTION 4: SERVICE SELECTION (Steps 18-19) ---
  {
    type: "service-selection",
    title: "Which service are you interested in learning more about?",
    subtitle: "We'll discuss your options on a free 15-minute call",
    callout: {
      text: [{ text: "No payment required", highlighted: true }, { text: " to book your call" }],
      icon: "✓",
      style: "info"
    },
    plans: [
      {
        id: "bulk",
        name: "Bulk",
        price: 50,
        period: "one-time",
        badge: null,
        description: "Perfect for a quick boost to your job applications.",
        features: [
          [{ text: "100 Applications", highlighted: true }, { text: " to jobs matching your criteria" }],
          "One Time Service",
          "Progress Report"
        ],
        buttonText: "Learn More About Bulk",
        buttonStyle: "secondary",
      },
      {
        id: "pro",
        name: "Pro",
        price: 55,
        period: "week",
        badge: null,
        description: "Consistent applications to jobs that fit you.",
        features: [
          [{ text: "55 Applications Weekly", highlighted: true }, { text: " based on your resume" }],
          "50 LinkedIn Easy Apply Weekly",
          "Location & Preference Matching",
          "Weekly Progress Reports"
        ],
        buttonText: "Learn More About Pro",
        buttonStyle: "secondary",
        elevated: true,
      },
      {
        id: "custom",
        name: "Custom",
        price: 65,
        period: "week",
        badge: "MOST POPULAR",
        description: "Maximum applications matched to your profile.",
        features: [
          [{ text: "75 Applications Weekly", highlighted: true }, { text: " tailored to your background" }],
          "50 LinkedIn Easy Apply Weekly",
          "Location & Preference Matching",
          "Priority Support",
          "Weekly Progress Reports"
        ],
        buttonText: "Learn More About Custom",
        buttonStyle: "secondary",
      }
    ],
    mobileOrder: ["custom", "pro", "bulk"],
    answerKey: "selectedPlan",
  },
  {
    type: "confirmation-bridge",
    title: "Great! Let's talk about the {selectedPlan} plan",
    subtitle: "Book a free 15-minute consultation",
    emoji: "📞",
    body: [
      { text: "On this call, we'll discuss whether the {selectedPlan} plan is right for your situation. " }, 
      { text: "No payment required", highlighted: true }, 
      { text: "—we'll " }, 
      { text: "only proceed if it's a good fit.", highlighted: true }
    ],
    callout: {
      text: [
        { text: "This is a " }, 
        { text: "free consultation.", highlighted: true }, 
        { text: " You'll " }, 
        { text: "only pay if you decide to move forward", highlighted: true }, 
        { text: " after our conversation." }
      ],
      style: "success"
    },
    buttonText: "Book My Free Call",
  },

  // --- SECTION 5: RESUME & CONTACT INFO (Steps 20-22) ---
  {
    id: "email",
    type: "text",
    title: "What's your email address?",
    subtitle: "We'll use this to send you updates on your job applications.",
    placeholder: "john.doe@example.com",
    answerKey: "email",
    required: true,
  },
  {
    id: "resume",
    type: "file-upload",
    title: "Please upload your most recent resume",
    subtitle: "This helps us prepare for your call and understand your background.",
    answerKey: "resumeFile",
    fileType: "pdf,doc,docx",
    maxSize: "5MB",
    optional: false,
  },
  {
    id: "upload_cover_letter",
    type: "file-upload",
    title: "Do you have a cover letter you'd like to share? (Optional)",
    subtitle: "If yes, please upload it here.",
    answerKey: "coverLetterFile",
    fileType: "pdf,doc,docx",
    maxSize: "5MB",
    optional: true,
  },

  // --- SECTION 6: MOMENTUM + CALENDAR (Steps 23-26) ---
  {
    type: "finding-jobs-animation",
    title: "Finding your best job matches...",
    subtitle: "This will take just a moment",
    duration: 3000,
    testimonial: {
      text: [
        { text: "I was skeptical about having someone else handle my applications, but the results speak for themselves. " }, 
        { text: "15 interviews in my first month,", highlighted: true }, 
        { text: " and I just " }, 
        { text: "accepted an offer at my dream company!", highlighted: true }
      ],
      author: "Jessica",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&h=120&fit=crop&crop=face",
      trustpilot_stars: "/trustpilot-5-star.png",
    },
    autoAdvance: true,
  },
  {
    type: "calendar-introduction",
    title: "Book your free consultation",
    subtitle: "15 minutes • No payment required",
    emoji: "📅",
    body: [
      { text: "We'll discuss the {selectedPlan} plan and answer any questions you have. If it's a good fit, we can " }, 
      { text: "get you started right away.", highlighted: true }
    ],
    expectations: [
      "Review your job search goals",
      "Discuss if {selectedPlan} is right for you",
      "Answer your questions about the service"
    ],
    buttonText: "CHOOSE YOUR TIME",
  },
  {
    type: "calendar-booking",
    title: "Book your consultation call",
    subtitle: "Choose a time that works for you",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "John Doe"
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        required: false,
        placeholder: "+1 (555) 000-0000"
      }
    ],
    calendarConfig: {
      duration: 15,
      type: "calendly",
      calendlyUrl: "https://calendly.com/el-applyish/30min",
    },
    buttonText: "Confirm My Booking",
    autoAdvance: true,
  },
  {
    type: "confirmation-screen",
    emoji: "🎉",
    title: "You're all set!",
    confirmationMessage: {
      dateLabel: "Your consultation call is scheduled for:",
      emailLabel: "We've sent a confirmation email to:"
    },
    whatYouReceive: {
      icon: "📧",
      title: "Confirmation email with:",
      items: [
        "Calendar invite (.ics file)",
        "What to prepare for your call",
        "Details about the {selectedPlan} plan"
      ]
    },
    cta: "We're excited to help you land interviews faster!",
    optionalButtons: [
      {
        label: "Add to Google Calendar",
        action: "google-calendar"
      },
      {
        label: "Add to Outlook",
        action: "outlook-calendar"
      }
    ],
    footer: "Check your email for all the details. See you soon!",
  },
];