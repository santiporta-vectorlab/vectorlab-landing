import React, { useState, useEffect } from 'react';

interface HoverDecryptProps {
  text: string;
}

const HoverDecrypt: React.FC<HoverDecryptProps> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState('');
  
  // Fake hash string of the exact length of the original text
  const fakeHash = "a3f9b1c8e2d4a7f0b5c1d9e3f8a2b4c6e9d2f1a0".substring(0, text.length);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(fakeHash);
      return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(text.split('').map((_, index) => {
        if (index < iteration) {
          return text[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2; // Decrypt 1 character every 2 intervals for a smooth matrix effect
    }, 20);

    return () => clearInterval(interval);
  }, [isHovered, text, fakeHash]);

  return (
    <span 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-crosshair transition-colors duration-300 ${!isHovered ? 'text-emerald-500 font-mono text-4xl md:text-5xl tracking-widest' : 'text-white font-sans text-5xl md:text-6xl tracking-tight'}`}
      style={{ display: 'inline-block', minHeight: '1.2em' }}
    >
      {displayText || fakeHash}
    </span>
  );
};

export default HoverDecrypt;
