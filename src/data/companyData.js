export const companyState = {
  name: "Sagar Sync",
  location: "Makroniya, Sagar, Madhya Pradesh, India",
  team: {
    prathvi: {
      id: "prathvi",
      name: "Prathvi Singh Thakur",
      role: "Team Leader, Game Dev & AI/ML Enthusiast",
      bio: "Creative technologist and B.Tech IT student blending engineering rigour with artistic vision. Proficient in Unreal Engine 5 and Blender with a portfolio of original 3D animations, game prototypes, and AI/ML projects. Strong Python and JavaScript foundations enable scripted, procedural, and intelligent systems. Hackathon 1st place winner for Smart City Traffic AI prototype.",
      skills: ["Unreal Engine 5", "Blender 3D", "Python (Advanced)", "JavaScript", "React", "AI/ML & Data Science", "Scikit-learn", "NumPy & Pandas", "3D Animation & VFX", "Game Design", "Docker", "Git & GitHub"],
      projects: [
        {
          name: "Product Animation Series — Headphones & Mechanical Keyboard",
          desc: "Photorealistic product animations with custom PBR materials, HDR lighting, and motion path animations. Rendered at 4K using Blender Cycles with studio-quality output.",
          tech: ["Blender", "Cycles Renderer", "PBR Materials", "Three.js"],
          details: {
            did: "Created photorealistic product animations with custom PBR materials, HDR lighting, and motion path animations. Modelled intricate mechanical keyboard key mechanisms with fully rigged keycap actuation.",
            approach: "Rendered sequences at 4K using Blender Cycles with denoising for studio-quality output. Embedded interactive 3D model viewers on personal portfolio website using Three.js.",
            vision: "To produce advertising-grade 3D product renders that demonstrate professional-level modelling, rigging, and rendering capabilities.",
            solved: "Achieved studio-quality photorealistic renders suitable for commercial product marketing, with interactive web-based 3D viewers for portfolio showcasing."
          }
        },
        {
          name: "Smart City Traffic AI — Hackathon 1st Place",
          desc: "AI + IoT system predicting and managing urban traffic congestion in real time. Built ML classification model achieving 85%+ accuracy. Won 1st place at RGPV hackathon.",
          tech: ["Python", "Scikit-learn", "Unreal Engine", "IoT Simulation", "ML"],
          details: {
            did: "Designed and led development of an AI + IoT system predicting urban traffic congestion in real time. Implemented ML classification model to analyze traffic density data from simulated IoT sensors. Also built an interactive Unreal Engine visualization of the smart traffic system.",
            approach: "Built a real-time dashboard visualizing AI predictions — system achieved 85%+ accuracy on test data in a 48-hour sprint. Designed game-style UI overlays displaying real-time AI data, blending game-dev and software skills.",
            vision: "To combine AI/ML intelligence with game engine visualization for practical smart city applications that solve real urban challenges.",
            solved: "Won 1st place with judges specifically commending the visual fidelity of the interactive demo and the innovation of combining ML predictions with game engine visualization."
          }
        },
        {
          name: "Procedural Abstract Flow Animation",
          desc: "Generative abstract motion piece using Geometry Nodes and fluid simulation for dynamic visual storytelling. Looping animation suitable for music visualizers and motion backgrounds.",
          tech: ["Blender", "Geometry Nodes", "Fluid Simulation", "EEVEE"],
          details: {
            did: "Designed a generative abstract motion piece using Geometry Nodes and fluid simulation for dynamic visual storytelling. Composed a looping animation suitable for music visualizer, motion background, or NFT art use cases.",
            approach: "Leveraged Blender's procedural Geometry Nodes system to create algorithmically-driven visual art that evolves organically in each frame.",
            vision: "To explore the intersection of procedural generation and artistic expression through code-driven 3D animation.",
            solved: "Published renders on portfolio attracting positive engagement from the 3D design community, demonstrating procedural art capabilities."
          }
        },
        {
          name: "Car Fall Cinematic Animation",
          desc: "Physics-driven cinematic sequence using Blender's rigid body simulation, camera rig animation, volumetric lighting, and compositing post-processing for filmic look.",
          tech: ["Blender", "Rigid Body Physics", "Volumetric Lighting", "Compositing"],
          details: {
            did: "Produced a physics-driven cinematic sequence using Blender's rigid body simulation and camera rig animation. Composed dramatic lighting using area lights and volumetric fog.",
            approach: "Implemented compositing post-processing (glare, chromatic aberration) for filmic look. Combined physics simulation with cinematic camera work for dramatic effect.",
            vision: "To demonstrate advanced Blender skills in physics simulation, cinematic lighting, and post-production compositing.",
            solved: "Created a visually compelling cinematic piece showcasing proficiency in physics-based animation, volumetric rendering, and film-grade compositing."
          }
        },
        {
          name: "CodeHub: Adaptive Learning Platform",
          desc: "E-learning platform with intelligent content recommendation, NLP-powered code hints, and user progress analytics. Built with React and MySQL.",
          tech: ["React", "JavaScript", "MySQL", "NLP", "GitHub"],
          link: "https://codehub321.netlify.app/",
          details: {
            did: "Built a fully functional e-learning platform with intelligent content recommendation logic to surface personalized coding exercises. Implemented basic NLP-powered code hint system for context-sensitive suggestions.",
            approach: "Utilized React Router for seamless navigation, integrated user progress analytics (MySQL) to identify learning bottlenecks and improve curriculum design.",
            vision: "To democratize coding education by providing an accessible, AI-enhanced platform that adapts to each learner's journey.",
            solved: "Solved the problem of one-size-fits-all learning by aggregating tutorials, exercises, and adaptive progress tracking in one intelligent platform."
          }
        },
        {
          name: "Python Data Science Capstone Projects",
          desc: "End-to-end data analysis projects: data cleaning, EDA, feature engineering, predictive modelling with Scikit-learn, and visualization with Matplotlib and Seaborn.",
          tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
          details: {
            did: "Completed end-to-end data analysis projects covering data cleaning, EDA, feature engineering, and model evaluation. Built predictive models using Scikit-learn evaluated with cross-validation, precision, recall, and F1 metrics.",
            approach: "Visualized insights with Matplotlib and Seaborn; presented findings in structured Jupyter notebooks. Applied systematic data science workflow from raw data to actionable predictions.",
            vision: "To build a strong applied data science foundation for developing intelligent features in software products.",
            solved: "Demonstrated ability to handle real-world data challenges end-to-end — from messy data preprocessing to model deployment and insight communication."
          }
        },
        {
          name: "Git Bridge: Interactive Web Application",
          desc: "Visual browser-based GitHub interface demonstrating UI/UX design sensibility and front-end engineering. Built with Python and Tkinter.",
          tech: ["Python", "Tkinter", "Git", "Automation", "GitHub"],
          link: "https://gitbridge.netlify.app/",
          details: {
            did: "Developed a desktop GUI application using Python and Tkinter that acts as a wrapper around Git CLI commands, making version control accessible to beginners.",
            approach: "Automated the execution of shell commands through Python's subprocess module, parsing the output into a user-friendly interface.",
            vision: "To lower the barrier to entry for version control, helping beginners use Git without the steep command-line learning curve.",
            solved: "Eliminated the friction of memorizing Git commands for simple tasks like committing, pushing, and pulling, reducing workflow errors."
          }
        }
      ],
      initials: "PT",
      image: "/Prathvi.webp"
    },

    sampoorn: {
      id: "sampoorn",
      name: "Sampoorn Choubey",
      role: "Digital Marketing & Social Media Specialist",
      bio: "Results-driven Digital Marketing professional with 2+ years of hands-on experience in social media management, content strategy, and brand growth. Managed YouTube and Instagram channels with a combined following of 45,000+, achieving 3x engagement growth through data-driven content planning. Adept at Canva design, video editing, SEO content, and cross-platform campaign execution.",
      skills: ["Social Media Management", "Content Strategy", "Canva (Advanced)", "Video Editing", "SEO & Analytics", "Meta Ads Manager", "Google Analytics", "Campaign Management", "Brand Growth", "Community Management", "Automation (Buffer, Hootsuite, Zapier, N8N)"],
      projects: [
        {
          name: "Sheetal Sant Shree Ramdas — YouTube & Instagram Management",
          desc: "Social Media Manager since Jan 2024. Grew YouTube from 8K to 28K+ subscribers (250% increase) and boosted Instagram reel views by 320% through strategic content scheduling and SEO optimization.",
          tech: ["YouTube Studio", "Meta Business Suite", "Canva", "CapCut", "SEO"],
          details: {
            did: "Managed full social media operations for YouTube and Instagram — grew YouTube subscribers from 8,000 to 28,000+ (250% increase) in 12 months. Increased average Instagram reel views by 320% with trending audio strategy and 5 reels/week cadence.",
            approach: "Implemented data-driven content planning using YouTube Studio and Meta Insights. Designed 100+ branded Canva graphics, thumbnails, and story templates. Managed a 30+ posts/month content calendar across both platforms.",
            vision: "To scale the creator's digital presence through strategic storytelling, SEO-optimized content, and consistent community engagement.",
            solved: "Established a cohesive visual identity that boosted click-through rates by 45%. Improved average watch time by 2.1 minutes through weekly performance analysis. Handled community management with 200+ comments/week moderation."
          }
        },
        {
          name: "Brand Growth Campaign — 90-Day YouTube Sprint",
          desc: "Conceptualized and executed a 90-day YouTube growth sprint: researched 500+ keywords, optimized 80+ existing videos, resulting in 40% increase in organic impressions and 3,000+ new Instagram followers from cross-promotion.",
          tech: ["SEMrush", "YouTube Studio", "Keyword Research", "Cross-Platform Strategy"],
          details: {
            did: "Researched 500+ keywords, optimized 80+ existing videos with new titles/tags/descriptions, and launched a cross-promotion strategy between YouTube and Instagram driving 3,000+ new followers in 3 months.",
            approach: "Created a weekly themed content series format and implemented systematic keyword research and SEO optimization across all existing and new content.",
            vision: "To maximize organic reach and build sustainable audience growth through data-backed content optimization rather than paid promotion.",
            solved: "Achieved 40% increase in organic impressions. Increased subscriber retention rate by 28% and reduced unsubscribe spikes through consistent themed content series."
          }
        },
        {
          name: "Freelance Content Strategy — Local Businesses",
          desc: "Developed and executed social media launch campaigns for 3 local businesses (restaurant, boutique, coaching institute), helping them reach 1,000+ followers within 60 days of launch.",
          tech: ["Canva", "CapCut", "Instagram", "Content Planning", "Analytics"],
          details: {
            did: "Created promotional reels, stories, and posts using Canva and CapCut — producing 15–20 content pieces per client per month. Delivered monthly performance reports with reach, engagement, and follower growth analytics.",
            approach: "Advised businesses on platform selection, content mix, and posting frequency based on target audience demographics. Tailored visual branding and content calendars for each business type.",
            vision: "To empower local businesses in Sagar with professional digital presence and social media strategy at accessible price points.",
            solved: "Helped 3 businesses go from zero to 1,000+ followers in 60 days through systematic content creation and strategic posting schedules."
          }
        },
        {
          name: "IGEC TechFest 2023 — Digital Promotions",
          desc: "Led the social media promotions team of 6 members for the annual college tech fest. Designed event posters, countdown stories, and highlights reels, contributing to 40% increase in registrations.",
          tech: ["Canva", "Instagram", "WhatsApp", "Team Coordination"],
          details: {
            did: "Coordinated content creation and daily posting across Instagram and WhatsApp for IGEC Sagar's TechFest 2023. Managed live event coverage on Instagram Stories, accumulating 5,000+ story views over 2 event days.",
            approach: "Led a 6-member social media team, coordinating content creation workflows, daily posting schedules, and real-time event coverage.",
            vision: "To maximize event visibility and registrations through creative digital promotions and real-time social media engagement.",
            solved: "Contributed to a 40% increase in registrations compared to the previous year through strategic digital promotion and live event coverage."
          }
        }
      ],
      initials: "SC"
    },
    mrityunjay: {
      id: "mrityunjay",
      name: "Mrityunjay Shukla",
      role: "Full-Stack Web Developer",
      bio: "Motivated B.Tech IT student with hands-on experience building full-stack web applications using the MERN stack. Solid foundation in Data Structures & Algorithms with 80+ problems solved on LeetCode and GeeksforGeeks. Built and deployed multiple projects independently, demonstrating the ability to learn quickly and ship functional products.",
      skills: ["JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB", "REST API Design", "JWT Authentication", "TailwindCSS", "MySQL", "DSA", "Git & GitHub", "Postman"],
      projects: [
        {
          name: "ShopNest — E-Commerce Backend API",
          desc: "Production-style RESTful backend for an e-commerce platform with full JWT authentication, role-based access control, and 25+ tested endpoints deployed on Railway.",
          tech: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Railway"],
          details: {
            did: "Built a production-style RESTful backend with full user authentication (JWT + bcrypt), role-based access control for admin and customer users, and designed MongoDB schemas for users, products, orders, and cart with Mongoose.",
            approach: "Secured API routes using middleware for token verification and input validation using express-validator. Tested all 25+ endpoints using Postman with documented route descriptions, sample requests, and expected responses.",
            vision: "To build a scalable, secure backend architecture that mirrors real-world e-commerce systems and demonstrates production-level API design skills.",
            solved: "Implemented complete CRUD endpoints for all major resources with proper authentication, authorization, and input validation. Deployed on Railway with environment variable management and persistent MongoDB Atlas cloud database."
          }
        },
        {
          name: "Tic-Tac-Toe Game with AI Opponent",
          desc: "Interactive browser-based game with two-player local and single-player vs. unbeatable AI using Minimax algorithm. 120+ page views within first 2 weeks.",
          tech: ["JavaScript", "HTML5", "CSS3", "Minimax Algorithm"],
          details: {
            did: "Developed a fully interactive browser-based Tic-Tac-Toe game with two modes: two-player local and single-player vs. AI opponent. Implemented the Minimax algorithm making it unbeatable in hard mode.",
            approach: "Engineered game state management using vanilla JavaScript with clean DOM manipulation for real-time board updates, win detection, and score tracking across sessions. Styled with CSS animations for piece placement and win-line highlight.",
            vision: "To demonstrate understanding of recursion, game theory, and algorithmic thinking through a polished, interactive web application.",
            solved: "Created a fully responsive game for mobile and desktop with an intelligent AI opponent. Published on GitHub Pages — achieved 120+ page views within first 2 weeks after sharing in college coding community."
          }
        },
        {
          name: "Personal Portfolio Website",
          desc: "Portfolio website built from scratch showcasing projects, skills, and contact info. Achieved 90+ Google Lighthouse performance score.",
          tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
          details: {
            did: "Designed and built a personal portfolio website from scratch showcasing projects, skills, and contact information with smooth scroll navigation and CSS keyframe animations.",
            approach: "Implemented a functional contact form with client-side validation, optimized assets for performance, and used semantic HTML structure throughout.",
            vision: "To create a professional digital presence that effectively communicates technical skills and project experience to potential employers.",
            solved: "Achieved 90+ Google Lighthouse performance score through asset optimization and semantic HTML structure. Hosted on GitHub Pages with custom domain configuration."
          }
        },
        {
          name: "DSA Problem Solving — 80+ Problems",
          desc: "Consistent competitive programming practice on LeetCode and GeeksforGeeks — arrays, strings, linked lists, recursion, and sorting with Big-O analysis.",
          tech: ["JavaScript", "LeetCode", "GeeksforGeeks", "Algorithms"],
          details: {
            did: "Solved 80+ problems across arrays, strings, linked lists, recursion, and sorting on LeetCode and GeeksforGeeks with consistent time and space complexity analysis.",
            approach: "Focused on documenting Big-O reasoning in solution comments. Participated in weekly DSA challenges at IGEC Sagar Coding Club with peer code review sessions.",
            vision: "To build a strong algorithmic foundation essential for writing efficient, scalable production code and excelling in technical interviews.",
            solved: "Developed systematic problem-solving skills across core data structures and algorithms, contributing to better code quality in all project work."
          }
        }
      ],
      initials: "MS"
    },
    prajawal: {
      id: "prajawal",
      name: "Prajawal Rathore",
      role: "Video Editor, Social Media Manager & Content Creator",
      bio: "Creative video editor and social media strategist with 2+ years of freelance experience crafting high-impact short-form content for brands across India and the United States. Edited 150+ videos for Instagram Reels, YouTube Shorts, and TikTok — consistently hitting 300K+ combined views. Proficient in Adobe Premiere Pro, After Effects, CapCut, and DaVinci Resolve. Former studio videographer with on-set production experience.",
      skills: ["Adobe Premiere Pro", "Adobe After Effects", "CapCut", "DaVinci Resolve", "Motion Graphics & VFX", "DSLR Photography", "Social Media Strategy", "Content Calendars", "Color Grading", "Canva", "Storyboarding", "Visual Storytelling"],
      projects: [
        {
          name: "Freelance Video Editing — India & International Clients",
          desc: "Edited 150+ short-form videos for Instagram Reels, YouTube Shorts, and TikTok. Increased client engagement by 60%+ and grew a U.S. client's Instagram from 3,200 to 11,000+ followers in 5 months.",
          tech: ["Adobe Premiere Pro", "After Effects", "CapCut", "Frame.io", "DaVinci Resolve"],
          details: {
            did: "Edited 150+ short-form videos optimized for Instagram Reels, YouTube Shorts, and TikTok — applying platform-specific aspect ratios, caption styles, pacing, and hook structures. Served clients across India and the United States in fitness, real estate, lifestyle, and e-commerce niches.",
            approach: "Managed end-to-end content production pipelines: raw footage intake, color grading in Premiere Pro, motion graphics in After Effects, export optimization, and client delivery via Frame.io. Designed monthly content calendars for 4 recurring clients with 20–30 posts/month.",
            vision: "To deliver retention-driven content that ranks on platform algorithms, retains viewer attention, and converts audiences into customers for brands worldwide.",
            solved: "Increased average client engagement rates by 60%+ through trend-informed editing techniques including jump cuts, kinetic typography, and sound-reactive transitions. Grew a U.S.-based lifestyle client's Instagram from 3,200 to 11,000+ followers in 5 months through Reels strategy and niche hashtag research."
          }
        },
        {
          name: "Motozoomer Studio — Videography & Editing",
          desc: "Shot and edited high-quality video content for automotive and lifestyle projects using DSLR cameras and professional lighting rigs at Motozoomer Studio, Bhopal.",
          tech: ["Adobe Premiere Pro", "DSLR", "Professional Lighting", "Audio Monitoring"],
          details: {
            did: "Shot and edited high-quality video content for Motozoomer Studio's automotive and lifestyle projects. Managed on-set responsibilities including equipment setup, lighting configuration, camera operation, and audio monitoring.",
            approach: "Edited raw footage in Premiere Pro — adding color grades, sound design, effects, and final polish — delivering finalized cuts within 48-hour post-production windows. Maintained structured file management for raw assets and project files.",
            vision: "To deliver studio-quality video production that aligns with client briefs and the studio's visual identity standards.",
            solved: "Collaborated directly with the creative director to ensure edits matched brand guidelines. Organized production pipelines for efficient asset management across ongoing projects."
          }
        },
        {
          name: "Fitness Brand Reels Campaign — U.S. Client",
          desc: "Produced a 30-piece Instagram Reels series for a U.S. fitness coach — videos averaged 85,000 views each, with the top reel reaching 420,000 views organically.",
          tech: ["After Effects", "Premiere Pro", "Instagram Reels", "Motion Graphics"],
          details: {
            did: "Produced a 30-piece Instagram Reels series for a U.S. fitness coach over 6 weeks. Applied fast-cut editing, motivational text overlays in After Effects, and licensed audio syncing to build a high-energy brand identity.",
            approach: "Combined kinetic typography, sound-reactive transitions, and trending audio formats to maximize algorithmic reach and viewer retention on Instagram.",
            vision: "To create a viral-ready content series that establishes the client as a top fitness voice on Instagram through professional-grade short-form video.",
            solved: "Videos averaged 85,000 views each, with the top reel reaching 420,000 views organically — the highest-performing video in the client's account history."
          }
        },
        {
          name: "Real Estate Property Showcase — Indian Client",
          desc: "Edited 20+ property walkthrough and aerial footage videos with cinematic color grading, dynamic lower-thirds, and CTA end screens — averaging 12,000+ views on Facebook and YouTube.",
          tech: ["Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
          details: {
            did: "Edited 20+ property walkthrough and aerial footage videos for a Bhopal-based real estate agency using cinematic color grading and smooth transitions. Added dynamic lower-thirds, price overlays, and call-to-action end screens.",
            approach: "Applied cinematic color grading techniques and professional motion graphics to transform raw property footage into polished marketing content.",
            vision: "To elevate real estate marketing in the local market through high-production-value video content that drives buyer inquiries.",
            solved: "Videos averaged 12,000+ views on Facebook and YouTube, providing the agency with a professional digital portfolio for property listings."
          }
        }
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
      { 
        name: "Logo Design", 
        desc: "Custom logos for businesses, coaching centres, shops, professionals, NGOs, and events.",
        image: "/Catalogues images/Logo design.webp"
      },
      { 
        name: "Brand Identity", 
        desc: "Complete brand systems — colour palette, typography, brand guidelines, stationery.",
        image: "/Catalogues images/Brand identity.webp"
      },
      { 
        name: "Banner Design", 
        desc: "Flex banners, digital banners, hoardings, social media banners.",
        image: "/Catalogues images/Banner and hoardings.webp"
      },
      { 
        name: "Business Cards", 
        desc: "Visiting card design and printing — standard, premium, folded formats.",
        image: "/Catalogues images/Business Cards.webp"
      },
      { 
        name: "Invitations", 
        desc: "Wedding cards, event invitations, birthday cards — design and printing.",
        image: "/Catalogues images/Invitation cards.webp"
      },
      { 
        name: "Booklet / Handbook", 
        desc: "Company profiles, product catalogues, coaching handbooks, annual reports.",
        image: "/Catalogues images/Handbook.webp"
      },
      { 
        name: "Art & Craft Work", 
        desc: "Custom handmade art, craft products, decorative items, gift crafting.",
        image: "/Catalogues images/art and craft work.webp"
      }
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
  { keywords: ["team", "prathvi", "sampoorn", "mrityunjay", "prajawal", "member", "people"], answer: "Our elite squad includes Prathvi (Team Leader, Game Dev & AI/ML Enthusiast — Unreal Engine, Blender 3D, Python AI/ML), Sampoorn (Digital Marketing & Social Media Specialist), Mrityunjay (Full-Stack Web Developer), and Prajawal (Video Editor, Social Media Manager & Content Creator). You can view their full project history directly in our Portfolio section!" },
  { keywords: ["where", "location", "sagar", "makroniya", "address"], answer: "We are physically based in Makroniya, Sagar, Madhya Pradesh (470004). This enables us to visit sites for civil CAD mapping and shoot physical promotional footage." },
  { keywords: ["web", "site", "app", "react", "code", "backend", "node", "game", "3d", "blender", "unreal", "ai", "ml", "python", "prathvi"], answer: "Prathvi Singh Thakur is our Team Leader, Game Dev & AI/ML Enthusiast. He specializes in Unreal Engine 5, Blender 3D animation, Python AI/ML (Scikit-learn, Pandas), and React web development. Won 1st place at a hackathon with a Smart City Traffic AI prototype. Mrityunjay Shukla is our Full-Stack Web Developer building MERN stack applications and REST APIs." },
  { keywords: ["video", "ad", "reel", "shoot", "edit"], answer: "Prajawal Rathore is our lead Video Editor & Content Creator with 2+ years of freelance experience. He has edited 150+ videos for Instagram Reels, YouTube Shorts, and TikTok — consistently hitting 300K+ combined views across client accounts. Proficient in Premiere Pro, After Effects, CapCut, and DaVinci Resolve." },
  { keywords: ["social", "media", "marketing", "content", "instagram", "youtube", "post", "reel", "canva", "creator", "sampoorn", "prajawal"], answer: "Sampoorn Choubey is our Digital Marketing & Social Media Specialist with 2+ years of experience managing YouTube & Instagram channels (45,000+ combined following, 3x engagement growth). Prajawal Rathore is our Video Editor, Social Media Manager & Content Creator — edited 150+ videos with 300K+ combined views for clients in India and the U.S. Together they handle content strategy, video production, SEO optimization, Meta Ads, and cross-platform campaign execution." },
  { keywords: ["dsa", "javascript", "script", "backend", "express", "game", "tictactoe", "database", "mysql", "mongodb", "mrityunjay", "code", "dev"], answer: "Mrityunjay Shukla is our Full-Stack Web Developer specializing in the MERN stack. He builds production-style RESTful APIs with JWT authentication, interactive browser games with AI opponents, and has solved 80+ DSA problems on LeetCode and GeeksforGeeks." },
  { keywords: ["prajawal", "editor", "capcut", "after effects", "effects", "storytelling", "video editing", "photography", "premiere", "davinci"], answer: "Prajawal Rathore is our Video Editor, Social Media Manager & Content Creator. He has 2+ years of freelance experience, edited 150+ videos with 300K+ combined views, and specializes in Adobe Premiere Pro, After Effects, CapCut, DaVinci Resolve, motion graphics, DSLR photography, and cinematic color grading. His top reel reached 420,000 organic views." },
  { keywords: ["coaching", "institute", "student app", "parent app", "management system", "coaching management"], answer: "We deliver a comprehensive Coaching Institute Management System consisting of 3 panels (Institute Admin Panel on desktop, Student app on mobile, Parent app on mobile) and 1 RFID hardware device to digitize attendance, manage marks/reports, track fee payments, and push announcements." },
  { keywords: ["rfid", "punch", "card", "gate", "attendance", "sms", "alert"], answer: "Our Coaching system includes a physical, wall-mounted RFID/Barcode punch machine at the gate. When a student scans their card, it logs entry/exit timestamps in the database and triggers an automated, instant parent SMS notification." }
];
