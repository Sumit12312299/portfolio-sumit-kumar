import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Server, 
  MonitorSmartphone, 
  Code, 
  ChevronDown, 
  ChevronUp, 
  Cpu, 
  Sparkles, 
  Binary, 
  Zap, 
  Languages,
  Globe,
  Network,
  Users,
  Lock,
  Trophy,
  Activity,
  Layout,
  Linkedin
} from 'lucide-react';
import './Certificates.css';

const certificatesData = [
  {
    title: "API Test Automation with SoapUI",
    issuer: "LinkedIn",
    date: "Feb 2026",
    icon: <MonitorSmartphone size={32} />,
    description: "Expertise in SOAP/REST API testing, test automation frameworks, and SoapUI tool suites.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Mastering REST API Automation using REST Assured",
    issuer: "Thrive EdSchool by The Test Tribe",
    date: "Feb 2026",
    icon: <Server size={32} />,
    description: "Comprehensive knowledge of Java-based REST API automation using REST Assured.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "Nov 2025",
    icon: <ShieldCheck size={32} />,
    description: "Deep dive into digital footprint analysis, data security, and social media privacy protocols.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "ReactJS",
    issuer: "Infosys Springboard",
    date: "Sep 2025",
    icon: <Code size={32} />,
    description: "Advanced frontend development using React, state management, and component architecture.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Angular",
    issuer: "Infosys Springboard",
    date: "Sep 2025",
    icon: <MonitorSmartphone size={32} />,
    description: "Building scalable enterprise applications with Angular, TypeScript, and RxJS.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Java(Basic)",
    issuer: "HackerRank",
    date: "Sep 2025",
    icon: <Code size={32} />,
    description: "Validated proficiency in core Java concepts and problem-solving through HackerRank.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Master Generative AI & Generative AI tools",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    icon: <Cpu size={32} />,
    description: "Mastery of ChatGPT, DALL-E, and various generative AI productivity tools.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    icon: <Sparkles size={32} />,
    description: "Optimizing AI responses through advanced prompt engineering and LLM orchestration.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Build Generative AI Apps and Solutions",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    icon: <Cpu size={32} />,
    description: "Creating AI-driven solutions using no-code platforms and LLM integration.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "GenAI Fundamentals",
    issuer: "Disha AI",
    date: "Jun 2025",
    icon: <Sparkles size={32} />,
    description: "Foundational concepts of artificial intelligence and machine learning models.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Java Programming",
    issuer: "iamneo",
    date: "May 2025",
    icon: <Code size={32} />,
    description: "In-depth Java programming, from syntax to advanced object-oriented design.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "English Proficiency Course",
    issuer: "Bluehawks Edu",
    date: "Dec 2024",
    icon: <Languages size={32} />,
    description: "Communication skills, listening proficiency, and professional language usage.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Object Oriented Programming",
    issuer: "iamneo",
    date: "Dec 2024",
    icon: <Code size={32} />,
    description: "Core OOP principles: Encapsulation, Heritage, Polymorphism, and Abstraction.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Data Structures and Algorithm",
    issuer: "iamneo",
    date: "Dec 2024",
    icon: <Binary size={32} />,
    description: "Mastery of fundamental data structures and efficient algorithm design.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Digital Systems",
    issuer: "Coursera",
    date: "Nov 2024",
    icon: <Cpu size={32} />,
    description: "Logic gates, circuit design, and computer processor architecture.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Computer Communications Specialization",
    issuer: "Coursera",
    date: "Oct 2024",
    icon: <Network size={32} />,
    description: "Specialized knowledge in network architecture, protocols, and standard communication models.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "TCP/IP and Advanced Topics",
    issuer: "Coursera",
    date: "Oct 2024",
    icon: <Globe size={32} />,
    description: "In-depth study of the TCP/IP suite, routing protocols, and advanced networking concepts.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    date: "Sep 2024",
    icon: <Network size={32} />,
    description: "Comprehensive foundation in network layers, IP addressing, and network security.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Introduction to Hardware and OS",
    issuer: "IBM",
    date: "Aug 2024",
    icon: <Server size={32} />,
    description: "Core knowledge of computer hardware components and operating system management.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Leader Theory & Motivation",
    issuer: "Udemy",
    date: "Aug 2024",
    icon: <Users size={32} />,
    description: "Leadership strategies, team motivation, and organizational management principles.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Programming in C language Certification",
    issuer: "iamneo",
    date: "May 2024",
    icon: <Code size={32} />,
    description: "Foundational programming concepts and syntax mastery in C language.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Basic Python towards ML/AL",
    issuer: "CSE PATHSHALA",
    date: "Mar 2024",
    icon: <Code size={32} />,
    description: "Introduction to Python programming with a focus on machine learning and AI applications.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Foundation of Cybersecurity",
    issuer: "Google",
    date: "Mar 2024",
    icon: <Lock size={32} />,
    description: "Core concepts of cybersecurity, including threat analysis and risk management.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "24-hour Hackathon",
    issuer: "Encrypt Edge",
    date: "Mar 2024",
    icon: <Trophy size={32} />,
    description: "Participation and completion of an intense 24-hour cybersecurity-themed hackathon.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Energy Literacy Training",
    issuer: "Energy Swaraj Foundation",
    date: "Jan 2024",
    icon: <Zap size={32} />,
    description: "Understanding sustainable energy systems and energy conservation practices.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Workshop: Cyber Security v/s Ethical Hacking",
    issuer: "Secuneus Tech",
    date: "Dec 2023",
    icon: <ShieldCheck size={32} />,
    description: "Hands-on workshop exploring the distinctions and domains of cybersecurity and ethical hacking.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "12-hour CTF Challenge",
    issuer: "CyberSec Symposium",
    date: "Nov 2023",
    icon: <Activity size={32} />,
    description: "Participation in a high-intensity 12-hour Capture The Flag cybersecurity competition.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Oct 2023",
    icon: <Layout size={32} />,
    description: "Comprehensive training in modern CSS layout techniques and responsive accessibility.",
    link: "https://www.linkedin.com/in/sumit-kumar-t88/details/certifications/"
  }
];

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? certificatesData : certificatesData.slice(0, 3);

  return (
    <section className="certificates-section container" id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        layout
      >
        <h2 className="section-title">
          Certifications
        </h2>
        <p className="section-subtitle">Professional credentials that validate my technical expertise.</p>

        <motion.div layout className="certs-grid">
          <AnimatePresence>
            {displayedCerts.map((cert) => (
              <motion.div 
                className="cert-card"
                key={cert.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="cert-header">
                  <div className="cert-icon-wrapper">
                    {cert.icon}
                  </div>
                  <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                    <Linkedin size={20} />
                  </a>
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">Issued by {cert.issuer} &bull; {cert.date}</p>
                <p className="cert-desc">{cert.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {certificatesData.length > 3 && (
          <motion.div layout className="see-more-container">
            <button 
              className="btn btn-secondary see-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'See More Certifications'}
              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Certificates;
