import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code, BookOpen, Star, ChevronDown, ChevronUp, Trophy } from 'lucide-react';
import './Achievements.css';

const achievementsData = [
  {
    title: "50-Day Streak on LeetCode",
    date: "April 2024",
    description: "Maintained a 50-day daily problem-solving streak on LeetCode, showcasing consistency and dedication.",
    icon: <Star size={24} />
  },
  {
    title: "150 LeetCode Questions Solved",
    date: "April 2024",
    description: "Solved 150 coding questions on LeetCode, strengthening problem-solving and algorithmic thinking.",
    icon: <Code size={24} />
  },
  {
    title: "Placed in Dean's List",
    date: "August 2024",
    description: "Achieved academic excellence and earned a place on the Dean's List at Lovely Professional University, recognizing the top 10% of students.",
    icon: <BookOpen size={24} />
  },
  {
    title: "Top Performer - GFG Course",
    date: "July 2024",
    description: "Completed all modules and challenges in the GFG Complete Interview Preparation course with distinction.",
    icon: <Award size={24} />
  },
  {
    title: "Hackathon Winner - WebFest",
    date: "January 2024",
    description: "Spearheaded a team of 4 to build an AI-powered responsive web application within 48 hours, securing front-page placement.",
    icon: <Trophy size={24} />
  }
];

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedAchievements = showAll ? achievementsData : achievementsData.slice(0, 2);

  return (
    <section className="achievements-section container" id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        layout
      >
        <h2 className="section-title">
          Achievements
        </h2>
        <p className="section-subtitle">Milestones reflecting excellence and leadership.</p>

        <motion.div layout className="timeline">
          <AnimatePresence>
            {displayedAchievements.map((item, index) => (
              <motion.div 
                className="timeline-item" 
                key={item.title}
                layout
                initial={{ opacity: 0, x: -30, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: -30, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="timeline-icon">
                  {item.icon}
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
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
            {showAll ? 'Show Less' : 'See More Achievements'}
            {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;
