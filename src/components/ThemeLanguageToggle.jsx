import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useApp } from '../contexts/AppContext';

const ThemeLanguageToggle = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useApp();

  return (
    <div className="flex items-center space-x-4">
      {/* Botão de Tema */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-white/10 backdrop-blur-md dark:bg-dark-light/50 hover:bg-white/20 dark:hover:bg-dark-light/70 transition-colors"
        aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
      >
        {theme === 'light' ? (
          <MoonIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
        ) : (
          <SunIcon className="w-5 h-5 text-gray-900 dark:text-gray-100" />
        )}
      </button>

      {/* Botão de Idioma */}
      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center w-10 h-7 rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
        aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      >
        <img
          src={language === 'pt' ? '/us-flag.svg' : '/br-flag.svg'}
          alt={language === 'pt' ? 'English' : 'Português'}
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default ThemeLanguageToggle; 