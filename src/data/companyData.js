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

    sampoorn: {
      id: "sampoorn",
      name: "Sampoorn Choubey",
      role: "Social Media Manager & Digital Marketer",
      bio: "Sampoorn manages social media strategies, digital marketing, content planning, and brand growth. He coordinates campaigns on YouTube and Instagram to scale online presence.",
      skills: ["Social Media Management", "Content Creation", "Marketing Strategy", "Team Management", "Canva Design", "Video Editing", "Content Planning"],
      projects: [
        { name: "Sheetal Sant Shree Ramdas Management", desc: "Appointed as Social Media Manager for YouTube and Instagram. Responsible for content organization, audience growth, and platform management." },
        { name: "Brand Growth & Content Strategy", desc: "Providing post & reel ideas, Canva design support, audience engagement support, team coordination, and growth planning for local brands." }
      ],
      initials: "SC"
    },
    mrityunjay: {
      id: "mrityunjay",
      name: "Mrityunjay Shukla",
      role: "Junior Web Developer",
      bio: "Mrityunjay is a B.Tech IT student focusing on full-stack web development, frontend interfaces, and data structures. He builds functional web applications and backend APIs.",
      skills: ["Full Stack Web Development", "HTML & CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Data Structures"],
      projects: [
        { name: "Tic-Tac-Toe Game", desc: "A simple logic-based game built to practice coding, interactive styling, and DOM manipulation." },
        { name: "E-commerce Backend API", desc: "Developing user authentication, REST APIs, and product management systems using Node.js and Express.js." }
      ],
      initials: "MS"
    },
    prajawal: {
      id: "prajawal",
      name: "Prajawal Rathore",
      role: "Video Editor & Social Media Manager",
      bio: "Prajawal is a professional Video Editor and Social Media Manager. He creates high-retention short-form video content and drives engagement strategies for domestic and international brands.",
      skills: ["Video Editing", "Social Media Management", "CapCut", "Adobe After Effects", "Sharp Storytelling", "Photography", "Sketching & Art"],
      projects: [
        { name: "Freelance Short-Form Editing Portfolio", desc: "Edited 100+ high-engagement Instagram Reels and YouTube Shorts for India and U.S. clients, boosting engagement by up to 60%." },
        { name: "Motozoomer Studio Content", desc: "Filmed and edited high-quality promotional videos, managed lighting, sound polish, and end-to-end production pipelines." }
      ],
      initials: "PR"
    }
  }
};

