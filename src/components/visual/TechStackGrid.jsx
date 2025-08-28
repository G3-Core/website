import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../contexts/AppContext';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiJavascript } from 'react-icons/si';
import threejs from '../../../public/icons/threejs.svg'
import materialui from '../../../public/icons/materialui.svg'

const ThreeJS = () => {
  return (
    <img src={threejs} alt="Three JS" width={40} height={40} className="dark:invert"/>
  );
};

const MaterialUI = () => {
  return (
    <img
      src={materialui}
      alt="Material UI"
      width={25}
      height={25}
      className="dark:invert"
    />
  );
};

// Componente principal para o grid de tecnologias
const TechStackGrid = () => {
  const { t, theme, language } = useApp();
  const [activeFilter, setActiveFilter] = useState(language === 'pt' ? 'Todos' : 'All');
  const isDarkTheme = theme === 'dark';
  
  // Atualizar filtro ativo quando o idioma mudar
  useEffect(() => {
    setActiveFilter(language === 'pt' ? 'Todos' : 'All');
  }, [language]);
  
  const techIcons = {
    'React': <FaReact className="w-10 h-10 text-gray-900 dark:text-white" />,
    'Node.js': <FaNodeJs className="w-10 h-10 text-gray-900 dark:text-white" />,
    'TypeScript': <SiTypescript className="w-10 h-10 text-gray-900 dark:text-white" />,
    'Next.js': <SiNextdotjs className="w-10 h-10 text-gray-900 dark:text-white" />,
    'Three.js': <ThreeJS />,
    'Tailwind CSS': <SiTailwindcss className="w-10 h-10 text-gray-900 dark:text-white" />,
    'Material UI': <MaterialUI />,
    'Firebase': <SiFirebase className="w-10 h-10 text-gray-900 dark:text-white" />,
    'MongoDB': <SiMongodb className="w-10 h-10 text-gray-900 dark:text-white" />,
    'MySQL': <SiMysql className="w-10 h-10 text-gray-900 dark:text-white" />,
    'JavaScript': <SiJavascript className="w-10 h-10 text-gray-900 dark:text-white" />,
    'HTML5': <FaHtml5 className="w-10 h-10 text-gray-900 dark:text-white" />,
    'CSS3': <FaCss3Alt className="w-10 h-10 text-gray-900 dark:text-white" />,
  };

  const techDescriptions = {
    'React': t.about.techEvolution.grid.react,
    'Node.js': t.about.techEvolution.grid.nodejs,
    'TypeScript': t.about.techEvolution.grid.typescript,
    'Next.js': t.about.techEvolution.grid.nextjs,
    'Three.js': t.about.techEvolution.grid.threejs,
    'Tailwind CSS': t.about.techEvolution.grid.tailwindcss,
    'Material UI': t.about.techEvolution.grid.materialui,
    'Firebase': t.about.techEvolution.grid.firebase,
    'MongoDB': t.about.techEvolution.grid.mongodb,
    'MySQL': t.about.techEvolution.grid.mysql,
    'WordPress': t.about.techEvolution.grid.wordpress,
    'JavaScript': t.about.techEvolution.grid.javascript,
    'HTML5': t.about.techEvolution.grid.html5,
    'CSS3': t.about.techEvolution.grid.css3
  };
  
  // Categorias das tecnologias baseadas no idioma
  const techCategories = {
    'React': 'Frontend',
    'Node.js': 'Backend',
    'TypeScript': language === 'pt' ? 'Linguagens' : 'Languages',
    'Next.js': 'Frontend',
    'Three.js': 'Frontend',
    'Tailwind CSS': 'CSS',
    'Material UI': 'UI',
    'Firebase': 'Backend',
    'MongoDB': 'Database',
    'MySQL': 'Database',
    'WordPress': 'CMS',
    'PHP': 'Backend',
    'JavaScript': language === 'pt' ? 'Linguagens' : 'Languages',
    'HTML5': 'Frontend',
    'CSS3': 'CSS',
  };
  
  // Lista de filtros disponíveis baseada no idioma
  const filters = [
    language === 'pt' ? 'Todos' : 'All',
    'Frontend', 
    'Backend', 
    'Database', 
    'UI', 
    'CSS', 
    language === 'pt' ? 'Linguagens' : 'Languages',
    'CMS'
  ];
  
  // Tecnologias a serem exibidas
  const technologies = Object.keys(techIcons);
  
  // Filtragem das tecnologias com base no filtro ativo
  const filteredTechnologies = (activeFilter === 'Todos' || activeFilter === 'All')
    ? technologies
    : technologies.filter(tech => techCategories[tech] === activeFilter);

  // Componente para cada card de tecnologia
  const TechCard = ({ name, icon, description }) => {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={!isMobile ? { 
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
          y: -5
        } : {}}
        transition={{ duration: 0.3 }}
        className={`bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-neon-primary/30 p-5 flex flex-col items-center overflow-hidden cursor-pointer ${
          isActive ? 'ring-2 ring-primary dark:ring-neon-primary' : ''
        }`}
        onHoverStart={() => !isMobile && setIsActive(true)}
        onHoverEnd={() => !isMobile && setIsActive(false)}
        onClick={() => isMobile && setIsActive(!isActive)}
      >
        <div className="relative w-16 h-16 mb-4 flex items-center justify-center text-gray-900 dark:text-white">
         {icon}
          <motion.div 
            className="absolute inset-0 rounded-full bg-primary/10 dark:bg-neon-primary/10"
            initial={{ scale: 0 }}
            animate={{ scale: isActive ? 1.2 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <h3 className="text-lg font-bold text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text mb-2">
          {name}
        </h3>
        
        {description && (
          <motion.p 
            className="text-gray-600 dark:text-gray-300 text-center text-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              height: isActive ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    );
  };

  // Filtros para categorias de tecnologias
  const TechFilter = ({ filters, activeFilter, onFilterChange }) => {
    return (
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters.map(filter => (
          <motion.button
            key={filter}
            onClick={() => onFilterChange(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-primary text-white dark:bg-neon-primary dark:text-black'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>
    );
  };
  
  return (
    <div className="w-full">
      <TechFilter 
        filters={filters} 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredTechnologies.map(tech => (
          <TechCard
            key={tech}
            name={tech}
            icon={techIcons[tech]}
            description={techDescriptions[tech]}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackGrid; 