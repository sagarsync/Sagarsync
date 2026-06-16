import { useState, useEffect, useRef } from 'react';
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

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
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
      text: "Namaste! I am **SyncBot**, your dynamic AI assistance system. Feel free to ask me anything about Sagar Sync’s services, our 4-person team, prices, local MP packages, or portfolios!",
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

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

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
    return "Thanks for connecting with Sagar Sync! I am currently running on local backup mode. For immediate queries, feel free to submit a brief on our Contact Page or call Prathvi Singh Thakur directly at +91 8962685091.";
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
Reference information:
- Name: Sagar Sync (Lean, transparent digital & design agency in Sagar, MP).
- Team: 4 core members. Team Leader: Prathvi Singh Thakur. Mobile Developer: Rohan Mishra. CAD Civil Architect: Priya Sharma. Video Editor: Sameer Khan.
- Location: Makroniya, Sagar, Madhya Pradesh (India).
- Pricing policy: Custom services are priced dynamically on requirement. Package Bundles: 
  1. "Coaching Institute Scale-Up Bundle" (₹19,999) - static portals, GMB setup, social ads, server configuration.
  2. "Real Estate / Contractor Elevation Pack" (₹16,499) - 3D front elevations, walkthrough, landing capture.
  3. "Local Business Kickstart Pack" (₹11,999) - static lander, showroom reels, map optimized keywords.
- Contacts: Prathvi Singh Thakur (+91 8962685091), Krishna Pathak (+91 8827050460).
Be concise, extremely friendly on mobile viewports, clear, and direct.`;

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
