import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';

const Hero = () => {
  const { t } = useApp();

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-dark dark:to-dark-light">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
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
              <button className="btn-primary">
                {t.hero.cta}
              </button>
              <button className="px-6 py-3 border-2 border-primary text-primary dark:text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300">
                {t.hero.secondary}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
          </motion.div>
        </div>

        {/* Valores da Empresa */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              title: t.hero.values.innovation.title,
              text: t.hero.values.innovation.text,
            },
            {
              title: t.hero.values.quality.title,
              text: t.hero.values.quality.text,
            },
            {
              title: t.hero.values.ethics.title,
              text: t.hero.values.ethics.text,
            },
          ].map((valor, index) => (
            <div key={index} className="p-6 bg-white dark:bg-dark-light rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-3">
                {valor.title}
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                {valor.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 