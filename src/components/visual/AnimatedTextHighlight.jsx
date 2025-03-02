import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedTextHighlight = ({
  text,
  duration = 4,
  colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#3b82f6']
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const style = textRef.current.style;
    style.backgroundImage = `linear-gradient(90deg, ${colors.join(', ')})`;
    style.backgroundSize = '300% 100%';
    style.backgroundClip = 'text';
    style.WebkitBackgroundClip = 'text';
    style.color = 'transparent';
    style.WebkitTextFillColor = 'transparent';

    let start = null;
    let animationId = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / (duration * 1000);
      const position = (progress * 200) % 200;

      style.backgroundPosition = `${position}% 0%`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [colors, duration]);

  // Separa o texto por palavras em vez de letras
  const words = text.split(' ');

  return (
    <span 
      className="inline-block font-bold relative whitespace-normal break-words"
      ref={textRef}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {[...word].map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              initial={{ y: '0.25em', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.05 * (wordIndex * word.length + letterIndex),
                ease: [0.2, 0.65, 0.3, 0.9]
              }}
              className="inline"
            >
              {letter}
            </motion.span>
          ))}
          {'\u00A0'}
        </span>
      ))}

      {/* Efeito de brilho que se move pelo texto */}
      <motion.span
        className="absolute block top-0 bottom-0 w-[50px] -z-10 opacity-70 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
          filter: 'blur(8px)'
        }}
        animate={{
          left: ['-50px', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut'
        }}
      />
    </span>
  );
};

export default AnimatedTextHighlight;
