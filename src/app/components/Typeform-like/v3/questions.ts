export const questions = [
  // --- SECTION 1: PAIN QUALIFICATION (Steps 1-6) ---
  {
    id: "pain_linkedin_200apps",
    type: "pain-point",
    title: "Do you relate to the following statement?",
    subtitle: "HOW WE HELP",
    quote: "Every job I like on LinkedIn already has 200+ applications",
  },
  {
    type: "problem-validation",
    title: "Not-so-good news",
    subtitle: "HOW WE HELP",
    emoji: "👻",
    body: "57% of remote jobs get 300+ applications within 24 hours. No wonder it's easy to feel invisible.",
  },
  {
    id: "pain_black_hole",
    type: "pain-point",
    title: "Do you relate to the following statement?",
    subtitle: "HOW WE HELP",
    quote: "I'm afraid my resume disappears into a black hole",
  },
  {
    type: "problem-validation",
    title: "What really happens",
    subtitle: "HOW WE HELP",
    emoji: "🤖",
    body: "75% of all resumes never reach human recruiters. Applicant Tracking Systems (ATS) reject them automatically — often by mistake.",
  },
  {
    id: "pain_ats_filters",
    type: "pain-point",
    title: "Do you relate to the following statement?",
    subtitle: "HOW WE HELP",
    quote: "I think software filters my resume before recruiters see it",
  },
  {
    id: "pain_job_site_jumping",
    type: "pain-point",
    title: "Do you relate to the following statement?",
    subtitle: "HOW WE HELP",
    quote: "I'm exhausted jumping between different job sites, checking the same positions",
  },

  // --- SECTION 2: VALUE PREVIEW (Steps 7-12) ---
  {
    type: "social-proof",
    title: "But there's a way through",
    subtitle: "HOW WE HELP",
    testimonial: {
      text: "I was getting nowhere with applications. After using Applyish, I got past ATS filters and landed 8 interviews in 2 weeks.",
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
      "Average application takes 30+ minutes",
      "90% is repetitive data entry",
      "Most job seekers spend more time on forms than actual job search",
    ],
  },
  {
    type: "value-preview",
    title: "Access 750k+ hidden jobs monthly",
    subtitle: "HOW WE HELP",
    body: "Get access to private roles and exclusive listings not found on public job boards",
    emoji: "🕵️",
    bottomText: "Most job seekers only see 1/4 of opportunities",
  },
  {
    type: "value-preview",
    title: "A smarter way to find jobs",
    subtitle: "HOW WE HELP",
    body: "We find jobs that actually match you so you don't waste time. No more endless scrolling. Only verified opportunities that actually fit.",
    emoji: "🎯",
  },
  {
    type: "value-preview",
    title: "Our AI applies for you automatically",
    subtitle: "HOW WE HELP",
    body: "Smart algorithms match you with jobs and submit optimized applications 24/7. Get 10X more applications with zero manual work.",
    emoji: "📈",
    testimonial: {
      text: "Using AI to automate job applications has saved me countless hours and landed me 12 interviews in three weeks!",
      author: "Michael",
      stars: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&h=120&fit=crop&crop=face",
      trustpilot_stars: "/trustpilot-5-star.png",
    },
  },
  {
    type: "testimonial-screenshots",
    title: "See the Proof: Real Interview Invites",
    subtitle: "HOW WE HELP",
  },

  // --- SECTION 3: QUALIFICATION QUESTIONS (Steps 13-16) ---
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

  // --- SECTION 4: SERVICE SELECTION (Steps 17-18) ---
  {
    type: "service-selection",
    title: "Which service are you interested in learning more about?",
    subtitle: "We'll discuss your options on a free 15-minute call",
    callout: {
      text: "No payment required to book your call",
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
          "100 Job Applications",
          "One Time Payment",
          "Weekly Progress Reports"
        ],
        buttonText: "Learn More About Bulk",
        buttonStyle: "secondary",
      },
      {
        id: "pro",
        name: "Pro",
        price: 55,
        period: "week",
        badge: "MOST POPULAR",
        description: "A high volume of tailored applications and dedicated support.",
        features: [
          "55 Tailored Resume Applications",
          "50 LinkedIn Easy Apply Weekly",
          "Personalized Support",
          "Weekly Progress Reports"
        ],
        buttonText: "Learn More About Pro",
        buttonStyle: "primary",
        elevated: true,
      },
      {
        id: "custom",
        name: "Custom",
        price: 65,
        period: "week",
        badge: null,
        description: "Tailored applications and LinkedIn support.",
        features: [
          "75 Tailored Resume Applications",
          "50 LinkedIn Easy Apply Weekly",
          "Personalized Support",
          "Weekly Progress Reports"
        ],
        buttonText: "Learn More About Custom",
        buttonStyle: "primary",
      }
    ],
    mobileOrder: ["pro", "custom", "bulk"],
    answerKey: "selectedPlan",
  },
  {
    type: "confirmation-bridge",
    title: "Great! Let's talk about the {selectedPlan} plan",
    subtitle: "Book a free 15-minute consultation",
    emoji: "",
    body: "On this call, we'll discuss whether the {selectedPlan} plan is right for your situation. No payment required—we'll only proceed if it's a good fit.",
    callout: {
      text: "This is a free consultation. You'll only pay if you decide to move forward after our conversation.",
      style: "success"
    },
    buttonText: "Book My Free Call",
  },

  // --- SECTION 5: RESUME UPLOAD (Step 19) ---
   {
    id: "upload_resume",
    type: "file-upload", // Assuming a file-upload component exists or will be created
    title: "Please upload your most recent resume.",
    subtitle: "This helps us tailor our service to you.",
    answerKey: "resumeFile",
    fileType: "pdf,doc,docx",
  },
  {
    id: "upload_cover_letter",
    type: "file-upload", // Assuming a file-upload component exists or will be created
    title: "Do you have a cover letter you'd like to share? (Optional)",
    subtitle: "If yes, please upload it here.",
    answerKey: "coverLetterFile",
    fileType: "pdf,doc,docx",
    optional: true,
  },


  // --- SECTION 6: MOMENTUM + CALENDAR (Steps 20-23) ---
  {
    type: "loading-animation",
    title: "Matching you with remote jobs based on your profile",
    subtitle: "HOW WE HELP",
    duration: 3000,
    testimonial: {
      text: "I was skeptical about AI applying for me, but the results speak for themselves. 15 interviews in my first month, and I just accepted an offer at my dream company!",
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
    emoji: "",
    body: "We'll discuss the {selectedPlan} plan and answer any questions you have. If it's a good fit, we can get you started right away.",
    expectations: [
      "Review your job search goals",
      "Discuss if {selectedPlan} is right for you",
      "Answer your questions about the service"
    ],
    buttonText: "CHOOSE YOUR TIME",
  },
  {
    type: "calendar-booking",
    title: "Book your onboarding call",
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
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "john.doe@example.com"
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
      calendlyUrl: "https://calendly.com/el-applyish/30min", // TODO: Replace with actual Calendly event URL
    },
    buttonText: "Confirm My Booking",
    autoAdvance: true,
  },
  {
    type: "confirmation-screen",
    emoji: "🎉",
    title: "You're all set!",
    confirmationMessage: {
      dateLabel: "Your onboarding call is scheduled for:",
      emailLabel: "We've sent a confirmation email to:"
    },
    whatYouReceive: {
      icon: "📧",
      title: "Confirmation email with:",
      items: [
        "Calendar invite (.ics file)",
        "What to prepare for your call",
        "Details about your {selectedPlan} plan"
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