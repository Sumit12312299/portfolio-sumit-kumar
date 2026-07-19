# Sumit Kumar's Portfolio 🚀

A premium, interactive, and fully responsive personal portfolio website built with **React**, **Vite**, and **Vanilla CSS**. This portfolio showcases projects, a technical arsenal, education, certificates, achievements, and features high-fidelity micro-interactions (magnetic components, smooth scroll, custom cursor, tilt cards) alongside an intelligent **Chatbot interface**.

---

## 🌟 Key Features

1. **Intelligent Chatbot**: A custom-designed, stateful AI chat interface allowing visitors to interact, ask questions about my profile, resume, projects, and get instant answers.
2. **Smooth Inertial Scroll (Lenis)**: Implements ultra-smooth scroll kinematics across all browsers and devices for a fluid user experience.
3. **Advanced Framer Motion Animations**:
   - **Magnetic Hover Effects**: Interactive elements (social icons, CTA buttons) pull toward the user's cursor dynamically.
   - **Tilt Cards**: Interactive 3D tilt effects on project cards powered by custom hover physics.
   - **Text Staggering & Fade-ins**: Elegant page-load sequences and scroll-triggered animations.
4. **Bespoke Custom Cursor**: A custom reactive cursor that follows the mouse path, adapting size and styling on hover states.
5. **Interactive Resume & Certificates**: Dedicated sections showing educational history, verified certificates with modular previews, and downloadable resume functionality.
6. **Robust Project Showcases**: Modern layout displaying highlights first, with a collapsible "See More Projects" grid.

---

## 🛠️ Technical Arsenal

The project is built using a modern, performant web tech stack:

* **Core Framework**: React 19 (Functional Components & Hooks)
* **Build System**: Vite 8 (Hot Module Replacement, ultra-fast builds)
* **Styling & Theme**: Vanilla CSS (Tailwind-free for granular control, custom variables, responsive grid & flexbox systems)
* **Animation Libraries**: Framer Motion 12
* **Smooth Scrolling**: Lenis Scroll v1.3
* **Iconography**: Lucide React
* **Hosting / Deployment Ready**: Vercel & Render configuration

---

## 📂 Project Structure

Here is a breakdown of how the repository is structured:

```text
mango/
├── dist/                     # Optimized production bundle
├── public/                   # Static assets (images, profile pictures, resume)
├── src/
│   ├── components/           # Modular UI Components and local stylesheets
│   │   ├── About.jsx/.css          # Education history and profile intro
│   │   ├── Achievements.jsx/.css   # Milestone timeline (GFG, LeetCode, Dean's List)
│   │   ├── BackToTop.jsx/.css      # Reactive scroll-to-top component
│   │   ├── Certificates.jsx/.css   # Professional certificates slider/viewer
│   │   ├── Chatbot.jsx/.css        # Large-scale chat assistant interface
│   │   ├── Contact.jsx/.css        # Contact form with social connections
│   │   ├── CustomCursor.jsx        # Mouse follower cursor script
│   │   ├── Hero.jsx/.css           # Interactive splash landing screen
│   │   ├── Magnetic.jsx            # Framer-motion magnetic attraction wrapper
│   │   ├── Navbar.jsx/.css         # Sticky navigation with active indicator
│   │   ├── Projects.jsx/.css       # Expandable grid of project cards
│   │   ├── Resume.jsx/.css         # Professional resume showcase & details
│   │   ├── Skills.jsx/.css         # Tech stack grid categorized by type
│   │   └── TiltCard.jsx            # Custom 3D mouse tilt card wrapper
│   ├── App.jsx               # Lenis setup and main layout entry
│   ├── index.css             # Main styling system, CSS variables, typography
│   └── main.jsx              # React mounting script
├── index.html                # HTML document entry
├── package.json              # Script tasks and node packages
└── vite.config.js            # Vite build configuration
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio website locally on your system.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/Sumit12312299/portfolio-sumit-kumar.git
cd portfolio-sumit-kumar
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To generate a production-ready build:
```bash
npm run build
```
This generates optimized HTML, JS, and CSS files in the `dist` directory.

---

## 📈 Featured Projects Included

* **PDFCraft**: A client-side PDF utility suite running entirely in-browser using PDF.js.
* **CinePro**: Movie exploration portal pulling real-time data from the TMDB API.
* **AI Resume Analyzer**: Career-suite evaluator comparing resumes against JD metrics using Google Gemini AI.
* **Expenz**: MongoDB-Express-React-Node (MERN) finance tracking dashboard.
* **YouTuba**: Video browsing app replicating YouTube functionalities.
* **E-Commerce Platform**: Scalable shopping site with user auth and Stripe payments.
* **Parking Management System**: Data structures and OOP-based parking dashboard built in C++.

---

## 🏆 Key Achievements Highlighted

* 🥇 **Dean's List Placement** (Top 10% Academic Ranking at LPU, 2024)
* 🏆 **WebFest Hackathon Winner** (Led team of 4 to design & build AI responsive web app in 48 hours)
* 💻 **150+ LeetCode Solved & 50-Day Coding Streak**
* 🎓 **GFG Interview Prep Top Performer**

---

## ✉️ Connect with Me

* **GitHub**: [@Sumit12312299](https://github.com/Sumit12312299)
* **LinkedIn**: [Sumit Kumar](https://www.linkedin.com/in/sumit-kumar-t88)
* **Email**: [sumitkr4364@gmail.com](mailto:sumitkr4364@gmail.com)

---
*Created with ❤️ by Sumit Kumar*