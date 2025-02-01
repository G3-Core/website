import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useApp } from '../contexts/AppContext';

const ThemeLanguageToggle = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useApp();

  return (
    <div className="flex items-center space-x-4">
      {/* Botão de Tema */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-100 dark:bg-dark-paper hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
      >
        {theme === 'light' ? (
          <MoonIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <SunIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        )}
      </button>

      {/* Botão de Idioma */}
      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
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