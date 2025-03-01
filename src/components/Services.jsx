import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import { 
  CodeBracketIcon, 
  GlobeAltIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const Services = () => {
  const { t } = useApp();

  const services = [
    {
      icon: GlobeAltIcon,
      title: t.services.web.title,
      description: t.services.web.description,
    },
    {
      icon: CodeBracketIcon,
      title: t.services.app.title,
      description: t.services.app.description,
    },
    {
      icon: SparklesIcon,
      title: t.services.ai.title,
      description: t.services.ai.description,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            {t.services.title}
          </h2>
          <p className="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-dark p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg p-3 text-white mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 