import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Add animation classes to elements
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((element) => {
      element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};