import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Companies from './components/Companies';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import { useCursorEffect } from './hooks/useCursorEffect';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import TechStack from './components/TechStack';
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  
  // Initialize cursor effect
  useCursorEffect(darkMode);
  
  // Initialize scroll animations
  useScrollAnimation();

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Scroll Mouse Cursor Indicator */}
      <div
        className="fixed right-6 top-1/2 z-50 hidden md:flex flex-col items-center select-none cursor-pointer"
        style={{transform: 'translateY(-50%)'}}
        onClick={() => {
          const el = document.getElementById('about');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      >
        <div className="w-7 h-14 rounded-full border-2 border-gray-400 dark:border-gray-600 flex flex-col items-center justify-start relative bg-white/80 dark:bg-gray-900/80 shadow-lg overflow-hidden">
          <div className="absolute left-1/2 top-2 -translate-x-1/2">
            <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-scroll-wheel"></div>
          </div>
        </div>
        <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 tracking-wide animate-pulse">Scroll Down</span>
      </div>
      <style>{`
        @keyframes scroll-wheel {
          0% { opacity: 1; transform: translateY(0); }
          70% { opacity: 1; }
          100% { opacity: 0; transform: translateY(32px); }
        }
        .animate-scroll-wheel {
          animation: scroll-wheel 1.4s cubic-bezier(0.4,0,0.2,1) infinite;
        }
      `}</style>
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <div data-animate>
                  <Hero />
                </div>
                <Marquee />
                <div data-animate>
                  <About />
                </div>
                <div data-animate>
                  <TechStack />
                </div>
                <div data-animate>
                  <Projects />
                </div>
                <div data-animate>
                  <Companies />
                </div>
              </main>
            }
          />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/contact" element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;