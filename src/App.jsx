import { useState, useEffect, useRef, useCallback } from 'react';
import { animate, stagger } from 'animejs';

// Static Data
import { companyState, offlineChatBotResponses } from './data/companyData.js';

// Layout & Elements Components
import Loader from './components/Loader.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';
import PortfolioModal from './components/PortfolioModal.jsx';

// Page Views
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

// Map URL paths to tab IDs and vice versa
const VALID_TABS = ['home', 'about', 'services', 'portfolio', 'contact'];

function getTabFromPath() {
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  return VALID_TABS.includes(path) ? path : 'home';
}

function getPathFromTab(tab) {
  return tab === 'home' ? '/' : `/${tab}`;
}

export default function App() {
  const [activeTab, setActiveTab] = useState(getTabFromPath);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  
  // Contact form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formService, setFormService] = useState('General Query');
  const [formBrief, setFormBrief] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Chatbot states
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: "welcome",
      text: "Namaste! I am **SyncBot**, your dynamic AI assistance system. Feel free to ask me anything about Sagar Sync’s services, our team, prices, local MP packages, or portfolios!",
      sender: "bot"
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const pageContentRef = useRef(null);
  const chatMessagesEndRef = useRef(null);

  // Scroll to top on page change & trigger transition animation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (pageContentRef.current) {
      animate(pageContentRef.current, {
        opacity: [0, 1],
        y: [15, 0],
        duration: 350,
        ease: 'outQuad'
      });
    }

    // Staggered animation for team cards if switching to Portfolio
    if (activeTab === 'portfolio') {
      setTimeout(() => {
        animate('.team-card', {
          opacity: [0, 1],
          y: [30, 0],
          delay: stagger(100),
          duration: 600,
          ease: 'outBack'
        });
      }, 50);
    }
  }, [activeTab]);

  // Viewport scroll-reveal animations using anime.js
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target, {
            opacity: [0, 1],
            y: [20, 0],
            duration: 600,
            ease: 'outQuad'
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  // Scroll chatbot to bottom when new messages arrive
  useEffect(() => {
    if (chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages, isTyping]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Sync activeTab from browser back/forward navigation
  useEffect(() => {
    const onPopState = () => {
      setActiveTab(getTabFromPath());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = useCallback((tabId) => {
    const newPath = getPathFromTab(tabId);
    if (window.location.pathname !== newPath) {
      window.history.pushState(null, '', newPath);
    }
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  }, []);

  // Select a bundle and auto-populate the contact form
  const handleSelectBundle = (optionValue, bundleName) => {
    setFormService(optionValue);
    setFormBrief(`I am looking to book the "${bundleName}". Please reach out with direct specifications and execution deadlines for our local business.`);
    setActiveTab('contact');
  };

  // Handle Contact Form Submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    
    const clientLead = {
      name: formName,
      phone: formPhone,
      email: formEmail,
      service: formService,
      brief: formBrief
    };

    // Save lead in localStorage as an offline fallback
    const existingLeads = JSON.parse(localStorage.getItem('sagar_sync_leads') || '[]');
    existingLeads.push({ ...clientLead, submittedAt: new Date().toISOString() });
    localStorage.setItem('sagar_sync_leads', JSON.stringify(existingLeads));

    // Show success state optimistically
    setFormSubmitted(true);

    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientLead)
      });
    } catch {
      // Fail silently - since it is already saved in localStorage, the client won't lose their data
    }

    // Reset after some time
    setTimeout(() => {
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormService('General Query');
      setFormBrief('');
      setFormSubmitted(false);
    }, 5500);
  };

  // Toggle chatbot window
  const toggleChatbot = () => {
    setChatOpen(!chatOpen);
    if (!chatOpen) {
      setTimeout(() => {
        animate('#chatbot-window', {
          scale: [0.85, 1],
          opacity: [0, 1],
          y: [30, 0],
          duration: 350,
          ease: 'outElastic'
        });
      }, 50);
    }
  };

  // Chat message lookups offline
  const lookupOfflineAnswers = (query) => {
    const lowercaseQuery = query.toLowerCase();
    for (const item of offlineChatBotResponses) {
      if (item.keywords.some(keyword => lowercaseQuery.includes(keyword))) {
        return item.answer;
      }
    }
    return "Thanks for connecting with Sagar Sync! I am currently running on local backup mode. For immediate queries, feel free to submit a brief on our Contact Page or reach out to us directly.";
  };

  // Send chatbot user query
  const sendUserMessage = async (textToSend = null) => {
    const queryText = (textToSend || chatInput).trim();
    if (!queryText) return;

    // Append user message
    const userMsg = { id: `user-${Date.now()}`, text: queryText, sender: "user" };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    let completed = false;

    // Timeout fallback protection: 4.5 seconds
    const fallbackTimeout = setTimeout(() => {
      if (!completed) {
        completed = true;
        setIsTyping(false);
        const localizedResponse = lookupOfflineAnswers(queryText);
        setChatMessages(prev => [...prev, {
          id: `bot-${Date.now()}`,
          text: localizedResponse,
          sender: "bot"
        }]);
      }
    }, 4500);

    try {
      const clientApiKey = import.meta.env.VITE_GEMINI_API_KEY;

      let response;
      if (clientApiKey) {
        const systemPrompt = `You are SyncBot, the official AI representative of Sagar Sync.

Reference Information (Sagar Sync Business Overview & Services):
1. About Sagar Sync:
- Comprehensive, locally-rooted service platform based in Makroniya, Sagar, Madhya Pradesh (India).
- Serves as a single point of contact for individuals, coaching centres, shop owners, businesses, and builders for digital, creative, printing, media, legal, events, and construction services.
- Managed service model: We understand requirements first, coordinate execution via our expert squad or network, and manage full delivery.

2. Core Philosophy & Pricing Process:
- "Understand first, quote later." No rigid upfront price lists or templates. Every quote is custom.
- Standard steps:
  * Inquiry logged (via form, WhatsApp, direct outreach).
  * Discovery conversation to understand project scope.
  * We provide a rough layout, wireframe, or concept first at NO CHARGE.
  * Present concept and share detailed itemised quote.
  * Client approves and work begins with clear milestones.

3. Detailed Service Catalogue:
- Design & Branding: Logos, complete brand systems, flex/digital banners, standard/premium business cards, wedding & event invitations, booklets/handbooks/catalogues, custom handmade art & crafts.
- Websites & Digital Presence: Business websites, landing pages, e-commerce stores, online ordering systems, online setup (Google Business Profile, local SEO, social media), website maintenance.
- Software & App Development: Custom billing software, inventory/stock tracking, daily sales/profit tracker, returns system, UPI/QR cash payment checkout support, Flutter mobile apps (Android/iOS), custom payroll/attendance software.
- Coaching Institute Solutions: Portal/app for study materials, fee management software, auto-payment reminders via WhatsApp/SMS, result management dashboards, note/book cover designs.
- Shop & Retail Owner Solutions: POS billing, thermal printer integration, daily/monthly profit calculators, low-stock triggers, WhatsApp online ordering, return & exchange flow management.
- Printing Services: Card printing, large format flex/banners, brochures/flyers, letterheads/stamps, custom coaching notebooks.
- Photography & Videography: Cinematic wedding films, pre-wedding location shoots, product catalogues, corporate/event coverage, video editing, social media reels.
- Legal & Financial: Consultations with local lawyers, ITR filing, GST returns, CA audits/balance sheets, MSME/trade licence business registrations, contracts/agreements.
- Events & Function Management: Wedding planning, tent/shamiana canopy setup, catering coordination, stage/decor floral lighting, parties/birthdays, corporate launches.
- Construction & Trade: House mapping floor plans, Revit 3D/2D CAD drawings, carpentry, iron smithing/welding, renovations/flooring, interior layout consulting.

4. Target Client Segments:
- Shop/retail owners, coaching centres, schools, builders/contractors, newlyweds/families, professionals (CAs, lawyers, doctors), social/political campaigns.

5. Key Differentiators:
- Hyperlocal Expertise: Physically based in Sagar, allowing site visits and local shoots.
- No-Pressure Pricing: Custom tailored to scope.
- Wide Range: Covers everything under one roof.
- Free Concept Drafts: Before asking for payments.

6. Team Members & Roles:
- Prathvi Singh Thakur: Team Leader, Game Dev & AI/ML Enthusiast (Unreal Engine 5, Blender 3D animation, Python AI/ML, React, hackathon 1st place winner).
- Sampoorn Choubey: Digital Marketing & Social Media Specialist (Content strategy, SEO, Meta Ads, platform growth, 45,000+ combined following, cross-platform campaigns).
- Mrityunjay Shukla: Full-Stack Web Developer (MERN stack, REST APIs, JWT authentication, DSA, 80+ LeetCode problems).
- Prajawal Rathore: Video Editor, Social Media Manager & Content Creator (Premiere Pro, After Effects, CapCut, DaVinci Resolve, 150+ videos edited, 300K+ combined views).
- Direct Contact Partners: Prathvi, Krishna Pathak, Sampoorn, Mrityunjay, and Prajawal.

7. Roadmap:
- Phase 1 (Launch): Local base build & inbound/outbound setup.
- Phase 2 (Pricing & Portfolio): Add public portfolio & client tracking portal.
- Phase 3 (Expansion): Hire staff, launch mobile app, expand to Damoh, Chhatarpur, Tikamgarh.

Instructions for you (SyncBot):
- Answer all inquiries accurately using the details above.
- Be extremely friendly, clear, direct, and concise (especially for mobile viewports).
- Highlight the free layout/wireframe policy whenever custom services or pricing are mentioned.`;

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${clientApiKey}`;
        response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: queryText }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          })
        });
      } else {
        response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: queryText })
        });
      }

      if (!completed) {
        completed = true;
        clearTimeout(fallbackTimeout);
        setIsTyping(false);

        if (response.ok) {
          const result = await response.json();
          const aiMessageText = result.candidates?.[0]?.content?.parts?.[0]?.text;
          if (aiMessageText) {
            setChatMessages(prev => [...prev, {
              id: `bot-${Date.now()}`,
              text: aiMessageText,
              sender: "bot"
            }]);
          } else {
            setChatMessages(prev => [...prev, {
              id: `bot-${Date.now()}`,
              text: lookupOfflineAnswers(queryText),
              sender: "bot"
            }]);
          }
        } else {
          setChatMessages(prev => [...prev, {
            id: `bot-${Date.now()}`,
            text: lookupOfflineAnswers(queryText),
            sender: "bot"
          }]);
        }
      }
    } catch {
      if (!completed) {
        completed = true;
        clearTimeout(fallbackTimeout);
        setIsTyping(false);
        setChatMessages(prev => [...prev, {
          id: `bot-${Date.now()}`,
          text: lookupOfflineAnswers(queryText),
          sender: "bot"
        }]);
      }
    }
  };

  const handleChatKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendUserMessage();
    }
  };

  const openMemberPortfolio = (memberId) => {
    setActiveMember(companyState.team[memberId]);
    document.body.classList.add('modal-open');
    setTimeout(() => {
      animate('#portfolio-modal-container', {
        scale: [0.85, 1],
        opacity: [0, 1],
        duration: 350,
        ease: 'outBack'
      });
    }, 50);
  };

  const closePortfolioModal = () => {
    document.body.classList.remove('modal-open');
    setActiveMember(null);
  };

  return (
    <div className="bg-pebbleLight text-forest font-sans flex flex-col min-h-screen relative overflow-x-hidden antialiased select-none">
      
      {/* Eye Comforting Initial Loader */}
      <Loader delay={1200} />

      {/* Header element component */}
      <Header 
        activeTab={activeTab} 
        onNavigate={handleNavigate} 
        mobileMenuOpen={mobileMenuOpen} 
        onToggleMobileMenu={toggleMobileMenu} 
      />

      {/* Main Content Area */}
      <main className="flex-grow pt-20" ref={pageContentRef}>
        {activeTab === 'home' && <Home onNavigate={handleNavigate} />}
        {activeTab === 'about' && <About />}
        {activeTab === 'services' && <Services onSelectBundle={handleSelectBundle} />}
        {activeTab === 'portfolio' && <Portfolio onOpenMember={openMemberPortfolio} />}
        {activeTab === 'contact' && (
          <Contact 
            formName={formName}
            setFormName={setFormName}
            formPhone={formPhone}
            setFormPhone={setFormPhone}
            formEmail={formEmail}
            setFormEmail={setFormEmail}
            formService={formService}
            setFormService={setFormService}
            formBrief={formBrief}
            setFormBrief={setFormBrief}
            formSubmitted={formSubmitted}
            onSubmit={handleFormSubmission}
          />
        )}
      </main>

      {/* Footer component */}
      <Footer onNavigate={handleNavigate} />

      {/* Chatbot component */}
      <Chatbot 
        chatOpen={chatOpen}
        toggleChatbot={toggleChatbot}
        chatMessages={chatMessages}
        chatInput={chatInput}
        setChatInput={setChatInput}
        isTyping={isTyping}
        sendUserMessage={sendUserMessage}
        handleChatKeyPress={handleChatKeyPress}
        chatMessagesEndRef={chatMessagesEndRef}
      />

      {/* Portfolio Member Modal overlay */}
      <PortfolioModal 
        activeMember={activeMember} 
        onClose={closePortfolioModal} 
      />
    </div>
  );
}
