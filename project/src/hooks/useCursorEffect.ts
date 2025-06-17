import { useEffect, useCallback } from 'react';

interface Star {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  element: HTMLElement;
}

export const useCursorEffect = (darkMode: boolean) => {
  const createStar = useCallback((x: number, y: number): Star => {
    const star = document.createElement('div');
    star.className = 'cursor-star';
    star.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: ${darkMode ? '#00FFDE' : '#00CFFF'};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.3s ease;
      box-shadow: 0 0 6px ${darkMode ? '#00FFDE' : '#00CFFF'};
    `;
    document.body.appendChild(star);

    return {
      x,
      y,
      opacity: 1,
      scale: 1,
      element: star
    };
  }, [darkMode]);

  const updateStar = useCallback((star: Star, targetX: number, targetY: number) => {
    star.x += (targetX - star.x) * 0.1;
    star.y += (targetY - star.y) * 0.1;
    star.opacity *= 0.95;
    star.scale *= 0.98;

    star.element.style.left = `${star.x}px`;
    star.element.style.top = `${star.y}px`;
    star.element.style.opacity = star.opacity.toString();
    star.element.style.transform = `scale(${star.scale})`;

    if (star.opacity < 0.1) {
      star.element.remove();
      return false;
    }
    return true;
  }, []);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    if (!supportsHover) return;

    let stars: Star[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Create new star every few pixels of movement
      if (Math.random() > 0.7) {
        const newStar = createStar(mouseX, mouseY);
        stars.push(newStar);
      }
    };

    const animate = () => {
      stars = stars.filter(star => updateStar(star, mouseX, mouseY));
      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      
      // Clean up remaining stars
      stars.forEach(star => star.element.remove());
      
      // Clean up any remaining star elements
      const remainingStars = document.querySelectorAll('.cursor-star');
      remainingStars.forEach(star => star.remove());
    };
  }, [createStar, updateStar]);
};