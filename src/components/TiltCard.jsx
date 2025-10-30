/**
 * 🎨 3D TILT CARD COMPONENT
 * 
 * A card that tilts based on mouse position - creates a premium 3D effect
 * Perfect for: Feature cards, pricing cards, testimonials
 * 
 * Usage:
 * <TiltCard>
 *   <YourContent />
 * </TiltCard>
 * 
 * Customization:
 * - Adjust maxTilt for more/less tilt (default: 10deg)
 * - Change perspective for depth effect
 */

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const TiltCard = ({ 
  children, 
  className = '', 
  maxTilt = 10,
  scale = 1.05,
  ...props 
}) => {
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      transition: 'transform 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.5s ease-out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        ...tiltStyle,
      }}
      className={`${className}`}
      {...props}
    >
      <div style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </div>
  );
};

