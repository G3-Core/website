import { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useApp } from '../contexts/AppContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useApp();

  const menuItems = [
    { title: t.nav.home, to: 'home' },
    { title: t.nav.services, to: 'services' },
    { title: t.nav.about, to: 'about' },
    { title: t.nav.contact, to: 'contact' },
  ];

  return (
    <header className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container flex items-center justify-between h-20">
        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          G3 Tech
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="font-medium text-gray-900 dark:text-dark-text-primary hover:text-primary dark:hover:text-primary cursor-pointer transition-colors relative group"
            >
              <span className="absolute -top-[32px] left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              {item.title}
            </Link>
          ))}
          <button className="btn-primary">
            {t.nav.cta}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 dark:text-dark-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-dark border-t dark:border-gray-800">
          <div className="container py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="font-medium text-gray-900 dark:text-dark-text-primary hover:text-primary dark:hover:text-primary cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <button className="btn-primary w-full">
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 