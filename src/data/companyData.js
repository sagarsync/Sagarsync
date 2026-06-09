export const companyState = {
  name: "Sagar Sync",
  location: "Makroniya, Sagar, Madhya Pradesh, India",
  team: {
    prathvi: {
      id: "prathvi",
      name: "Prathvi Singh Thakur",
      role: "Team Leader",
      bio: "Prathvi leads technical operations and full-stack development. He directs system integration, custom deployments, client management, and architectural designs.",
      skills: ["Team Leadership", "React", "NodeJS", "Google Cloud", "MongoDB", "REST APIs"],
      projects: [
        {
          name: "Personal Portfolio Website",
          desc: "Designed and developed a complete personal portfolio using React and Tailwind CSS from scratch.",
          tech: ["React", "Tailwind CSS", "JavaScript", "GitHub"],
          link: "https://polymathengineering.tech/",
          details: {
            did: "Designed and developed a complete personal portfolio using React and Tailwind CSS from scratch.",
            approach: "Focused on a clean, modern glassmorphism aesthetic with smooth scroll animations to create a premium feel.",
            vision: "To build a digital resume that not only lists my skills but actively demonstrates my front-end capabilities.",
            solved: "Created a centralized hub for all my projects, certifications, and contact info, making it easy for recruiters to evaluate my profile."
          }
        },
        {
          name: "CodeHub: A Learning Platform",
          desc: "Built a fully functional e-learning platform frontend with course catalog, video player, and user dashboard.",
          tech: ["React", "Tailwind CSS", "JavaScript", "GitHub"],
          link: "https://codehub321.netlify.app/",
          details: {
            did: "Built a fully functional e-learning platform frontend with course catalog, video player, and user dashboard.",
            approach: "Utilized React Router for seamless navigation and a state management system to track user progress.",
            vision: "To democratize coding education by providing an accessible, intuitive platform for learners of all levels.",
            solved: "Solved the problem of scattered learning resources by aggregating tutorials, exercises, and progress tracking in one place."
          }
        },
        {
          name: "Git Bridge: Tool to use Git",
          desc: "Developed a desktop GUI application using Python and Tkinter that acts as a wrapper around Git CLI commands.",
          tech: ["Python", "Tkinter", "Git", "Automation", "GitHub"],
          link: "https://gitbridge.netlify.app/",
          details: {
            did: "Developed a desktop GUI application using Python and Tkinter that acts as a wrapper around Git CLI commands.",
            approach: "Automated the execution of shell commands through Python's subprocess module, parsing the output into a user-friendly interface.",
            vision: "To lower the barrier to entry for version control, helping beginners use Git without the steep command-line learning curve.",
            solved: "Eliminated the friction of memorizing Git commands for simple tasks like committing, pushing, and pulling, reducing workflow errors."
          }
        },
        {
          name: "HVEV - Client Production Website",
          desc: "Collaborated on the frontend initially, then took full ownership of the backend logic, automated email responses, and deployment.",
          tech: ["React", "Vercel", "Google Apps Script", "Resend", "Git", "GitHub"],
          link: "https://www.hvev.in/",
          details: {
            did: "Collaborated on the frontend initially, then took full ownership of the backend logic, automated email responses, and deployment. Managed the complete GitHub workflow and connected the custom domain.",
            approach: "Architected a system using free tiers of modern serverless tools instead of traditional paid hosting to meet the client's zero-cost constraint.",
            vision: "To deliver a highly functional, scalable, and professional website without the overhead of monthly database and hosting subscriptions, focusing on real-world constraints.",
            solved: "Used Google Sheets + Apps Script as a lightweight, zero-cost database. Managed user form data efficiently and switched from Zapier to the Resend API for a more scalable, free email automation solution."
          }
        },
        {
          name: "Utility Box: AI-Powered Multi-Tool",
          desc: "Built a multi-utility AI-powered tool by integrating Gemini API for intelligent responses and remove.bg API for background removal.",
          tech: ["React", "Gemini API", "remove.bg API", "JavaScript", "GitHub"],
          link: "https://utilityboxy.netlify.app/",
          details: {
            did: "Built a multi-utility AI-powered tool by integrating Gemini API for intelligent responses and remove.bg API for background removal, combining different features into a single cohesive platform.",
            approach: "Started as an experiment with AI tools but evolved into a real engineering challenge. Debugged AI-generated errors, refactored and optimized code, handled API failures and edge cases, and made everything work together smoothly.",
            vision: "To move beyond just 'using AI' to actually engineering with AI — understanding how to build reliable systems that leverage AI capabilities while handling the real-world complexity AI alone can't solve.",
            solved: "AI can generate code, but it doesn't always work correctly. This project tackled the gap between AI-generated output and production-ready software by debugging, refactoring, and building robust error handling around multiple API integrations."
          }
        }
      ],
      initials: "PT",
      image: "/Prathvi.png"
    },
    rohan: {
      id: "rohan",
      name: "Rohan Mishra",
      role: "Mobile & UI/UX Developer",
      bio: "Rohan creates dynamic user interfaces and cross-platform native iOS/Android applications utilizing Flutter.",
      skills: ["Flutter", "Dart", "Tailwind CSS", "Figma", "Adaptive UX"],
      projects: [
        { name: "Sagar Bus Tracker Platform", desc: "A light mobile tracker system optimizing local route mapping." },
        { name: "Stock counter tracker application", desc: "Inventory checker layout built with offline storage coordinates." }
      ],
      initials: "RM"
    },
    priya: {
      id: "priya",
      name: "Priya Sharma",
      role: "CAD & Civil Engineer",
      bio: "Priya drafts residential building maps meeting modern compliance parameters, floor outlines, structural frames, and elevations.",
      skills: ["AutoCAD", "Autodesk Revit", "SolidWorks", "3D Elevations"],
      projects: [
        { name: "Civil complex floor blueprint", desc: "Functional commercial spaces optimized for modern builders in Sagar." },
        { name: "Makroniya Green Villa elevation", desc: "Modern exterior 3D architectural plan complying with city rules." }
      ],
      initials: "PS"
    },
    sameer: {
      id: "sameer",
      name: "Sameer Khan",
      role: "Video Editor & Producer",
      bio: "Sameer produces viral social reels, commercial ads, kinetic titles, sound matches, and promotional walkthrough edits.",
      skills: ["Premiere Pro", "After Effects", "Sound Mixing", "Color Grading"],
      projects: [
        { name: "Inauguration commercial video", desc: "Opening promo designed for high audience retention." },
        { name: "Coaching institute ad walkthrough", desc: "Promotional reel optimizing local student admissions." }
      ],
      initials: "SK"
    }
  }
};

