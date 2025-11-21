// import { Question } from './questionTypes';

// export const questions: Question[] = [
//   // --- SECTION 1: HOOK + QUALIFY (3 steps) ---
//   {
//     id: "pain_linkedin_200apps",
//     type: "pain-point",
//     title: "Do you relate to the following statement?",
//     subtitle: "HOW WE HELP",
//     quote: [{ text: "Every job I apply on LinkedIn already has " }, { text: "200+ applications", highlighted: true }],
//   },
//   {
//     type: "problem-validation",
//     title: "The harsh reality",
//     subtitle: "HOW WE HELP",
//     emoji: "📊",
//     body: [
//       { text: "75% of all resumes never reach human recruiters—", highlighted: true },
//       { text: " rejected by ATS software, often " },
//       { text: "by mistake.", highlighted: true },
//       { text: " And " },
//       { text: "57% of remote jobs get 300+ applications within 24 hours.", highlighted: true },
//       // { text: "No wonder it feels impossible to stand out." }
//     ],
//     bottomText: [{ text: "No wonder it feels impossible to stand out." }],
//   },
//   {
//     id: "pain_job_site_jumping",
//     type: "pain-point",
//     title: "Do you relate to the following statement?",
//     subtitle: "HOW WE HELP",
//     quote: [{ text: "I'm " }, { text: "exhausted jumping between different job sites", highlighted: true }, { text: ", checking the same positions" }],
//   },

//   // --- SECTION 2: SOLUTION + EMAIL CAPTURE (3 steps) ---
//   {
//     type: "social-proof",
//     title: "But there's a way through",
//     subtitle: "HOW WE HELP",
//     testimonial: {
//       text: [{ text: "I was getting nowhere with applications. After using Applyish, I got past ATS filters and landed " }, { text: "8 interviews in 2 weeks.", highlighted: true }],
//       author: "Sarah M., Marketing Manager",
//       stars: 5,
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=120&h=120&fit=crop&crop=face",
//     },
//   },
//   {
//     type: "value-preview",
//     title: [{ text: "We access " }, { text: "750k+ hidden jobs", highlighted: true }, { text: " and apply to " }, { text: "100+ per week", highlighted: true }, { text: " for you" }],
//     subtitle: "HOW WE HELP",
//     emoji: "🚀",
//     body: [
//       { text: "Applyish scans hundreds of job boards daily", highlighted: true },
//       { text: " to find opportunities you'd never see on LinkedIn or Indeed. Then we  " },
//       { text: "apply to 100+ matching jobs weekly—", highlighted: true },
//       { text: " tailored to your resume, location, and preferences. " },
//       { text: "Zero work on your end.", highlighted: true }
//     ],
//     bulletPoints: [
//       [{ text: "✓ Access private roles & exclusive listings" }],
//       [{ text: "✓ We handle all applications 24/7" }],
//       [{ text: "✓ You focus on interviews, not forms" }]
//     ],
//   },
//   {
//     id: "email",
//     type: "email",
//     title: "See how many jobs match your profile",
//     subtitle: "Enter your email to get your personalized job report",
//     placeholder: "john.doe@example.com",
//     answerKey: "email",
//     required: true,
//     helperText: "🔒 We respect your privacy. Unsubscribe anytime.",
//     valueProps: [
//       "See matching jobs in your area",
//       "Get a personalized application strategy",
//       "No payment required"
//     ]
//   },

