import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section container" id="home">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p 
          className="greeting gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I am
        </motion.p>
        <motion.h1 
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Sumit Kumar.
        </motion.h1>
        <motion.h2 
          className="role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I build things for the web.
        </motion.h2>
        
        <motion.p 
          className="bio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently focused on building accessible, human-centered products at the intersection of design and engineering.
        </motion.p>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary">
            Check out my work
            <ArrowRight size={20} />
          </a>
          <div className="social-links">
            <a href="https://github.com/Sumit12312299" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sumit-kumar-t88" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sumitkr4364@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="hero-visuals"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="abstract-shape"></div>
        <img src="/profile.png" alt="Sumit Kumar" className="hero-profile-img" />
      </motion.div>
    </section>
  );
};

export default Hero;
