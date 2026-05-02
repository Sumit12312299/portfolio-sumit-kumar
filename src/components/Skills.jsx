import { motion } from 'framer-motion';
import { Terminal, Layout, Wrench, Server, Users } from 'lucide-react';
import './Skills.css';

const skillsData = [
  {
    category: "Languages",
    icon: <Terminal size={24} />,
    items: [
      { name: "C", devicon: "devicon-c-plain colored" },
      { name: "C++", devicon: "devicon-cplusplus-plain colored" },
      { name: "Java", devicon: "devicon-java-plain colored" },
      { name: "Python", devicon: "devicon-python-plain colored" },
      { name: "JavaScript", devicon: "devicon-javascript-plain colored" }
    ],
    color: "var(--accent-1)"
  },
  {
    category: "Frameworks & Frontend",
    icon: <Layout size={24} />,
    items: [
      { name: "HTML", devicon: "devicon-html5-plain colored" },
      { name: "CSS", devicon: "devicon-css3-plain colored" },
      { name: "Node.js", devicon: "devicon-nodejs-plain colored" },
      { name: "React.js", devicon: "devicon-react-original colored" }
    ],
    color: "var(--accent-2)"
  },
  {
    category: "Backend",
    icon: <Server size={24} />,
    items: [
      { name: "Django", devicon: "devicon-django-plain colored" },
      { name: "REST API", devicon: "devicon-fastapi-plain colored" },
      { name: "Spring Boot", devicon: "devicon-spring-original colored" },
      { name: "Express.js", devicon: "devicon-express-original colored" }
    ],
    color: "#ff007f"
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench size={24} />,
    items: [
      { name: "MySQL", devicon: "devicon-mysql-plain colored" },
      { name: "Git & GitHub", devicon: "devicon-github-original colored" },
      { name: "VS Code", devicon: "devicon-vscode-plain colored" },
      { name: "IntelliJ IDEA", devicon: "devicon-intellij-plain colored" },
      { name: "Eclipse IDE", devicon: "devicon-eclipse-plain colored" }
    ],
    color: "#00ff88"
  },
  {
    category: "Soft Skills",
    icon: <Users size={24} />,
    items: [
      { name: "Leadership", devicon: "" },
      { name: "Problem-Solving", devicon: "" },
      { name: "Adaptability", devicon: "" }
    ],
    color: "#ffc107"
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="skills-section container" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Technical Arsenal
        </h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              className="skill-card" 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: skillGroup.color }}
            >
              <div className="skill-header" style={{ color: skillGroup.color }}>
                {skillGroup.icon}
                <h3>{skillGroup.category}</h3>
              </div>
              <div className="skill-tags">
                {skillGroup.items.map((item, idx) => (
                  <span key={idx} className="skill-tag">
                    {item.devicon && <i className={item.devicon}></i>}
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
