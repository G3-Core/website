import React, { useRef, useEffect } from 'react';

const InteractiveParticleBackground = ({
  particleCount = 100,
  colors = ['#3b82f6', '#8b5cf6', '#ec4899'],
  speed = 1,
  interactive = true,
  minSize = 1,
  maxSize = 5
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const animationFrameRef = useRef(null);
  
  // Função para criar uma partícula
  const createParticle = (width, height) => {
    const size = Math.random() * (maxSize - minSize) + minSize;
    const x = Math.random() * width;
    const y = Math.random() * height;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    const directionX = (Math.random() - 0.5) * speed;
    const directionY = (Math.random() - 0.5) * speed;
    
    return {
      x,
      y,
      size,
      color,
      directionX,
      directionY,
      originalX: x,
      originalY: y
    };
  };
  
  // Função para desenhar as partículas
  const drawParticles = (ctx, particles, width, height) => {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Atualizar posição
      particle.x += particle.directionX;
      particle.y += particle.directionY;
      
      // Colisão com bordas
      if (particle.x > width || particle.x < 0) {
        particle.directionX = -particle.directionX;
      }
      
      if (particle.y > height || particle.y < 0) {
        particle.directionY = -particle.directionY;
      }
      
      // Interação com o mouse se ativada
      if (interactive) {
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRef.current.radius) {
          const forceFactor = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          const forceDirectionX = dx / distance || 0;
          const forceDirectionY = dy / distance || 0;
          
          // Aplicar força repulsiva ao mouse
          particle.x += forceDirectionX * forceFactor * 4;
          particle.y += forceDirectionY * forceFactor * 4;
        }
        
        // Tendência a voltar à posição original (efeito mola)
        const homeX = particle.originalX - particle.x;
        const homeY = particle.originalY - particle.y;
        
        particle.x += homeX * 0.01;
        particle.y += homeY * 0.01;
      }
    });
    
    // Desenhar linhas entre partículas próximas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(150, 150, 150, ${0.2 * (1 - distance / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  };
  
  // Configuração e animação
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;
    
    const handleResize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      
      // Recriar partículas quando o tamanho muda
      particlesRef.current = Array.from({ length: particleCount }, () => 
        createParticle(canvas.width, canvas.height)
      );
    };
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouseRef.current.x = undefined;
      mouseRef.current.y = undefined;
    };
    
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    handleResize();
    
    const ctx = canvas.getContext('2d');
    
    const animate = () => {
      drawParticles(ctx, particlesRef.current, canvas.width, canvas.height);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [colors, interactive, maxSize, minSize, particleCount, speed]);
  
  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0"
        style={{ pointerEvents: interactive ? 'auto' : 'none' }}
      />
    </div>
  );
};

export default InteractiveParticleBackground; 