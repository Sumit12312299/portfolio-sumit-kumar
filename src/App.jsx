import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <BackToTop />
    </div>

  );
}

export default App;