//   // --- SECTION 3: BUILD TRUST + QUALIFY (3 steps) ---
//   {
//     type: "how-it-works",
//     title: "How Applyish Works",
//     subtitle: "HOW WE HELP",
//     steps: [
//       {
//         number: "1",
//         title: "Tell us your preferences",
//         description: "Share your resume, location, job titles, and salary requirements"
//       },
//       {
//         number: "2", 
//         title: "We find matching jobs",
//         description: "Our system scans 750k+ jobs daily for roles that fit YOUR criteria"
//       },
//       {
//         number: "3",
//         title: "We apply automatically",
//         description: "100+ tailored applications per week, submitted 24/7 on your behalf"
//       },
//       {
//         number: "4",
//         title: "You get interviews",
//         description: "Track every application and interview invite in your weekly report"
//       }
//     ],
//     emoji: "🔄",
//   },
//   {
//     type: "social-proof",
//     title: "Don't just take our word for it",
//     subtitle: "SUCCESS STORIES",
//     testimonial: {
//       text: [
//         { text: "Having a service that applies to 100+ jobs for me every week saved countless hours and landed me " }, 
//         { text: "12 interviews in three weeks!", highlighted: true }
//       ],
//       author: "Michael R.",
//       stars: 5,
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&h=120&fit=crop&crop=face",
//       // trustpilot_stars: "/trustpilot-5-star.png",
//     },
//     screenshots: {
//       title: "Real Interview Invites from Our Clients",
//       images: [
//         "https://res.cloudinary.com/immotal/image/upload/v1758220125/Screenshot_2025-09-09-14-34-17-721_com.google.android.gm_t3c6jj.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220121/Screenshot_2025-09-09-13-39-14-208_com.google.android.gm_bbvkse.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220121/Screenshot_2025-09-09-13-37-23-767_com.google.android.gm_tlk2z1.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220121/Screenshot_2025-09-09-13-35-03-546_com.google.android.gm_vsqakf.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220121/Screenshot_2025-09-09-13-36-35-932_com.google.android.gm_wbntxu.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220121/Screenshot_2025-09-09-13-31-45-272_com.google.android.gm_a50wag.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220120/Screenshot_2025-09-09-13-28-39-265_com.google.android.gm_keifox.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220120/Screenshot_2025-09-09-13-34-46-906_com.google.android.gm_iyixvs.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220116/Screenshot_2025-09-09-13-28-09-237_com.google.android.gm_vamepl.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220088/Screenshot_2025-09-09-13-27-44-859_com.google.android.gm_ch2mfa.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220069/Screenshot_2025-09-09-13-10-56-190_com.google.android.gm_epsdap.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220070/Screenshot_2025-09-09-13-26-53-235_com.google.android.gm_1_ctceny.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220068/Screenshot_2025-09-09-13-24-54-557_com.google.android.gm_unkrh9.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220069/Screenshot_2025-09-09-13-27-31-206_com.google.android.gm_msmde4.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220069/Screenshot_2025-09-09-13-26-53-235_com.google.android.gm_vo7wxf.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220069/Screenshot_2025-09-09-13-27-07-159_com.google.android.gm_gmxmkx.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220068/Screenshot_2025-09-09-13-24-17-015_com.google.android.gm_f9svpk.jpg",
//         "https://res.cloudinary.com/immotal/image/upload/v1758220069/Screenshot_2025-09-09-13-27-23-252_com.google.android.gm_xybjju.jpg",
//         // "https.cloudinary.com/immotal/image/upload/v1758220068/Screenshot_2025-09-09-13-10-40-233_com.google.android.gm_radney.jpg"
//       ]
//     }
//   },
//   {
//     type: "time-availability",
//     title: "How much time can you spend applying daily?",
//     subtitle: "QUICK QUESTIONS",
//     options: [
//       "3-4 hours",
//       "1-2 hours",
//       "30-60 mins",
//       "10-30 mins",
//       "Too busy to apply"
//     ],
//     answerKey: "timeAvailability",
//     autoAdvance: true,
//   },
//   {
//     type: "application-blockers",
//     title: "What stops you from applying to more jobs?",
//     subtitle: "QUICK QUESTIONS",
//     subheader: "Select all that apply",
//     options: [
//       "I don't have enough time",
//       "Forms are exhausting",
//       "Too many options to track",
//       "Deadlines pass too quickly",
//       "Lose track of applications",
//       "Get distracted from applying"
//     ],
//     answerKey: "blockers",
//     multiSelect: true,
//   },

