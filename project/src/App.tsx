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
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <div data-animate>
          <Hero />
        </div>
        
        <Marquee />
        
        <div data-animate>
          <About />
        </div>
        
        <div data-animate>
          <Projects />
        </div>
        
        <div data-animate>
          <Companies />
        </div>
        
        <div data-animate>
          <CTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;