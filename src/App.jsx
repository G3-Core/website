import { useState, useEffect } from 'react';
import { AppProvider } from './contexts/AppContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeLanguageToggle from './components/ThemeLanguageToggle'
import { motion, AnimatePresence } from 'framer-motion';

import './App.css';

// Componente de cursor animado personalizado
const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const checkHoverElements = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      const isHovering = hoveredElement?.closest('a, button, [role="button"], [role="link"]');
      setIsPointer(!!isHovering);
    };

    window.addEventListener('mousemove', mouseMove);
    
    const interval = setInterval(checkHoverElements, 100);
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      clearInterval(interval);
    };
  }, [mousePosition]);

  // Não renderizar durante SSR ou em dispositivos móveis
  if (!isMounted || (typeof window !== 'undefined' && window.innerWidth <= 768)) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'var(--color-primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.7,
          mixBlendMode: 'difference',
          boxShadow: 'var(--cursor-shadow, 0 0 0 rgba(0,0,0,0))',
          '--cursor-shadow': 'var(--dark-mode) ? 0 0 10px var(--color-neon-glow) : none'
        }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 100, mass: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid var(--color-primary)',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference',
          boxShadow: 'var(--cursor-ring-shadow, 0 0 0 rgba(0,0,0,0))',
          '--cursor-ring-shadow': 'var(--dark-mode) ? 0 0 15px var(--color-neon-glow) : none'
        }}
      />
    </>
  );
};

// Componente de preloader
const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="w-16 h-16 mb-4 border-4 border-primary dark:border-neon-primary dark:border-opacity-80 border-t-transparent rounded-full dark:neon-border"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="text-lg font-medium bg-gradient-to-r from-primary to-secondary dark:from-neon-primary dark:to-neon-secondary text-transparent bg-clip-text dark:neon-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          G3 Tech
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // Efeito para simular carregamento e ativar as animações de scroll reveal
  useEffect(() => {
    // Simular tempo de carregamento
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const handleScroll = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        } else {
          element.classList.remove('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Ativar para elementos já visíveis no carregamento inicial
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Efeito para aplicar classe dark-bg ao body quando em tema escuro
  useEffect(() => {
    // Verificar se o tema escuro está ativo através da classe 'dark' no documentElement
    const isDarkTheme = document.documentElement.classList.contains('dark');
    
    if (isDarkTheme) {
      document.body.style.backgroundColor = '#000000';
    } else {
      document.body.style.backgroundColor = '';
    }
    
    // Observar mudanças na classe 'dark' do documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          document.body.style.backgroundColor = isDark ? '#000000' : '';
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AppProvider>
      <div className="font-poppins dark:bg-black dark:text-dark-text-primary">
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>
        
        <AnimatedCursor />
        <div className="flex justify-center">
          <Header />
        </div>
        <main className="dark:bg-black">
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App
