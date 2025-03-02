import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useApp } from '../contexts/AppContext';

const ThemeLanguageToggle = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useApp();

  return (
    <div className="flex items-center space-x-4">
      {/* Botão de Tema */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-white/10 backdrop-blur-md dark:bg-black border dark:border-neon-primary hover:bg-white/20 dark:hover:bg-black/80 transition-colors"
        aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
      >
        {theme === 'light' ? (
          <MoonIcon className="w-5 h-5 text-gray-900" />
        ) : (
          <SunIcon className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
        )}
      </button>

      {/* Botão de Idioma */}
      <button
        onClick={toggleLanguage}
        className="flex items-center justify-center w-10 h-7 rounded-lg overflow-hidden hover:opacity-80 transition-opacity border dark:border-neon-primary dark:shadow-[0_0_10px_rgba(0,191,255,0.3)]"
        aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      >
        <img
          src={language === 'en' ? '/us-flag.svg' : '/br-flag.svg'}
          alt={language === 'en' ? 'English' : 'Português'}
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default ThemeLanguageToggle; 