//   // --- SECTION 4: SERVICE + BOOK (3 steps) ---
//   {
//     type: "loading-animation",
//     title: "Finding jobs that match your profile...",
//     subtitle: "Please wait a moment",
//     duration: 2000,
//     autoAdvance: true,
//   },
//   {
//     type: "service-selection",
//     title: "Great news! We found 200+ matching jobs for you",
//     subtitle: "Choose how you'd like us to help—book a free 15-min call to discuss",
//     callout: {
//       text: [{ text: "No payment required to book your call", highlighted: true }],
//       icon: "✓",
//       style: "info"
//     },
//     plans: [
//       {
//         id: "bulk",
//         name: "Bulk",
//         price: 50,
//         period: "one-time",
//         badge: null,
//         description: "Perfect for a quick boost to your job applications.",
//         features: [
//           [{ text: "100 Applications", highlighted: true }, { text: " to jobs matching your criteria" }],
//           "One Time Service",
//           "Progress Report"
//         ],
//         buttonText: "Book Free Call - Bulk",
//         buttonStyle: "secondary",
//       },
//       {
//         id: "pro",
//         name: "Pro",
//         price: 55,
//         period: "week",
//         badge: null,
//         description: "Consistent applications to jobs that fit you.",
//         features: [
//           [{ text: "55 Applications Weekly", highlighted: true }, { text: " based on your resume" }],
//           "50 LinkedIn Easy Apply Weekly",
//           "Location & Preference Matching",
//           "Weekly Progress Reports"
//         ],
//         buttonText: "Book Free Call - Pro",
//         buttonStyle: "secondary",
//         elevated: true,
//       },
//       {
//         id: "custom",
//         name: "Custom",
//         price: 65,
//         period: "week",
//         badge: "MOST POPULAR",
//         description: "Maximum applications matched to your profile.",
//         features: [
//           [{ text: "75 Applications Weekly", highlighted: true }, { text: " tailored to your background" }],
//           "50 LinkedIn Easy Apply Weekly",
//           "Location & Preference Matching",
//           "Priority Support",
//           "Weekly Progress Reports"
//         ],
//         buttonText: "Book Free Call - Custom",
//         buttonStyle: "secondary",
//       }
//     ],
//     mobileOrder: ["custom", "pro", "bulk"],
//     answerKey: "selectedPlan",
//   },
//   {
//     type: "calendar-booking",
//     title: "Book your free 15-minute consultation",
//     subtitle: "Let's discuss the {selectedPlan} plan—no payment required today",
//     emoji: "📅",
//     callout: {
//       text: [
//         { text: "On this call: Review your goals • See if {selectedPlan} fits • Get your questions answered", highlighted: true }
//       ],
//       style: "info"
//     },
//     fields: [
//       {
//         name: "fullName",
//         label: "Full Name",
//         type: "text",
//         required: true,
//         placeholder: "John Doe"
//       },
//       {
//         name: "phone",
//         label: "Phone (optional - we'll use email if not provided)",
//         type: "tel",
//         required: false,
//         placeholder: "+1 (555) 000-0000"
//       }
//     ],
//     calendarConfig: {
//       duration: 15,
//       type: "calendly",
//       calendlyUrl: "https://calendly.com/el-applyish/30min",
//     },
//     helperText: "💡 Tip: Upload your resume after booking so we can review it before our call",
//     buttonText: "Confirm My Booking",
//     autoAdvance: true,
//   },

//   // --- SECTION 5: CONFIRMATION (1 step) ---
//   {
//     type: "confirmation-screen",
//     emoji: "🎉",
//     title: "You're all set!",
//     confirmationMessage: {
//       dateLabel: "Your consultation call is scheduled for:",
//       emailLabel: "Confirmation sent to:"
//     },
//     whatYouReceive: {
//       icon: "📧",
//       title: "Check your email for:",
//       items: [
//         "Calendar invite (.ics file)",
//         "Link to upload your resume (optional but recommended)",
//         "What to prepare for your call",
//         "Details about the {selectedPlan} plan"
//       ]
//     },
//     nextSteps: {
//       title: "📄 Before your call (optional but helpful):",
//       items: [
//         { 
//           text: "Upload your resume", 
//           subtext: "We'll review it and have better recommendations ready",
//           cta: "Upload Resume",
//           action: "email-upload-link"
//         },
//         { 
//           text: "Think about your ideal role", 
//           subtext: "Job titles, locations, salary range, remote vs on-site",
//           cta: null,
//           action: null
//         }
//       ]
//     },
//     cta: "We're excited to help you land interviews faster!",
//     optionalButtons: [
//       {
//         label: "📅 Add to Google Calendar",
//         action: "google-calendar"
//       },
//       {
//         label: "📅 Add to Outlook",
//         action: "outlook-calendar"
//       }
//     ],
//     footer: "See you soon! Check your email for next steps.",
//   },
//   {
//     type: "thank-you-custom",
//     title: "Hey, we've received your data!",
//     description: "Can't wait to jump on the call with you! Make it amazing, make it dope.",
//     emoji: "🎉",
//   },
// ];

// /* 
// ================================================================================
// FLOW SUMMARY - 12 STEPS TOTAL
// ================================================================================

