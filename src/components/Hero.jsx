import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-section container" id="home">

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="greeting gradient-text"
          variants={itemVariants}
        >
          Hi, I am
        </motion.p>
        <motion.h1 
          className="name"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Sumit Kumar.
        </motion.h1>
        <motion.h2 
          className="role"
          variants={itemVariants}
        >
          {"I build things for the web.".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                delay: 1 + index * 0.05,
              }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="cursor"
          >
            |
          </motion.span>
        </motion.h2>

        
        <motion.p 
          className="bio"
          variants={itemVariants}
        >
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently focused on building accessible, human-centered products at the intersection of design and engineering.
        </motion.p>

        <motion.div 
          className="hero-cta"
          variants={itemVariants}
        >
          <motion.a 
            href="#projects" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check out my work
            <ArrowRight size={20} />
          </motion.a>
          <div className="social-links">
            <motion.a 
              href="https://github.com/Sumit12312299" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon"
              whileHover={{ y: -5, color: "var(--accent-1)" }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/sumit-kumar-t88" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon"
              whileHover={{ y: -5, color: "var(--accent-1)" }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:sumitkr4364@gmail.com" 
              className="social-icon"
              whileHover={{ y: -5, color: "var(--accent-1)" }}
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      
      <motion.div 
        className="hero-visuals"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -15, 0]
        }}
        transition={{ 
          opacity: { duration: 1, delay: 0.3 },
          scale: { duration: 1, delay: 0.3 },
          y: { 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
      >
        <div className="abstract-shape"></div>
        <img src="/profile.png" alt="Sumit Kumar" className="hero-profile-img" />
      </motion.div>

    </section>
  );
};

export default Hero;