export const services = [
  {
    id: 1,
    title: "Design & Branding",
    desc: "Logos, banners, brochures, visiting cards, invitations, and more.",
    icon: "fa-palette",
    price: "Price on Requirement",
    theme: "sage",
    items: [
      { name: "Logo Design", desc: "Custom logos for businesses, coaching centres, shops, professionals, NGOs, and events." },
      { name: "Brand Identity", desc: "Complete brand systems — colour palette, typography, brand guidelines, stationery." },
      { name: "Banner Design", desc: "Flex banners, digital banners, hoardings, social media banners." },
      { name: "Business Cards", desc: "Visiting card design and printing — standard, premium, folded formats." },
      { name: "Invitations", desc: "Wedding cards, event invitations, birthday cards — design and printing." },
      { name: "Booklet / Handbook", desc: "Company profiles, product catalogues, coaching handbooks, annual reports." },
      { name: "Art & Craft Work", desc: "Custom handmade art, craft products, decorative items, gift crafting." }
    ]
  },
  {
    id: 2,
    title: "Websites & Digital Presence",
    desc: "Business websites, e-commerce, landing pages & maintenance.",
    icon: "fa-globe",
    price: "Price on Requirement",
    theme: "slateTeal",
    items: [
      { name: "Business Website", desc: "Professional multi-page websites for any type of business." },
      { name: "Landing Pages", desc: "Single-page conversion-focused websites for campaigns or products." },
      { name: "E-Commerce Website", desc: "Full online store with product listings, cart, and payment gateway." },
      { name: "Online Ordering System", desc: "Website or app feature for restaurants, shops, and local retailers." },
      { name: "Online Presence Setup", desc: "Google Business listing, social media profiles, local SEO setup." },
      { name: "Website Maintenance", desc: "Ongoing updates, security, hosting management, and support." }
    ]
  },
  {
    id: 3,
    title: "Software & App Development",
    desc: "Billing, stock, sales, mobile apps & custom software solutions.",
    icon: "fa-code",
    price: "Price on Requirement",
    theme: "sage",
    items: [
      { name: "Billing Software", desc: "Custom billing/invoicing software with bill printing and payment records." },
      { name: "Stock Management", desc: "Inventory tracking with low-stock alerts, supplier records, and reorder triggers." },
      { name: "Daily Sales & Profit Tracker", desc: "Auto-calculates daily revenue, cost, profit; generates monthly summaries." },
      { name: "Easy Return System", desc: "Streamlined product return and exchange tracking within billing software." },
      { name: "QR & Cash Payment Support", desc: "Software supports both cash and QR/UPI payments at checkout." },
      { name: "Mobile Application", desc: "Android/iOS apps for businesses, coaching centres, or service platforms." },
      { name: "Custom Software", desc: "Any bespoke business software — attendance, payroll, reporting, etc." }
    ]
  },
  {
    id: 4,
    title: "Coaching Institute Solutions",
    desc: "Notes, fees, results, student apps & full digital setup.",
    icon: "fa-graduation-cap",
    price: "Price on Requirement",
    theme: "slateTeal",
    items: [
      { name: "Online Presence", desc: "Website, Google listing, social media setup for the coaching centre." },
      { name: "Notes & Study Material Design", desc: "Professional design of coaching notes, worksheets, and practice papers." },
      { name: "Notebook & Book Design", desc: "Custom-branded notebooks, exercise books, and student handbooks." },
      { name: "Fee Management Software", desc: "Digital fee collection, payment tracking, receipt generation." },
      { name: "Auto Fee Notifications", desc: "Automated WhatsApp/SMS reminders sent to students every month to pay fees." },
      { name: "Student Result Management", desc: "System to record, manage, and share exam results with students/parents." },
      { name: "Student Portal / App", desc: "Dedicated portal for students to access notes, results, and announcements." },
      { name: "Logo & Branding", desc: "Full brand identity for the coaching institute." }
    ]
  },
  {
    id: 5,
    title: "Shop & Retail Owner Solutions",
    desc: "Billing, stock alerts, profits, reports & much more.",
    icon: "fa-store",
    price: "Price on Requirement",
    theme: "sage",
    items: [
      { name: "Shop Website", desc: "Professional website showcasing products and services." },
      { name: "Online Order Feature", desc: "Add online ordering to their website or via WhatsApp automation." },
      { name: "Billing Software", desc: "POS-style billing with bill printing and payment support." },
      { name: "Stock Alert System", desc: "Real-time stock monitoring — alerts when items fall below threshold." },
      { name: "Daily Profit Calculator", desc: "Calculates daily sales, cost, and profit automatically." },
      { name: "Monthly Sales Report", desc: "Auto-generated monthly profit and loss summaries." },
      { name: "Bill Printing", desc: "Thermal printer integration for paper receipts." },
      { name: "QR / Cash Payments", desc: "Accept UPI/QR and cash payments — tracked in software." },
      { name: "Easy Returns", desc: "Built-in return and exchange management in the billing system." }
    ]
  },
  {
    id: 6,
    title: "Printing Services",
    desc: "Visiting cards, flex, notebooks, brochures, booklets & stationery.",
    icon: "fa-print",
    price: "Price on Requirement",
    theme: "slateTeal",
    items: [
      { name: "Visiting Cards", desc: "Single-sided, double-sided, and premium card printing." },
      { name: "Flex & Banners", desc: "Large format flex printing for shops, events, and campaigns." },
      { name: "Brochures & Flyers", desc: "A4/A5/tri-fold brochures for marketing." },
      { name: "Stationery", desc: "Letterheads, envelopes, notepads, stamps." },
      { name: "Coaching Notebooks", desc: "Branded notebooks with custom covers for coaching centres." },
      { name: "Booklets & Handbooks", desc: "Saddle-stitched or perfect-bound printed booklets." }
    ]
  },
  {
    id: 7,
    title: "Photography & Videography",
    desc: "Weddings, events, products, reels & video editing.",
    icon: "fa-camera",
    price: "Price on Requirement",
    theme: "sage",
    items: [
      { name: "Wedding Photography", desc: "Full wedding day coverage — mehendi, haldi, ceremony, reception." },
      { name: "Wedding Videography", desc: "Cinematic wedding films, highlight reels, drone coverage." },
      { name: "Pre-wedding Shoot", desc: "Location-based pre-wedding photo and video sessions." },
      { name: "Product Photography", desc: "Studio and lifestyle shots for online stores and catalogues." },
      { name: "Event Photography", desc: "Corporate events, birthday parties, school functions, openings." },
      { name: "Video Editing", desc: "Post-production editing for any video — colour grade, music, graphics." },
      { name: "Reels & Short Videos", desc: "Social media-ready short videos for Instagram, YouTube Shorts." }
    ]
  },
  {
    id: 8,
    title: "Legal & Financial Services",
    desc: "Legal advice, ITR, GST, CA services & registrations.",
    icon: "fa-balance-scale",
    price: "Price on Requirement",
    theme: "slateTeal",
    items: [
      { name: "Lawyer Consultation", desc: "Connect with local qualified lawyers for legal advice and documentation." },
      { name: "Income Tax Filing", desc: "ITR filing for individuals and businesses." },
      { name: "GST Registration & Returns", desc: "GST registration, monthly and quarterly return filing." },
      { name: "CA Services", desc: "Chartered accountant work — audits, balance sheets, tax planning." },
      { name: "Business Registration", desc: "Company or firm registration, MSME registration, trade licence." },
      { name: "Legal Documentation", desc: "Agreements, affidavits, NOCs, rental deeds, and other legal papers." }
    ]
  },
  {
    id: 9,
    title: "Events & Function Management",
    desc: "Weddings, parties, corporate events & full management.",
    icon: "fa-calendar-alt",
    price: "Price on Requirement",
    theme: "sage",
    items: [
      { name: "Wedding Planning", desc: "End-to-end wedding coordination — venue, decor, catering, schedule." },
      { name: "Tent & Shamiana", desc: "Tent and canopy setup for weddings, jagrans, and outdoor events." },
      { name: "Catering Coordination", desc: "Catering tie-up and management for functions of all sizes." },
      { name: "Stage & Decoration", desc: "Stage setup, floral decoration, lighting, entrance arches." },
      { name: "Birthday & Parties", desc: "Kids' parties, adult birthdays, milestone celebrations." },
      { name: "Corporate Events", desc: "Office launches, seminars, award functions, brand events." },
      { name: "Programme Management", desc: "Any kind of function or programme — cultural, religious, social." }
    ]
  },
  {
    id: 10,
    title: "Construction & Trade Services",
    desc: "House mapping, CAD, carpentry, welding & construction work.",
    icon: "fa-tools",
    price: "Price on Requirement",
    theme: "slateTeal",
    items: [
      { name: "House Mapping", desc: "Architectural floor plans and building layouts for residential properties." },
      { name: "CAD Drawings", desc: "Computer-aided design drawings for construction and renovation projects." },
      { name: "Carpentry Work", desc: "Custom furniture, cabinets, wooden fixtures, and interior carpentry." },
      { name: "Iron Smithing", desc: "Fabrication of iron structures, grilles, gates, and custom metalwork." },
      { name: "Iron Welding", desc: "Structural welding and repair work for residential and commercial needs." },
      { name: "General Construction", desc: "Renovation, extension, interior construction, and flooring work." },
      { name: "Interior Consulting", desc: "Basic space planning and interior layout advice." }
    ]
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



export const offlineChatBotResponses = [
  { keywords: ["bundle", "price", "pack", "charge"], answer: "We offer 3 specialized bundles: Coaching Institute Pack (₹19,999), Builder Elevation Bundle (₹16,499), and Local Business Kickstart (₹11,999). Specific custom services are priced on request. Select your target on our Contact form!" },
  { keywords: ["team", "prathvi", "sampoorn", "mrityunjay", "prajawal", "member", "people"], answer: "Our elite squad includes Prathvi (Team Leader), Sampoorn (Social Media Manager & Digital Marketer), Mrityunjay (Junior Web Developer), and Prajawal (Video Editor & Social Media Manager). You can view their full project history directly in our Portfolio section!" },
  { keywords: ["where", "location", "sagar", "makroniya", "address"], answer: "We are physically based in Makroniya, Sagar, Madhya Pradesh (470004). This enables us to visit sites for civil CAD mapping and shoot physical promotional footage." },
  { keywords: ["web", "site", "app", "react", "code", "backend", "node"], answer: "Prathvi Singh Thakur and Mrityunjay Shukla code custom, high-speed static websites, dynamic student portals, and backend APIs. Head to our Services page to book them!" },
  { keywords: ["video", "ad", "reel", "shoot", "edit"], answer: "Sampoorn Choubey and Prajawal Rathore script and edit retention-driven short-form reels, commercial ads, and high-quality videography content." },
  { keywords: ["social", "media", "marketing", "content", "instagram", "youtube", "post", "reel", "canva", "creator", "sampoorn", "prajawal"], answer: "Sampoorn Choubey and Prajawal Rathore are our Social Media Managers & Content Creators. They manage platform growth (YouTube & Instagram), content planning, Canva graphics, video editing, and audience engagement." },
  { keywords: ["dsa", "javascript", "script", "backend", "express", "game", "tictactoe", "database", "mysql", "mongodb", "mrityunjay", "code", "dev"], answer: "Mrityunjay Shukla is our Junior Web Developer. He builds interactive frontend games, user authentication flows, and Express/Node.js backend APIs." },
  { keywords: ["prajawal", "editor", "capcut", "after effects", "effects", "storytelling", "video editing", "photography"], answer: "Prajawal Rathore is our Video Editor & Social Media Manager. He specializes in CapCut, Adobe After Effects, photography, and high-engagement social media content." }
];
