import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section container" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="resume-container"
      >
        <div className="resume-content">
          <h2 className="section-title">
            Resume
          </h2>
          <p className="resume-desc">
            Get a full overview of my experience, capabilities, and education. You can view the document directly or download it for your records.
          </p>
          
          <div className="resume-buttons">
            <a href="https://drive.google.com/file/d/1tUdGDcOq55MgsfFD_wWAQNw258Jidisv/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn btn-primary">
              <Download size={20} /> Download Resume
            </a>
            <a href="https://drive.google.com/file/d/1tUdGDcOq55MgsfFD_wWAQNw258Jidisv/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Eye size={20} /> Preview
            </a>
          </div>
        </div>

        <motion.div 
          className="resume-preview-card"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -10, rotate: 2 }}
        >
          <div className="resume-doc-header">
            <div className="doc-dots">
              <span></span><span></span><span></span>
            </div>
            <p>Sumit_Kumar_Resume.pdf</p>
          </div>
          <div className="resume-doc-body">
            <div className="doc-line title"></div>
            <div className="doc-line subtitle"></div>
            <br/>
            <div className="doc-line block"></div>
            <div className="doc-line block short"></div>
            <br/>
            <div className="doc-line block"></div>
            <div className="doc-line block medium"></div>
            <div className="resume-watermark">
              <FileText size={48} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
