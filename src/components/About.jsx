import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import { 
  LightBulbIcon, 
  UserGroupIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const { t } = useApp();

  const values = [
    {
      icon: LightBulbIcon,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
    },
    {
      icon: UserGroupIcon,
      title: t.about.values.collaboration.title,
      description: t.about.values.collaboration.description,
    },
    {
      icon: ShieldCheckIcon,
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.about.title}
          </h2>
          <p className="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/about-image.svg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              {t.about.mission.title}
            </h3>
            <p className="text-gray-600 dark:text-dark-text-secondary">
              {t.about.mission.description}
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-dark-text-secondary">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 