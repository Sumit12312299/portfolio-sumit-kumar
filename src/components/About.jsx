import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about-section container" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          About Me
        </h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p>
              Hello! My name is <strong>Sumit Kumar</strong> and I enjoy creating things that live on the internet. My interest in web development started back in the day when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about logic and problem-solving!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working on a variety of exciting projects, sharpening my skills in full-stack development. My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p>
              I am a quick learner and a team player who adaptability and leadership skills help in delivering high-quality solutions efficiently.
            </p>
          </motion.div>

          <motion.div 
            className="education-timeline"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="sub-title"><GraduationCap size={24} className="icon-accent" /> Education</h3>
            
            <div className="edu-item">
              <div className="edu-marker"></div>
              <div className="edu-content">
                <span className="edu-date">Aug 2023 - Present</span>
                <h4>Lovely Professional University</h4>
                <p>B.Tech in Computer Science & Engineering<br/>Punjab, India</p>
              </div>
            </div>
            
            <div className="edu-item">
              <div className="edu-marker"></div>
              <div className="edu-content">
                <span className="edu-date">Apr 2021 – Mar 2022</span>
                <h4>Himalayan Public School</h4>
                <p>Intermediate - PCM<br/>Patna, Bihar</p>
              </div>
            </div>

            <div className="edu-item">
              <div className="edu-marker"></div>
              <div className="edu-content">
                <span className="edu-date">Apr 2019 – Mar 2020</span>
                <h4>D.A.V Public School</h4>
                <p>Matriculation<br/>Patna, Bihar</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
