import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import {
  LightBulbIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import TechScene from './3d/TechScene';
import InteractiveParticleBackground from './visual/InteractiveParticleBackground';
import AnimatedGradientOrbs from './visual/AnimatedGradientOrbs';
import AnimatedTextHighlight from './visual/AnimatedTextHighlight';

const Hero = () => {
  const { t } = useApp();
  const [mounted, setMounted] = useState(false);
  const [has3DError, setHas3DError] = useState(false);

  // Montagem tardia para evitar problemas de SSR com Three.js
  useEffect(() => {
    setMounted(true);

    // Adicionar tratamento de erro global para problemas de Three.js
    const handleError = (event) => {
      const errorText = event.message || '';
      // Verificar se o erro está relacionado ao Three.js ou React Three Fiber
      if (errorText.includes('three') || errorText.includes('fiber') || errorText.includes('Cannot read properties')) {
        console.error('Erro na cena 3D, carregando fallback:', event);
        setHas3DError(true);
      }
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  const values = [
    {
      icon: LightBulbIcon,
      title: t.hero.values.innovation.title,
      text: t.hero.values.innovation.text,
    },
    {
      icon: CheckBadgeIcon,
      title: t.hero.values.quality.title,
      text: t.hero.values.quality.text,
    },
    {
      icon: ShieldCheckIcon,
      title: t.hero.values.ethics.title,
      text: t.hero.values.ethics.text,
    },
  ];

  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      {/* Novos elementos de background interativos */}
      <div className="absolute inset-0 z-0">
        <InteractiveParticleBackground
          particleCount={50}
          colors={['#3b82f6', '#8b5cf6', '#ec4899']}
          speed={1.5}
          interactive={true}
          minSize={2}
          maxSize={6}
        />
      </div>

      <div className="absolute inset-0 z-0 opacity-60">
        <AnimatedGradientOrbs
          count={4}
          colors={[
            ['#3b82f6', '#60a5fa'],
            ['#8b5cf6', '#a78bfa'],
            ['#ec4899', '#f472b6'],
            ['#06b6d4', '#67e8f9']
          ]}
          minOpacity={0.15}
          maxOpacity={0.35}
        />
      </div>

      <div className="container relative z-10 -mt-[80px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary dark:text-neon-primary bg-primary/10 dark:bg-dark-bg-light/50 rounded-full backdrop-blur-sm dark:neon-text whitespace-nowrap">
              {t.hero.badge || "Tecnologia inovadora"}
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text">
              <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-tight lg:leading-tight">
                <div className="flex items-center">
                  <StarIcon className="flex-shrink-0 w-10 h-10 mr-2 text-primary dark:text-neon-primary" />
                  <span>
                    {t.hero.title}{' '}
                    <AnimatedTextHighlight
                      text={t.hero.highlight}
                      duration={4}
                      colors={['#3b82f6', '#8b5cf6', '#ec4899']}
                    />
                  </span>
                </div>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-dark-text-secondary mb-8 backdrop-blur-sm bg-white/20 dark:bg-dark-bg-light/20 p-4 rounded-xl">
              {t.hero.description || t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn-primary dark:bg-neon-primary dark:text-dark-bg dark:border-neon-primary dark:neon-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ marginTop: "-10px" }}  // Ajuste esse valor conforme necessário
              >
                {t.hero.cta || t.hero.primaryButton}
              </motion.a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-80 md:h-[500px] rounded-lg overflow-hidden dark:neon-border"
          >
            {mounted && !has3DError ? (
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-dark-bg-light/10 rounded-lg">
                  <div className="animate-pulse text-primary dark:text-neon-primary dark:neon-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
              }>
                <TechScene />
              </Suspense>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-dark-bg-light/10 rounded-lg">
                {has3DError ? (
                  <div className="text-center p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-primary dark:text-neon-primary dark:neon-text mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-600 dark:text-dark-text-secondary">{t.hero.tech3dError || "Visualização 3D não disponível"}</p>
                  </div>
                ) : (
                  <div className="animate-pulse text-primary dark:text-neon-primary dark:neon-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* Valores da empresa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-3 gap-6 mt-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
                className: "dark:neon-border"
              }}
              className="bg-white dark:bg-dark-bg-light/20 rounded-lg p-6 shadow-md backdrop-blur-md bg-opacity-80 dark:bg-opacity-20 border border-transparent dark:border-dark-bg-light/30"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-neon-primary/10 rounded-lg flex items-center justify-center self-center">
                  <value.icon className="w-6 h-6 text-primary dark:text-neon-primary dark:neon-text" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 dark:text-neon-primary dark:neon-text">{value.title}</h3>
                  <p className="text-gray-600 dark:text-dark-text-secondary">{value.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Componente de fallback caso a cena 3D não carregue
const FallbackImage = () => (
  <div className="w-full h-full min-h-[400px] flex items-center justify-center">
    <img
      src="/hero-image.svg"
      alt="Web Development"
      className="w-full h-auto"
    />
  </div>
);

// Error Boundary para capturar erros no componente 3D
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error na cena 3D:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default Hero; 