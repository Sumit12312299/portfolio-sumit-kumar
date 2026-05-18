import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Magnetic>
          <a href="#home" className="logo">
            SKY<span className="accent">.</span>
          </a>
        </Magnetic>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#certificates" onClick={closeMenu}>Certificates</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#resume" onClick={closeMenu}>Resume</a>
          <Magnetic>
            <a href="#contact" className="contact-btn" onClick={closeMenu}>Contact</a>
          </Magnetic>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
