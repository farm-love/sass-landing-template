import { useState, useEffect } from 'react';

export const useCounter = (end, duration = 2000, start = 0, inView = false) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = start + (end - start) * easeOutQuad(progress);
      
      setCount(Math.floor(currentCount));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, inView]);

  return count;
};

