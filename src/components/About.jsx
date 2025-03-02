import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import { 
  LightBulbIcon, 
  UserGroupIcon, 
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import AnimatedGradientOrbs from './visual/AnimatedGradientOrbs';
import TechEvolutionScene from './3d/TechEvolutionScene';

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
    <section id="about" className="py-20 relative overflow-hidden bg-white dark:bg-black">
      {/* Background com gradientes sutis */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/50 dark:from-black dark:via-black dark:to-black z-0"></div>
      
      {/* Orbes de gradiente */}
      <div className="absolute inset-0 z-0 opacity-30">
        <AnimatedGradientOrbs 
          count={3}
          colors={[
            ['#3b82f6', '#93c5fd'],
            ['#104F89', '#00BFFF'],
            ['#00BFFF', '#104F89']
          ]}
          minOpacity={0.1}
          maxOpacity={0.2}
          minSize={250}
          maxSize={450}
        />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary dark:text-neon-primary bg-primary/10 dark:bg-black/50 rounded-full backdrop-blur-sm dark:border dark:border-neon-primary/30 dark:neon-text">
            {t.about.badge || "Nossa História"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text">
            {t.about.title}
          </h2>
          <p className="text-gray-600 dark:text-white max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Seção Valores */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text"
          >
            {t.about.values.title || "Nossos Valores"}
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white/80 dark:bg-black/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-neon-primary/30 flex flex-col items-center text-center"
              >
                <div className="p-4 rounded-xl bg-primary/10 dark:bg-black/70 dark:border dark:border-neon-primary/30 mb-6">
                  <value.icon className="w-8 h-8 text-primary dark:text-neon-primary" />
                </div>
                <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text nowrap">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-white">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Seção de Evolução Tecnológica com visualização 3D */}
        <div className="mb-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text"
          >
            {t.about.techEvolution?.title || "Nossa Evolução Tecnológica"}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-8 text-center"
          >
            <p className="text-gray-700 dark:text-white text-lg mb-2">
              {t.about.techEvolution?.description || "Não nos limitamos a tecnologias ultrapassadas. Utilizamos um arsenal de ferramentas modernas que garantem prazos reduzidos e resultados excepcionais."}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              {t.about.techEvolution?.subdescription || "Nossa equipe domina tanto tecnologias legadas (abaixo) quanto as mais modernas e inovadoras (acima), permitindo desenvolver projetos completos e performáticos."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <TechEvolutionScene />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-4xl mx-auto mt-10 p-6 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-neon-primary/30 shadow-lg"
          >
            <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text">
              {t.about.techEvolution?.advantage || "Nossa Vantagem Competitiva"}
            </h4>
            <p className="text-gray-700 dark:text-white">
              {t.about.techEvolution?.advantageDescription || "A combinação de expertise em diferentes gerações tecnológicas nos permite criar soluções inovadoras, mas compatíveis com sistemas existentes. Conseguimos modernizar gradualmente infraestruturas complexas sem interromper operações."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 