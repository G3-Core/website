import { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Início', to: 'home' },
    { title: 'Serviços', to: 'services' },
    { title: 'Sobre', to: 'about' },
    { title: 'Contato', to: 'contact' },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
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
              className="font-medium text-dark hover:text-primary cursor-pointer transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <button className="btn-primary">
            Solicitar Orçamento
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
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
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t">
          <div className="container py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="font-medium text-dark hover:text-primary cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <button className="btn-primary w-full">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 