import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const GradientOrb = ({ 
  position = [0, 0], 
  size = 300, 
  colors = ['#3b82f6', '#8b5cf6'],
  animationDuration = 20, 
  blurAmount = 70,
  opacity = 0.3,
  animationPath = { x: 100, y: 50 }
}) => {
  const pathVariants = {
    move: {
      x: [
        position[0] - animationPath.x/2, 
        position[0] + animationPath.x/2, 
        position[0] - animationPath.x/2
      ],
      y: [
        position[1] - animationPath.y/2, 
        position[1] + animationPath.y/2, 
        position[1] - animationPath.y/2
      ],
    }
  };
  
  const rotateVariants = {
    rotate: {
      rotate: [0, 360],
    }
  };
  
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ 
        left: position[0], 
        top: position[1],
        width: size, 
        height: size,
        filter: `blur(${blurAmount}px)`,
        opacity,
        background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 100%)`,
        transform: 'translate(-50%, -50%)'
      }}
      variants={pathVariants}
      animate="move"
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
    >
      <motion.div 
        className="w-full h-full"
        variants={rotateVariants}
        animate="rotate"
        transition={{
          duration: animationDuration * 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </motion.div>
  );
};

const AnimatedGradientOrbs = ({ 
  count = 3, 
  colors = [
    ['#3b82f6', '#60a5fa'], 
    ['#8b5cf6', '#a78bfa'], 
    ['#ec4899', '#f472b6'],
    ['#06b6d4', '#67e8f9']
  ],
  minSize = 200,
  maxSize = 500,
  minBlur = 50,
  maxBlur = 100,
  minOpacity = 0.2,
  maxOpacity = 0.5,
  minDuration = 15,
  maxDuration = 30
}) => {
  const containerRef = useRef(null);
  const orbsConfig = useRef([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Configuração dos orbes
    const { offsetWidth, offsetHeight } = containerRef.current;
    
    orbsConfig.current = Array.from({ length: count }, (_, i) => {
      const posX = Math.random() * offsetWidth;
      const posY = Math.random() * offsetHeight;
      const size = Math.random() * (maxSize - minSize) + minSize;
      const blur = Math.random() * (maxBlur - minBlur) + minBlur;
      const opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
      const duration = Math.random() * (maxDuration - minDuration) + minDuration;
      const colorPair = colors[i % colors.length];
      const animX = offsetWidth * 0.2;
      const animY = offsetHeight * 0.2;
      
      return {
        position: [posX, posY],
        size,
        colors: colorPair,
        blurAmount: blur,
        opacity,
        animationDuration: duration,
        animationPath: { x: animX, y: animY }
      };
    });
  }, [count, colors, minSize, maxSize, minBlur, maxBlur, minOpacity, maxOpacity, minDuration, maxDuration]);
  
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {orbsConfig.current.map((config, index) => (
        <GradientOrb key={index} {...config} />
      ))}
    </div>
  );
};

export default AnimatedGradientOrbs; 