export const services = [
  {
    id: 1,
    title: "Custom Website Engineering",
    desc: "Tailwind-optimized portfolios, speed-optimized directories, and custom management interfaces matching absolute desktop/mobile parameters.",
    icon: "fa-globe",
    price: "Price on Requirement",
    theme: "sage"
  },
  {
    id: 2,
    title: "Mobile Application Development",
    desc: "Clean, cross-platform Android & iOS applications targeting local administration, booking, student databases, or internal tracking.",
    icon: "fa-mobile-alt",
    price: "Price on Requirement",
    theme: "slateTeal"
  },
  {
    id: 3,
    title: "Architectural House Maps (CAD)",
    desc: "Detailed 2D structure plan layouts, structural frame designs, and elegant 3D external visualizations perfectly matching government norms.",
    icon: "fa-drafting-compass",
    price: "Price on Requirement",
    theme: "sage"
  },
  {
    id: 4,
    title: "Commercial Ad Videos",
    desc: "Scripted, edited, and perfectly optimized ad video creations targeting social platforms, YouTube promos, or physical local boards.",
    icon: "fa-video",
    price: "Price on Requirement",
    theme: "slateTeal"
  },
  {
    id: 5,
    title: "Domain & Hosting Deployments",
    desc: "Secure cloud deployment configurations, DNS domain mapping, custom system mail setup, and robust performance analytics tracker.",
    icon: "fa-server",
    price: "Price on Requirement",
    theme: "sage"
  },
  {
    id: 6,
    title: "Product Designing",
    desc: "High-fidelity mockups, branding design packaging templates, and CAD visualization coordinates for modern manufactured items.",
    icon: "fa-cubes",
    price: "Price on Requirement",
    theme: "slateTeal"
  }
];

