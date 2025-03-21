import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import {
  CodeBracketIcon,
  GlobeAltIcon,
  SparklesIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const { t } = useApp();

  const services = [
    {
      icon: GlobeAltIcon,
      title: t.services.web.title,
      description: t.services.web.description,
      color: "from-blue-500 to-cyan-400",
      darkColor: "dark:from-neon-primary dark:to-neon-secondary",
      shadowColor: "shadow-blue-500/20",
      delay: 0,
    },
    {
      icon: CodeBracketIcon,
      title: t.services.app.title,
      description: t.services.app.description,
      color: "from-blue-600 to-blue-400",
      darkColor: "dark:from-neon-primary dark:to-neon-secondary",
      shadowColor: "shadow-blue-500/20",
      delay: 0.1,
    },
    {
      icon: SparklesIcon,
      title: t.services.ai.title,
      description: t.services.ai.description,
      color: "from-primary to-secondary",
      darkColor: "dark:from-neon-primary dark:to-neon-secondary",
      shadowColor: "shadow-primary/20",
      delay: 0.2,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-black z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-black to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent z-0"></div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/3">
        <div className="absolute w-64 h-64 bg-primary/5 dark:bg-neon-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute right-0 bottom-1/4 w-1/3 h-1/3">
        <div className="absolute w-64 h-64 bg-secondary/5 dark:bg-neon-secondary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary-dark dark:text-neon-primary bg-primary/10 dark:bg-neon-primary/10 rounded-full">
            {t.services.badge || "Nossos Serviços"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text">
            <span className="inline-flex items-center">
              <WrenchScrewdriverIcon className="w-10 h-10 mr-2 text-primary dark:text-neon-primary" />
              {t.services.title}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{
                y: -12,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
              }}
              className={`bg-white/90 dark:bg-black/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-neon-primary/30 transition-all duration-300 overflow-hidden relative group`}
            >
              {/* Background gradient blob */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br opacity-10 dark:opacity-10 rounded-full filter blur-2xl transition-all duration-300 group-hover:scale-150 group-hover:opacity-30 dark:group-hover:opacity-20 group-hover:rotate-45 z-0"></div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} ${service.darkColor} rounded-2xl p-4 text-white mb-8 ${service.shadowColor} shadow-lg transform-gpu transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 mx-auto`}>
                    <service.icon className="w-full h-full" />
                  </div>

                  <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${service.color} text-transparent bg-clip-text dark:text-neon-primary text-center`}>
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-dark-text-secondary text-center">
                    {service.description}
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-auto pt-6 flex justify-center"
                >
                  <a href="#contact" className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} text-transparent bg-clip-text dark:text-neon-primary group-hover:underline`}>
                    {t.services.learnMore || "Saiba mais"}
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 