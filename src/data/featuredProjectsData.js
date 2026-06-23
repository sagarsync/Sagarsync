export const featuredProjects = [
  {
    id: "coaching-institute-management",
    title: "Coaching Institute Management System",
    tagline: "A comprehensive 3-panel ecosystem integrated with physical RFID/Barcode hardware to digitize student records, automate live parent alerts, and streamline institute management.",
    category: "Software & Hardware Integration",
    clientName: "Elite Career Institute, Makroniya, Sagar, Madhya Pradesh (MP), India",
    icon: "fa-graduation-cap",
    theme: "sage",
    geoMetadata: {
      latitude: "23.8642° N",
      longitude: "78.7880° E",
      city: "Sagar",
      suburb: "Makroniya",
      state: "Madhya Pradesh",
      country: "India",
      postalCode: "470004",
      region: "Bundelkhand",
      coverageAreas: [
        "Makroniya",
        "Sagar City",
        "Gopal Ganj",
        "Civil Lines",
        "Tili",
        "Khurai",
        "Bina",
        "Damoh",
        "Garhakota",
        "Banda",
        "Rahatgarh"
      ],
      landmarks: [
        "Elite Career Institute Makroniya",
        "Makroniya Chouraha",
        "Deendayal Chowk",
        "Sagar Railway Station"
      ]
    },
    colorClasses: {
      primary: "text-forest",
      secondary: "text-sage",
      bgLight: "bg-pebbleLight",
      bgCard: "bg-white",
      badge: "bg-sage/10 text-sage",
      border: "border-pebble",
      gradient: "from-forest to-forestDark"
    },
    quickStats: [
      { label: "Panels Included", value: "3", icon: "fa-desktop" },
      { label: "Total Features", value: "40+", icon: "fa-cubes" },
      { label: "Hardware Device", value: "1", icon: "fa-microchip" },
      { label: "Attendance Alerts", value: "Live SMS", icon: "fa-bolt" }
    ],
    heroImage: "/Coaching institute  Management image/Coaching Institute Management System Ecosystem Infographic.webp",
    description: "Many local coaching institutes in Makroniya, Sagar, and surrounding districts of Madhya Pradesh (MP) face operational bottlenecks: manual registers, delayed fee installments, and manual parent updates. We built this comprehensive hardware-software hybrid deployment for Elite Career Institute in Sagar, MP. The system features two scans per day (entry and exit) via wall-mounted RFID scanners at the gate, automatic SMS alert triggers to parents with child timestamps, and full academic profile/marks trackers.",
    keywords: [
      "Coaching Management Software Sagar",
      "RFID Student Attendance System Sagar MP",
      "School management system Makroniya",
      "Parent alert SMS gate scanner MP",
      "Vite React Tailwind database integration Sagar",
      "Sagar Sync software engineering case study",
      "Elite Career Institute Makroniya Sagar",
      "RFID Attendance Sagar MP",
      "Coaching classes management Makroniya Sagar",
      "Sagar Madhya Pradesh local software development"
    ],
    
    deliverables: [
      "Institute Admin Desktop Panel (Web Interface)",
      "Student Companion Mobile App (Android/iOS via Flutter)",
      "Parent Monitoring Mobile App (Android/iOS via Flutter)",
      "Wall-Mounted RFID Gate Scanner Unit (Hardware Integration)",
      "Custom Branded RFID Student ID Punching Cards",
      "Automated WhatsApp & SMS Gateway Integration"
    ],
    
    benefits: [
      {
        title: "100% Automated Attendance",
        desc: "Eliminates class roll-calls, saving up to 15 minutes per session. Students scan at the entrance gate and attendance registers immediately update.",
        icon: "fa-check-circle"
      },
      {
        title: "Instant Parental Reassurance",
        desc: "SMS alerts trigger the exact second a child punches in or out. Parents stay informed of their child's safety without needing to call the center.",
        icon: "fa-sms"
      },
      {
        title: "35% Faster Fee Recoveries",
        desc: "Dues remain visible on the parent app, and the system automatically broadcasts polite automated WhatsApp alerts, reducing overdue installments.",
        icon: "fa-receipt"
      },
      {
        title: "Centralized Performance Tracking",
        desc: "Saves hours of teacher coordination. Admin updates marks in bulk; students and parents get visual progress analytics and charts instantly.",
        icon: "fa-chart-line"
      },
      {
        title: "Paperless Notes & Uploads",
        desc: "Admins upload study PDFs chapter-wise. Students access them in one tap, cutting notebook printing costs and improving resource availability.",
        icon: "fa-file-pdf"
      },
      {
        title: "Premium Brand Value",
        desc: "A custom mobile app and high-tech gate scanning elevate the institute's market standing, giving it a key differentiator in local marketing.",
        icon: "fa-award"
      }
    ],

    panels: [
      {
        id: "admin-panel",
        name: "Institute Admin Panel",
        device: "Desktop — Web Browser",
        role: "Coaching End Operations",
        icon: "fa-laptop",
        desc: "The central hub for administrative management. Streamlines daily operations, academic registers, fees tracking, and reporting logs.",
        features: [
          {
            title: "Student Profile Management",
            desc: "Add, edit, and update full student records including photo, personal details, parent contact information, batch allocation, and enrollment dates.",
            image: "/Coaching institute  Management image/Student Profile Management UI.webp"
          },
          {
            title: "Class-Wise Student Database",
            desc: "Browse and filter the student database dynamically by batch, class, or status. Provides quick stats (total active, batch capacity) per group.",
            image: "/Coaching institute  Management image/Class-wise Student Database Dashboard UI.webp"
          },
          {
            title: "Student ID Card Generation",
            desc: "Auto-generates print-ready punching cards and official ID cards for each student containing high-resolution barcodes/QR codes.",
            image: "/Coaching institute  Management image/Student Id card.webp"
          },
          {
            title: "Exam Marks Entry & Update",
            desc: "Subject-wise grade recording with automatic overall grade calculation. Supports bulk uploads and adjustments to speed up marksheets.",
            image: "/Coaching institute  Management image/Exam Marks Entry Dashboard UI.webp"
          },
          {
            title: "Student Performance Reports",
            desc: "Access analytical views of student marks history, class averages, rank distributions, and subject-wise success matrices.",
            image: "/Coaching institute  Management image/Coaching Institute Management Dashboard UI.webp"
          },
          {
            title: "Course Notes & Study Material Manager",
            desc: "Upload notes, syllabus PDF copies, and practice worksheets chapter-wise. Instantly distributes files to target student apps.",
            image: "/Coaching institute  Management image/Study Materials Dashboard UI.webp"
          },
          {
            title: "Fees Management & Alerts",
            desc: "Track total tuition structure, installments received, pending balances, and overdue flags. Directly generates and logs invoices and receipts.",
            image: "/Coaching institute  Management image/Student Fee Management Dashboard UI.webp"
          },
          {
            title: "Announcements Broadcasting",
            desc: "Compose announcements (holidays, schedule changes) and broadcast them as push notifications to all users, specific classes, or parents.",
            image: "/Coaching institute  Management image/Announcements Management Dashboard UI.webp"
          }
        ]
      },
      {
        id: "student-app",
        name: "Student Companion App",
        device: "Mobile — Android / iOS App",
        role: "Student End Portal",
        icon: "fa-mobile-alt",
        desc: "Empowers students to take control of their learning progress, check class timings, review notes, and access their digital identity.",
        features: [
          {
            title: "Mobile Dashboard Portal",
            desc: "Single-view access of enrolled batch, overall attendance percentage, upcoming test schedules, and fresh notification alerts.",
            image: "/Coaching institute  Management image/Student Mobile Dashboard UI.webp"
          },
          {
            title: "Marks & Grades View",
            desc: "View marks statements from monthly mock exams, topic-wise tests, and final test series, accompanied by performance trends.",
            image: "/Coaching institute  Management image/Student Marks Dashboard UI.webp"
          },
          {
            title: "Fees Due & Payment Receipts",
            desc: "View pending fee schedules, upcoming installment deadlines, and download invoices or PDF receipts of past payments.",
            image: "/Coaching institute  Management image/Student Fee Status Dashboard UI.webp"
          },
          {
            title: "Digital Attendance Calendar",
            desc: "Month-by-month calendar breakdown showing present days, leaves, and absences with cumulative attendance statistics.",
            image: "/Coaching institute  Management image/Student Attendance Dashboard UI.webp"
          }
        ]
      },
      {
        id: "parent-app",
        name: "Parent Monitoring App",
        device: "Mobile — Android / iOS App",
        role: "Parent End Reassurance",
        icon: "fa-user-shield",
        desc: "Keeps parents informed of their child's presence, exam progress, fee statuses, and notice alerts to maintain collaboration.",
        features: [
          {
            title: "Parent Portal Dashboard",
            desc: "Summary view showing the child's attendance rate, last check-in timestamp, outstanding dues, and latest institute updates.",
            image: "/Coaching institute  Management image/Parent Portal Dashboard UI.webp"
          },
          {
            title: "Daily Attendance Timeline",
            desc: "Real-time log of check-in and check-out scanning records with exact hours, ensuring parents know when their child enters/leaves.",
            image: "/Coaching institute  Management image/Parent Attendance Dashboard UI.webp"
          },
          {
            title: "Academic Progress & Rank",
            desc: "Detailed marksheet logs showing child's marks, grade curves, performance rankings, and feedback from course mentors.",
            image: "/Coaching institute  Management image/Parent Academic Performance Dashboard UI.webp"
          },
          {
            title: "Announcement Board",
            desc: "Dedicated feed for parent-focused letters, general notices, test timetables, holiday schedules, and event announcements.",
            image: "/Coaching institute  Management image/Parent Announcements Dashboard UI.webp"
          },
          {
            title: "Alert Feed & Notifications",
            desc: "Real-time push history logging child card punches, fee reminders, and safety updates from the institute.",
            image: "/Coaching institute  Management image/Parent Notification Center UI.webp"
          }
        ]
      },
      {
        id: "hardware-integration",
        name: "Hardware Scanning System",
        device: "Gate Machine — RFID / Barcode Unit",
        role: "Physical Security & Capture",
        icon: "fa-hard-hat",
        desc: "A physical terminal placed at the gate which interfaces directly with our local databases to register attendance and notify parents.",
        features: [
          {
            title: "Live Attendance Tracking & Alerts",
            desc: "Dual scan tracking logic (entry & exit trigger) that registers check-ins on the database and instantly generates SMS alerts to parents.",
            image: "/Coaching institute  Management image/RFID screen recorder.webp"
          }
        ]
      }
    ],

    gallery: [
      { title: "Coaching Institute Management System Ecosystem Infographic", path: "/Coaching institute  Management image/Coaching Institute Management System Ecosystem Infographic.webp" },
      { title: "Coaching Institute Management Dashboard UI", path: "/Coaching institute  Management image/Coaching Institute Management Dashboard UI.webp" },
      { title: "Student Profile Management UI", path: "/Coaching institute  Management image/Student Profile Management UI.webp" },
      { title: "Class-wise Student Database Dashboard UI", path: "/Coaching institute  Management image/Class-wise Student Database Dashboard UI.webp" },
      { title: "Exam Marks Entry Dashboard UI", path: "/Coaching institute  Management image/Exam Marks Entry Dashboard UI.webp" },
      { title: "Study Materials Dashboard UI", path: "/Coaching institute  Management image/Study Materials Dashboard UI.webp" },
      { title: "Student Fee Management Dashboard UI", path: "/Coaching institute  Management image/Student Fee Management Dashboard UI.webp" },
      { title: "Announcements Management Dashboard UI", path: "/Coaching institute  Management image/Announcements Management Dashboard UI.webp" },
      { title: "Student Mobile Dashboard UI", path: "/Coaching institute  Management image/Student Mobile Dashboard UI.webp" },
      { title: "Student Marks Dashboard UI", path: "/Coaching institute  Management image/Student Marks Dashboard UI.webp" },
      { title: "Student Fee Status Dashboard UI", path: "/Coaching institute  Management image/Student Fee Status Dashboard UI.webp" },
      { title: "Student Attendance Dashboard UI", path: "/Coaching institute  Management image/Student Attendance Dashboard UI.webp" },
      { title: "Parent Portal Dashboard UI", path: "/Coaching institute  Management image/Parent Portal Dashboard UI.webp" },
      { title: "Parent Attendance Dashboard UI", path: "/Coaching institute  Management image/Parent Attendance Dashboard UI.webp" },
      { title: "Parent Academic Performance Dashboard UI", path: "/Coaching institute  Management image/Parent Academic Performance Dashboard UI.webp" },
      { title: "Parent Announcements Dashboard UI", path: "/Coaching institute  Management image/Parent Announcements Dashboard UI.webp" },
      { title: "Parent Notification Center UI", path: "/Coaching institute  Management image/Parent Notification Center UI.webp" },
      { title: "RFID Scanning Gate System", path: "/Coaching institute  Management image/RFID screen recorder.webp" },
      { title: "Custom Student Punching Card Design Template", path: "/Coaching institute  Management image/Student Id card.webp" }
    ]
  }
];
