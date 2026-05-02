import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    
    /* 
      ATTENTION: You MUST get your own free Access Key for this form to work!
      1. Go to https://web3forms.com/
      2. Enter your email (sumitkr4364@gmail.com)
      3. Paste the key you receive into the quotes below:
    */
    formData.append("access_key", "2115b54d-4d1d-4d68-8edc-f8aa2b76cb00"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section container" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Get In Touch
        </h2>
        <p className="section-subtitle">Have a question or want to work together? Leave a message!</p>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            <p>Ready to collaborate? Reach out to me directly through any of these platforms.</p>
            
            <div className="info-list">
              <a href="mailto:sumitkr4364@gmail.com" className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <span>sumitkr4364@gmail.com</span>
                </div>
              </a>
              <a href="tel:+917482908181" className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <span>+91 7482908181</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sumit-kumar-t88" target="_blank" rel="noreferrer" className="info-item">
                <div className="info-icon"><Linkedin size={20} /></div>
                <div>
                  <h4>LinkedIn</h4>
                  <span>linkedin.com/in/sumit-kumar-t88</span>
                </div>
              </a>
              <a href="https://github.com/Sumit12312299" target="_blank" rel="noreferrer" className="info-item">
                <div className="info-icon"><Github size={20} /></div>
                <div>
                  <h4>GitHub</h4>
                  <span>github.com/Sumit12312299</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" placeholder="Your message..." required></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send size={18} />}
            </button>

            {submitStatus === 'success' && (
              <motion.div 
                className="status-msg success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 size={18} />
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                className="status-msg error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={18} />
                Something went wrong. Please try again or email me directly.
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
