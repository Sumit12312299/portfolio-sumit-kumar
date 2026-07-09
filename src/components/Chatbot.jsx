import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  X, 
  MessageSquare, 
  Download, 
  Eye, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Trophy, 
  Code, 
  Sparkles, 
  GraduationCap, 
  Award,
  Terminal,
  Server,
  Layers,
  FileText
} from 'lucide-react';
import './Chatbot.css';

// Custom designed premium AI Logo that perfectly matches Sumit Kumar's (SKY) portfolio brand and aesthetic
const SkyAiLogo = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="skyAiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent-1)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="1" />
        </linearGradient>
        <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Outer Cyber Hexagonal Shield */}
      <path
        d="M50 10 L86 31 L86 69 L50 90 L14 69 L14 31 Z"
        stroke="url(#skyAiGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(5, 5, 5, 0.7)"
        filter="url(#neonGlow)"
      />
      {/* Coding Terminal Symbol ">" representing Developer Profile */}
      <path
        d="M34 38 L48 50 L34 62"
        stroke="var(--accent-1)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Animated Pulsing Core dot */}
      <circle
        cx="60"
        cy="50"
        r="7"
        fill="var(--accent-2)"
        filter="url(#neonGlow)"
      >
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      {/* AI Sparkle */}
      <path
        d="M72 20 L74.5 25.5 L80 28 L74.5 30.5 L72 36 L69.5 30.5 L64 28 L69.5 25.5 Z"
        fill="var(--accent-1)"
      />
    </svg>
  );
};