export const bundles = [
  {
    id: "coaching",
    title: "Coaching Institute Scale-Up Pack",
    popular: true,
    subtitle: "Transform physical classes into a high-reach localized funnel.",
    price: "₹19,999/-",
    theme: "sage",
    icon: "fa-graduation-cap",
    optionValue: "Coaching Bundle",
    specs: [
      "Student Web Portal: Fast landing, schedules and notifications.",
      "Launch Ads: 5 edited short-form reels for social campaigns.",
      "GMB Profile Setup: Complete Google Maps optimizations.",
      "Hosting Deployment: Secure server integration with support."
    ]
  },
  {
    id: "builder",
    title: "Real Estate & Contractor Elevation Bundle",
    popular: false,
    subtitle: "Premium blueprinting to fast-track regional property sales.",
    price: "₹16,499/-",
    theme: "slateTeal",
    icon: "fa-building",
    optionValue: "Builder Bundle",
    specs: [
      "3D Front Elevation: Detailed Revit modeling coordinates.",
      "Walkthrough Render: High-definition walkthrough edit with overlay.",
      "Sales Landing System: Standard web layout mapping lead capture."
    ]
  },
  {
    id: "shop",
    title: "Local Business Kickstart Bundle",
    popular: false,
    subtitle: "Best for retail showrooms, clinics, and local startups.",
    price: "₹11,999/-",
    theme: "sage",
    icon: "fa-store",
    optionValue: "Local Business Bundle",
    specs: [
      "Clean One-Pager: Contact form and address location locator setup.",
      "Showroom Video: 1 professional 30s marketing promo file.",
      "Local SEO Booster: Local keywords schema mappings."
    ]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Why Local Sagar Shops Benefit from Static HTML Hybrid Sites",
    category: "Development",
    date: "June 2026",
    summary: "A deep-dive exploration of how light static sites with high SEO compliance rank faster than sluggish platforms.",
    author: "Prathvi Singh Thakur",
    icon: "fa-book-open"
  },
  {
    id: 2,
    title: "Residential Front Elevation Norms in Makroniya",
    category: "CAD Map Design",
    date: "May 2026",
    summary: "Reviewing essential height variables, ventilation spacing configurations, and 3D elevations for faster structural approvals.",
    author: "Priya Sharma",
    icon: "fa-drafting-compass"
  },
  {
    id: 3,
    title: "Retention Formulas for Local Coaching Promos",
    category: "Commercial Ads",
    date: "April 2026",
    summary: "Explaining visual hooks, audio-match rhythms, and text spacing to drive enrollments in Sagar.",
    author: "Sameer Khan",
    icon: "fa-video"
  }
];

export const offlineChatBotResponses = [
  { keywords: ["bundle", "price", "pack", "charge"], answer: "We offer 3 specialized bundles: Coaching Institute Pack (₹19,999), Builder Elevation Bundle (₹16,499), and Local Business Kickstart (₹11,999). Specific custom services are priced on request. Select your target on our Contact form!" },
  { keywords: ["team", "prathvi", "rohan", "priya", "sameer", "member", "people"], answer: "Our 4-person elite squad includes Prathvi (Team Leader), Rohan (Developer), Priya (Civil CAD Engineer), and Sameer (Creative Video Editor). You can view their full project history directly in our Portfolio section!" },
  { keywords: ["where", "location", "sagar", "makroniya", "address"], answer: "We are physically based in Makroniya, Sagar, Madhya Pradesh (470004). This enables us to visit sites for civil CAD mapping and shoot physical promotional footage." },
  { keywords: ["web", "site", "app", "flutter", "react", "code"], answer: "Prathvi Singh Thakur and Rohan Mishra code custom, high-speed static websites, dynamic student portals, and fluid Flutter cross-platform mobile apps. Head to our Services page to book them!" },
  { keywords: ["house", "map", "elevation", "civil", "cad"], answer: "Priya Sharma is our CAD expert. She drafts professional 2D blueprints, structural elevations, and modern 3D front elevations. View her works under our Portfolio tab." },
  { keywords: ["video", "ad", "reel", "shoot", "edit"], answer: "Sameer Khan scripts and edits retention-driven short-form reels and commercial ads. We capture high-quality footage right here in Sagar to drive client growth." }
];
