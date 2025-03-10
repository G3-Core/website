import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ValuePillar = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="flex items-start gap-6 p-6 hover:bg-white/10 dark:hover:bg-white/5 rounded-xl transition-colors duration-300"
    >
      <div className="flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring' }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary dark:from-neon-primary dark:to-neon-secondary flex items-center justify-center"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
      </div>
      
      <div className="flex-grow">
        <motion.h4
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text"
        >
          {title}
        </motion.h4>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          className="text-gray-600 dark:text-white"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ValuesPillars = ({ values }) => {
  return (
    <div className="space-y-10 py-6">
      {values.map((value, index) => (
        <ValuePillar
          key={index}
          icon={value.icon}
          title={value.title}
          description={value.description}
          index={index}
        />
      ))}
    </div>
  );
};

export default ValuesPillars; 