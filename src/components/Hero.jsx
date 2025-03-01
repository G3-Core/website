import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import { 
  LightBulbIcon,
  CheckBadgeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Hero = () => {
  const { t } = useApp();

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
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-dark dark:to-dark-light z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/5 dark:bg-secondary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 rounded-full">
              {t.hero.badge || "Tecnologia inovadora"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.hero.title}{' '}
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                {t.hero.highlight}
              </span>
            </h1>
            <p className="text-gray-600 dark:text-dark-text-secondary text-lg mb-8">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg shadow-primary/20"
              >
                {t.hero.cta}
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white dark:bg-dark-light border-2 border-primary text-primary dark:text-primary-light rounded-xl font-medium transition-all duration-300 hover:shadow-lg shadow-primary/10"
              >
                {t.hero.secondary}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/hero-image.svg"
                alt="Web Development"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl transform rotate-6 -z-10" />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full filter blur-xl z-0"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.9, 0.7] 
              }} 
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }} 
            />
          </motion.div>
        </div>

        {/* Valores da Empresa */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
        >
          {values.map((valor, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className="p-8 bg-white/80 dark:bg-dark-light/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl border border-gray-100 dark:border-dark-light transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-xl p-3 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                <valor.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-4">
                {valor.title}
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                {valor.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 