// SECTION 1: Hook + Qualify (3 steps)
//   Step 1: Pain point - LinkedIn 200+ apps
//   Step 2: Problem validation - Combined stats (75% ATS + 57% remote jobs)
//   Step 3: Pain point - Exhausted jumping sites

// SECTION 2: Solution + Email Capture (3 steps)
//   Step 4: Social proof - Sarah testimonial
//   Step 5: Value preview - Combined (750k jobs + 100+ weekly apps + benefits)
//   Step 6: EMAIL CAPTURE - "See matching jobs"

// SECTION 3: Build Trust + Qualify (3 steps)
//   Step 7: How it works + Screenshots + Michael testimonial (all combined)
//   Step 8: Time availability question
//   Step 9: Application blockers question

// SECTION 4: Service + Book (3 steps)
//   Step 10: Loading animation - "Finding matches"
//   Step 11: Service selection - Pick a plan
//   Step 12: Calendar booking - Schedule call

// SECTION 5: Confirmation (1 step)
//   Step 13: Confirmation screen - With post-booking resume upload CTA

// ================================================================================
// KEY IMPROVEMENTS FROM ORIGINAL 27-STEP FLOW:
// ================================================================================

// 1. ✅ 56% REDUCTION in steps (27 → 12)
// 2. ✅ Email captured at step 6 instead of step 20
// 3. ✅ Removed all redundant problem validation screens
// 4. ✅ Removed duplicate pain points (kept best 2 of 4)
// 5. ✅ Combined 3 value preview screens into 1 powerful screen
// 6. ✅ Merged "How It Works" + "Screenshots" into single trust-building screen
// 7. ✅ Removed optional challenge question (kills conversion)
// 8. ✅ Removed confirmation bridge (unnecessary friction)
// 9. ✅ Moved file uploads to post-booking email sequence
// 10. ✅ Removed redundant loading animations

// ================================================================================
// EXPECTED CONVERSION IMPROVEMENTS:
// ================================================================================

// Current Performance:
//   - 239 visitors → 9 completions = 3.8% conversion
//   - Email capture rate: 16%

// Projected Performance:
//   - Email capture rate: 70-75% (step 6 vs step 20)
//   - Final conversion rate: 40-45%
//   - Expected completions: 95-107 from same 239 visitors
//   - That's a 10-12x improvement

// ================================================================================
// */

import { Question } from './questionTypes';

export const questions: Question[] = [
  {
    type: "calendar-booking",
    title: "Book your free 15-minute consultation",
    subtitle: "Let's discuss the {selectedPlan} plan—no payment required today",
    emoji: "📅",
    callout: {
      text: [
        { text: "On this call: Review your goals • See if {selectedPlan} fits • Get your questions answered", highlighted: true }
      ],
      style: "info"
    },
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
        label: "Phone (optional - we'll use email if not provided)",
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
    helperText: "💡 Tip: Upload your resume after booking so we can review it before our call",
    buttonText: "Confirm My Booking",
    autoAdvance: true,
  },
  {
    type: "confirmation-screen",
    emoji: "🎉",
    title: "You're all set!",
    confirmationMessage: {
      dateLabel: "Your consultation call is scheduled for:",
      emailLabel: "Confirmation sent to:"
    },
    whatYouReceive: {
      icon: "📧",
      title: "Check your email for:",
      items: [
        "Calendar invite (.ics file)",
        "Link to upload your resume (optional but recommended)",
        "What to prepare for your call",
        "Details about the {selectedPlan} plan"
      ]
    },
    nextSteps: {
      title: "📄 Before your call (optional but helpful):",
      items: [
        { 
          text: "Upload your resume", 
          subtext: "We'll review it and have better recommendations ready",
          cta: "Upload Resume",
          action: "email-upload-link"
        },
        { 
          text: "Think about your ideal role", 
          subtext: "Job titles, locations, salary range, remote vs on-site",
          cta: null,
          action: null
        }
      ]
    },
    cta: "We're excited to help you land interviews faster!",
    optionalButtons: [
      {
        label: "📅 Add to Google Calendar",
        action: "google-calendar"
      },
      {
        label: "📅 Add to Outlook",
        action: "outlook-calendar"
      }
    ],
    footer: "See you soon! Check your email for next steps.",
  },
  {
    type: "thank-you-custom",
    title: "Hey, we've received your data!",
    description: "Can't wait to jump on the call with you! Make it amazing, make it dope.",
    emoji: "🎉",
  },
];
