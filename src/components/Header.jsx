import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useApp } from '../contexts/AppContext';
import logo from '../assets/G3_logo.png';
import ThemeLanguageToggle from './ThemeLanguageToggle';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useApp();

  const menuItems = [
    { title: t.nav.home, to: 'home' },
    { title: t.nav.about, to: 'about' },
    { title: t.nav.services, to: 'services' },
    { title: t.nav.portfolio, to: 'portfolio' },
    { title: t.nav.contact, to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  // Função para rolar até o topo com animação suave
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'py-3 bg-white/80 dark:bg-black/80 shadow-lg backdrop-blur-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo com redirecionamento para o topo */}
        <div 
          onClick={scrollToTop} 
          className="cursor-pointer"
          role="button"
          aria-label="Voltar ao topo"
        >
          <Logo />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={400}
              easing="easeInOutCubic"
              className="px-4 py-2 text-gray-700 dark:text-white hover:text-primary dark:hover:text-neon-primary transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-black/50"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Theme and Language Toggle */}
          <ThemeLanguageToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-black/70 transition-colors duration-300 border dark:border-neon-primary/50 z-50"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-xl border-t border-gray-200 dark:border-neon-primary/20"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-1">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={400}
                    easing="easeInOutCubic"
                    className="px-4 py-3 text-gray-700 dark:text-white hover:text-primary dark:hover:text-neon-primary transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-black/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 