const chatbotKnowledge = {
  about: "Hello! My name is **Sumit Kumar** and I enjoy creating things that live on the internet. I'm a software engineer specializing in full-stack web development and design. Currently, I'm pursuing my B.Tech in Computer Science & Engineering at **Lovely Professional University**. I love solving complex engineering challenges and turning ideas into seamless, interactive digital experiences.",
  
  education: [
    {
      period: "Aug 2023 - Present",
      institution: "Lovely Professional University",
      course: "B.Tech in Computer Science & Engineering",
      location: "Punjab, India"
    },
    {
      period: "Apr 2021 – Mar 2022",
      institution: "Himalayan Public School",
      course: "Intermediate - PCM",
      location: "Patna, Bihar"
    },
    {
      period: "Apr 2019 – Mar 2020",
      institution: "D.A.V Public School",
      course: "Matriculation",
      location: "Patna, Bihar"
    }
  ],

  skills: {
    languages: ["C", "C++", "Java", "Python", "JavaScript"],
    frontend: ["HTML", "CSS", "React.js", "Node.js", "Angular"],
    backend: ["Django", "REST API", "Spring Boot", "Express.js"],
    tools: ["MySQL", "Git & GitHub", "VS Code", "IntelliJ IDEA", "Eclipse IDE"],
    soft: ["Leadership", "Problem-Solving", "Adaptability"]
  },

  projects: [
    {
      title: 'PDFCraft',
      description: 'A privacy-focused, client-side PDF utility suite running entirely in the browser. Enables users to merge, split, compress, and organize PDFs, and convert DOCX, XLSX, or HTML files with zero server uploads.',
      tech: ['React', 'PDF.js', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/Sumit12312299/pdf-craft',
      demo: 'https://pdf-craft-sand.vercel.app/'
    },
    {
      title: 'CinePro',
      description: 'A premium movie exploration platform featuring real-time data from TMDB API with fluid animations.',
      tech: ['React', 'TMDB API', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/Sumit12312299/Cinepro',
      demo: 'https://cinepro-mu.vercel.app/'
    },
    {
      title: 'AI Resume Analyzer',
      description: 'An AI-powered ATS evaluation tool using Google Gemini AI to analyze resumes against job descriptions.',
      tech: ['React', 'Google Gemini', 'Node.js', 'Lucide React'],
      github: 'https://github.com/Sumit12312299/AI_resume_Analyser',
      demo: 'https://airesume-seven.vercel.app/'
    },
    {
      title: 'Expenz',
      description: 'A full-stack financial health dashboard tracking income, expenses, and transaction categorization.',
      tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      title: 'YouTuba',
      description: 'A fully featured video querying browser utilizing the official YouTube Data API V3.',
      tech: ['React', 'YouTube API', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A scalable online shopping platform featuring user authentication, payment gateway integration, and an intuitive admin dashboard for inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Parking Management System',
      description: 'A robust parking management software that streamlines vehicle entry and exit operations, tracks available slots, and calculates fees seamlessly based on duration.',
      tech: ['C++', 'OOP', 'Data Structures'],
      github: 'https://github.com/Sumit12312299/Parking-Management-System',
      demo: 'https://parking-management-system-lkvt.onrender.com'
    }
  ],

  achievements: [
    "🔥 **50-Day Streak on LeetCode**: Solved problems consistently every single day.",
    "💻 **150+ LeetCode Solved**: Built strong analytical and algorithmic skills.",
    "🏆 **Dean's List Honoree**: Placed on LPU's academic Dean's list for scoring in the top 10% of students.",
    "🥇 **Hackathon Winner (WebFest)**: Led a team of 4 to design and deploy an AI web app in under 48 hours.",
    "🎓 **GFG Course Distinction**: Completed the premium Complete Interview Preparation course as a top performer."
  ],

  contact: {
    email: "sumitkr4364@gmail.com",
    phone: "+91 7482908181",
    linkedin: "linkedin.com/in/sumit-kumar-t88",
    github: "github.com/Sumit12312299",
    linkedinUrl: "https://www.linkedin.com/in/sumit-kumar-t88",
    githubUrl: "https://github.com/Sumit12312299",
    resumeUrl: "https://drive.google.com/file/d/1tUdGDcOq55MgsfFD_wWAQNw258Jidisv/view?usp=drive_link"
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'bot',
      text: "Hi there! 👋 I am Sumit's AI Assistant. Ask me anything about his projects, skills, education, certifications, or how to contact him!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [inlineFormSubmitted, setInlineFormSubmitted] = useState(false);
  const [inlineFormLoading, setInlineFormLoading] = useState(false);

  const chatMessagesRef = useRef(null);

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTo({
        top: chatMessagesRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to bottom when chat opens, new messages are added, or typing state changes
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        scrollToBottom();
      }, 100); // 100ms delay to let the DOM and layout settle
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (unread) {
      setUnread(false);
    }
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Trigger typing state
    setIsTyping(true);

    setTimeout(() => {
      const response = processQuery(text);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text,
        type: response.type || null,
        data: response.data || null,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, 900); // Realistic AI delay
  };

  const handleQuickAction = (action) => {
    let userQuery = "";
    switch (action) {
      case 'about':
        userQuery = "Tell me about Sumit Kumar";
        break;
      case 'projects':
        userQuery = "What projects has he worked on?";
        break;
      case 'skills':
        userQuery = "Show me his technical skills";
        break;
      case 'achievements':
        userQuery = "What are his major achievements?";
        break;
      case 'certifications':
        userQuery = "What professional certifications does he have?";
        break;
      case 'resume':
        userQuery = "Can I download his resume?";
        break;
      case 'contact':
        userQuery = "How can I contact Sumit?";
        break;
      case 'message':
        userQuery = "I want to send an instant message to Sumit";
        break;
      default:
        userQuery = action;
    }
    handleSendMessage(userQuery);
  };

  const handleInlineFormSubmit = async (e) => {
    e.preventDefault();
    setInlineFormLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "2115b54d-4d1d-4d68-8edc-f8aa2b76cb00");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setInlineFormSubmitted(true);
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              id: Date.now().toString(),
              sender: 'bot',
              text: "✅ **Success!** Your message was sent straight to Sumit's inbox. He'll get back to you very soon. Feel free to ask me anything else!",
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        }, 800);
      } else {
        alert("Oops! There was an issue sending your message. Please write to sumitkr4364@gmail.com.");
      }
    } catch (error) {
      alert("Error transmitting message. Please mail sumitkr4364@gmail.com directly.");
    } finally {
      setInlineFormLoading(false);
    }
  };

  const processQuery = (query) => {
    const q = query.toLowerCase().trim();

    // Helper functions to check for keyword groups (including Hindi/Hinglish keywords)
    const matchesAny = (words) => words.some(word => q.includes(word));

    // 1. Greet
    if (matchesAny(["hi", "hello", "hey", "greetings", "hola", "sup", "yo", "kaise", "namaste", "pranam", "ram ram", "salam"])) {
      return {
        text: "Hello! 😊 How can I help you today? I'm ready to answer any questions about Sumit's web apps, software engineering background, qualifications, or credentials!"
      };
    }

    // 2. Resume / CV
    if (matchesAny(["resume", "cv", "download", "pdf", "biodata", "resume link", "resume dikhao"])) {
      return {
        text: "You can download Sumit's official resume using the button below or preview it directly in Google Drive:",
        type: 'resume',
        data: chatbotKnowledge.contact
      };
    }

    // Check if query is about projects
    const isProjectRelated = matchesAny(["project", "portfolio", "work", "apps", "built", "create", "make", "banaye", "kam kiya", "experience", "website", "system"]);

    // Dynamic specific projects search first
    const matchedProj = chatbotKnowledge.projects.find(p => {
      const normalizedTitle = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
      const normalizedQuery = q.replace(/[^a-z0-9]/g, '');
      return normalizedQuery.includes(normalizedTitle) || q.includes(p.title.toLowerCase());
    });

    if (matchedProj) {
      let prefix = "💻";
      const titleLower = matchedProj.title.toLowerCase();
      if (titleLower.includes("cinepro")) prefix = "🎥";
      else if (titleLower.includes("resume") || titleLower.includes("analyzer")) prefix = "🤖";
      else if (titleLower.includes("parking")) prefix = "🚗";
      else if (titleLower.includes("pdf") || titleLower.includes("craft")) prefix = "📄";
      else if (titleLower.includes("expenz") || titleLower.includes("finance")) prefix = "💰";
      else if (titleLower.includes("tuba") || titleLower.includes("video")) prefix = "📺";
      else if (titleLower.includes("commerce") || titleLower.includes("shop")) prefix = "🛒";

      return {
        text: `${prefix} **${matchedProj.title}** - ${matchedProj.description}\n\n**Tech Stack:** ${matchedProj.tech.join(', ')}`,
        type: 'single_project',
        data: matchedProj
      };
    }

    // 3. General Projects
    if (isProjectRelated) {
      return {
        text: "Here are some of Sumit's premium full-stack and software projects. Tap the links to browse their live builds or view their GitHub codebases:",
        type: 'projects',
        data: chatbotKnowledge.projects
      };
    }

    // 4. Skills / Technologies
    if (matchesAny(["skill", "tech", "stack", "language", "code", "framework", "python", "java", "c++", "javascript", "react", "programming", "know", "aata hai"])) {
      return {
        text: "Sumit boasts a rich engineering stack ranging from low-level systems languages to advanced microservice frameworks:",
        type: 'skills',
        data: chatbotKnowledge.skills
      };
    }

    // 5. Education
    if (matchesAny(["education", "college", "lpu", "university", "study", "school", "degree", "padhai", "qualification", "btech", "b.tech"])) {
      return {
        text: "Here is Sumit's academic timeline. He is currently pursuing a full-time Bachelor of Technology (B.Tech) in Punjab:",
        type: 'education',
        data: chatbotKnowledge.education
      };
    }

    // 6. Achievements
    if (matchesAny(["achieve", "streak", "leetcode", "dean", "hackathon", "trophy", "won", "award", "rank", "success"])) {
      return {
        text: "Sumit regularly participates in coding challenges and maintains exceptional academic and practical standards. Here are some of his key highlights:",
        type: 'achievements',
        data: chatbotKnowledge.achievements
      };
    }

    // 7. Certifications
    if (matchesAny(["cert", "nptel", "infosys", "credential", "certificate", "license"])) {
      return {
        text: "Sumit holds over **28 professional credentials** validating his expertise in modern engineering fields. Key certifications include:\n\n" +
          "• **API Test Automation with SoapUI** (LinkedIn Certification - Feb 2026)\n" +
          "• **REST API Automation with REST Assured** (Thrive EdSchool - Feb 2026)\n" +
          "• **Privacy and Security in Online Social Media** (NPTEL National Certification - Nov 2025)\n" +
          "• **ReactJS & Angular Engineering** (Infosys Springboard - Sep 2025)\n" +
          "• **Java Standard Programming** (HackerRank Basic - Sep 2025)\n" +
          "• **Generative AI & LLM Prompting** (Disha AI & Infosys - Aug 2025)\n\n" +
          "Would you like to visit his LinkedIn profile to see the full list?",
        type: 'certifications',
        data: chatbotKnowledge.contact
      };
    }

    // 8. Contact / Message / Hire
    if (matchesAny(["contact", "hire", "email", "phone", "message", "social", "number", "call", "milna", "baat", "connect", "reach"])) {
      return {
        text: "You can reach out to Sumit directly, or drop a quick note right here in this chat bubble! Here are his contact details:",
        type: 'contact',
        data: chatbotKnowledge.contact
      };
    }

    // 9. About Sumit
    if (matchesAny(["about", "who is", "sumit", "background", "who are you", "introduce", "intro", "kaun hai", "kon hai"])) {
      return {
        text: chatbotKnowledge.about
      };
    }

    // 10. Help / Guide
    if (matchesAny(["help", "ask", "what can you do", "queries"])) {
      return {
        text: "I'm fully trained on Sumit's professional history! You can ask me questions like:\n\n• *'What are your top projects?'*\n• *'Show me your technical skills'* \n• *'Tell me about your education at LPU'*\n• *'What certifications do you have?'*\n• *'Can I download your resume?'*\n• *'How can I get in touch with you?'*"
      };
    }

    // Fallback
    return {
      text: "I couldn't quite map that to my offline knowledge module. 😅 However, I'd love to help you find it! Would you like to select one of these topics?",
      type: 'help'
    };
  };

  return (
    <div className="chatbot-container">
      {/* Floating Trigger Icon */}
      <motion.button 
        className="chatbot-toggle"
        onClick={toggleChat}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle chatbot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <SkyAiLogo size={32} />
            </motion.div>
          )}
        </AnimatePresence>

        {unread && <span className="unread-badge"></span>}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-window"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="header-info">
                <div className="avatar-wrapper">
                  <SkyAiLogo size={24} />
                  <span className="status-dot"></span>
                </div>
                <div className="header-text">
                  <h3>Sumit's AI Assistant</h3>
                  <p><Sparkles size={12} className="gradient-text" /> Online &bull; Ready to Assist</p>
                </div>
              </div>
              <button className="close-btn" onClick={toggleChat}>
                <X size={20} />
              </button>
            </div>

            {/* Messages body */}
            <div className="chat-messages" ref={chatMessagesRef}>
              {messages.map((msg) => (
                <div key={msg.id} className={`message-item ${msg.sender}`}>
                  <div className="msg-avatar">
                    {msg.sender === 'bot' ? <SkyAiLogo size={20} /> : <FileText size={16} />}
                  </div>
                  <div className="msg-bubble">
                    <p style={{ whiteSpace: 'pre-line' }}>
                      {/* Very simple markdown parsing for bold elements */}
                      {msg.text.split('**').map((chunk, idx) => 
                        idx % 2 === 1 ? <strong key={idx}>{chunk}</strong> : chunk
                      )}
                    </p>

                    {/* Rich Components Integration */}
                    {msg.sender === 'bot' && msg.type && (
                      <div className="bot-rich-content">
                        {/* Projects render */}
                        {msg.type === 'projects' && msg.data && (
                          msg.data.map((proj, pIdx) => (
                            <div key={pIdx} className="chat-project-card">
                              <div className="chat-project-header">
                                <h4>{proj.title}</h4>
                                <div className="chat-project-links">
                                  {proj.github !== '#' && (
                                    <a href={proj.github} target="_blank" rel="noreferrer" title="Github"><Github size={14} /></a>
                                  )}
                                  {proj.demo !== '#' && (
                                    <a href={proj.demo} target="_blank" rel="noreferrer" title="Live Demo"><ExternalLink size={14} /></a>
                                  )}
                                </div>
                              </div>
                              <p className="chat-project-desc">{proj.description}</p>
                              <div className="chat-project-tech">
                                {proj.tech.slice(0, 3).map((t, tIdx) => (
                                  <span key={tIdx}>{t}</span>
                                ))}
                                {proj.tech.length > 3 && <span>+{proj.tech.length - 3} more</span>}
                              </div>
                            </div>
                          ))
                        )}

                        {/* Single Project render */}
                        {msg.type === 'single_project' && msg.data && (
                          <div className="chat-project-card" style={{ borderColor: 'var(--accent-1)' }}>
                            <div className="chat-project-header">
                              <h4 style={{ color: 'var(--accent-1)' }}>{msg.data.title}</h4>
                              <div className="chat-project-links">
                                {msg.data.github !== '#' && (
                                  <a href={msg.data.github} target="_blank" rel="noreferrer"><Github size={15} /></a>
                                )}
                                {msg.data.demo !== '#' && (
                                  <a href={msg.data.demo} target="_blank" rel="noreferrer"><ExternalLink size={15} /></a>
                                )}
                              </div>
                            </div>
                            <div className="chat-project-tech" style={{ marginTop: '8px' }}>
                              {msg.data.tech.map((t, tIdx) => (
                                <span key={tIdx} style={{ color: 'var(--accent-1)', borderColor: 'rgba(0,240,255,0.2)' }}>{t}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Skills render */}
                        {msg.type === 'skills' && msg.data && (
                          <>
                            <div className="chat-skill-group">
                              <h4>💻 Languages</h4>
                              <div className="chat-skill-tags">
                                {msg.data.languages.map((sk) => <span key={sk} className="chat-skill-tag">{sk}</span>)}
                              </div>
                            </div>
                            <div className="chat-skill-group">
                              <h4>🖥️ Frontend</h4>
                              <div className="chat-skill-tags">
                                {msg.data.frontend.map((sk) => <span key={sk} className="chat-skill-tag">{sk}</span>)}
                              </div>
                            </div>
                            <div className="chat-skill-group">
                              <h4>⚙️ Backend</h4>
                              <div className="chat-skill-tags">
                                {msg.data.backend.map((sk) => <span key={sk} className="chat-skill-tag">{sk}</span>)}
                              </div>
                            </div>
                            <div className="chat-skill-group">
                              <h4>🛠️ Tools & Tools</h4>
                              <div className="chat-skill-tags">
                                {msg.data.tools.map((sk) => <span key={sk} className="chat-skill-tag">{sk}</span>)}
                              </div>
                            </div>
                          </>
                        )}

                        {/* Education timeline render */}
                        {msg.type === 'education' && msg.data && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderLeft: '1px solid var(--accent-1)', paddingLeft: '8px', marginLeft: '4px' }}>
                            {msg.data.map((edu, eIdx) => (
                              <div key={eIdx} style={{ fontSize: '0.8rem' }}>
                                <span style={{ color: 'var(--accent-1)', fontSize: '0.7rem', fontWeight: 'bold' }}>{edu.period}</span>
                                <h4 style={{ margin: '2px 0', fontSize: '0.85rem', color: '#fff' }}>{edu.institution}</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{edu.course} &bull; {edu.location}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Achievements bullet render */}
                        {msg.type === 'achievements' && msg.data && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
                            {msg.data.map((ach, aIdx) => (
                              <div key={aIdx} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                                <span style={{ color: 'var(--accent-1)', marginTop: '2px' }}><Trophy size={12} /></span>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                  {ach.split('**').map((chunk, idx) => 
                                    idx % 2 === 1 ? <strong key={idx} style={{ color: '#fff' }}>{chunk}</strong> : chunk
                                  )}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Resume Actions */}
                        {msg.type === 'resume' && msg.data && (
                          <div className="chat-action-buttons">
                            <a href={msg.data.resumeUrl} target="_blank" rel="noreferrer" className="chat-action-btn primary">
                              <Download size={14} /> Download Resume
                            </a>
                            <a href={msg.data.resumeUrl} target="_blank" rel="noreferrer" className="chat-action-btn">
                              <Eye size={14} /> Live Preview
                            </a>
                          </div>
                        )}

                        {/* Certifications Actions */}
                        {msg.type === 'certifications' && msg.data && (
                          <div className="chat-action-buttons">
                            <a href={msg.data.linkedinUrl} target="_blank" rel="noreferrer" className="chat-action-btn primary">
                              <Linkedin size={14} /> See Credentials on LinkedIn
                            </a>
                          </div>
                        )}

                        {/* Contact details card & Inline Message Form */}
                        {msg.type === 'contact' && msg.data && (
                          <>
                            <div className="chat-contact-list">
                              <a href={`mailto:${msg.data.email}`} className="chat-contact-item">
                                <Mail size={14} />
                                <span>{msg.data.email}</span>
                              </a>
                              <a href={`tel:${msg.data.phone}`} className="chat-contact-item">
                                <Phone size={14} />
                                <span>{msg.data.phone}</span>
                              </a>
                              <a href={msg.data.linkedinUrl} target="_blank" rel="noreferrer" className="chat-contact-item">
                                <Linkedin size={14} />
                                <span>linkedin.com/in/sumit-kumar-t88</span>
                              </a>
                              <a href={msg.data.githubUrl} target="_blank" rel="noreferrer" className="chat-contact-item">
                                <Github size={14} />
                                <span>github.com/Sumit12312299</span>
                              </a>
                            </div>

                            {/* Direct Messenger Integration */}
                            {!inlineFormSubmitted ? (
                              <form className="chat-inline-form" onSubmit={handleInlineFormSubmit}>
                                <h4 style={{ fontSize: '0.8rem', color: 'var(--accent-1)', display: 'flex', alignItems: 'center', gap: '4px' }}><Sparkles size={12} /> Send direct message</h4>
                                <input type="text" name="name" placeholder="Your Name" required />
                                <input type="email" name="email" placeholder="Your Email" required />
                                <textarea name="message" rows="3" placeholder="Type your message..." required></textarea>
                                <button type="submit" className="chat-action-btn primary" style={{ padding: '4px 8px', justifyContent: 'center' }} disabled={inlineFormLoading}>
                                  {inlineFormLoading ? "Sending..." : "Transmit Message"}
                                </button>
                              </form>
                            ) : null}
                          </>
                        )}

                        {/* Help Quick Actions */}
                        {msg.type === 'help' && (
                          <div className="chat-action-buttons">
                            <button className="chat-action-btn" onClick={() => handleQuickAction('projects')}>💻 Projects</button>
                            <button className="chat-action-btn" onClick={() => handleQuickAction('skills')}>⚡ Technical Skills</button>
                            <button className="chat-action-btn" onClick={() => handleQuickAction('education')}>🎓 Education</button>
                            <button className="chat-action-btn" onClick={() => handleQuickAction('contact')}>📞 Contact Info</button>
                          </div>
                        )}
                      </div>
                    )}
                    <span className="msg-time">{msg.time}</span>
                  </div>
                </div>
              ))}

              {/* Bot Typing indicator */}
              {isTyping && (
                <div className="message-item bot">
                  <div className="msg-avatar">
                    <SkyAiLogo size={20} />
                  </div>
                  <div className="msg-bubble" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--card-border)' }}>
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions (Floating Chips above Input) */}
            <div className="quick-actions-container">
              <button className="quick-action-chip" onClick={() => handleQuickAction('about')}>👤 About Sumit</button>
              <button className="quick-action-chip" onClick={() => handleQuickAction('projects')}>💻 Apps/Projects</button>
              <button className="quick-action-chip" onClick={() => handleQuickAction('skills')}>⚡ Tech Skills</button>
              <button className="quick-action-chip" onClick={() => handleQuickAction('achievements')}>🏆 Achievements</button>
              <button className="quick-action-chip" onClick={() => handleQuickAction('certifications')}>📜 Certs</button>
              <button className="quick-action-chip" onClick={() => handleQuickAction('resume')}>📄 Resume</button>
              <button className="quick-action-chip" onClick={() => handleQuickAction('contact')}>📞 Contact Info</button>
            </div>

            {/* Footer Input Area */}
            <form 
              className="chat-input-area"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <div className="chat-input-wrapper">
                <input 
                  type="text" 
                  className="chat-input"
                  placeholder="Ask me anything about Sumit..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isTyping}
                />
              </div>
              <button 
                type="submit" 
                className="chat-send-btn"
                disabled={!inputValue.trim() || isTyping}
              >
                <Send size={16} />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
