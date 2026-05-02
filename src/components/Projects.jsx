import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: 'CinePro',
    description: 'A premium movie exploration platform featuring real-time data from TMDB API. Includes advanced filtering, search functionality, and a cinematic user interface with fluid animations.',
    tech: ['React', 'TMDB API', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/Sumit12312299/Cinepro',
    demo: 'https://cinepro-mu.vercel.app/'
  },
  {
    title: 'AI Resume Analyzer',
    description: 'An AI-powered application that evaluates resumes against job descriptions. Provides ATS scoring, keyword analysis, and personalized suggestions for improvement using Google Gemini AI.',
    tech: ['React', 'Google Gemini', 'Node.js', 'Lucide React'],
    github: 'https://github.com/Sumit12312299/AI_resume_Analyser',
    demo: 'https://airesume-seven.vercel.app/'
  },
  {
    title: 'Expenz',
    description: 'A full-stack finance management app that empowers users to monitor and analyze their spending. Features include user authentication, categorized transactions, and an interactive dashboard with Chart.js for a complete overview of income vs expenses.',
    tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
    github: '#',
    demo: '#'
  },
  {
    title: 'YouTuba',
    description: 'A full-featured video browsing app that replicates core functionalities of YouTube. Fetches real-time video queries, suggesting options and displaying detailed channels leveraging YouTube Data API.',
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
    demo: '#'
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <section className="projects-section container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        layout
      >
        <h2 className="section-title">
          Featured Projects
        </h2>
        <p className="section-subtitle">A showcase of my recent full-stack web applications.</p>

        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div 
                className="project-card" 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      <a href={project.github} className="icon-link"><Github size={20} /></a>
                      <a href={project.demo} className="icon-link"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div layout className="see-more-container">
          <button 
            className="btn btn-secondary see-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'See More Projects'}
            {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Projects;
