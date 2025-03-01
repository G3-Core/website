import { motion } from 'framer-motion';
import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  const { t } = useApp();
  const [hovered, setHovered] = useState(false);

  // Dados do primeiro projeto
  const project = {
    title: "Vonic Systems",
    description: "Site institucional desenvolvido para a Vonic Systems, uma empresa especializada em soluções tecnológicas para o setor industrial.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsivo"],
    link: "https://vonicsystems.com",
    image: "/portfolio/vonic-systems.jpg", // Coloque uma imagem do projeto na pasta pública
    color: "from-blue-500 to-cyan-500",
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-dark-light dark:to-dark z-0"></div>
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/5 dark:bg-secondary/10 rounded-full filter blur-3xl"></div>

      {/* Decorative elements */}
      <div className="absolute left-10 top-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary/20 dark:text-primary/30">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 8" />
        </svg>
      </div>
      <div className="absolute right-20 bottom-40">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-secondary/20 dark:text-secondary/30">
          <rect x="10" y="10" width="40" height="40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 8" />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 rounded-full">
            {t?.portfolio?.badge || "Nosso Portfólio"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            {t?.portfolio?.title || "Projetos Recentes"}
          </h2>
          <p className="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t?.portfolio?.subtitle || "Conheça alguns dos projetos que desenvolvemos recentemente, demonstrando nossa expertise em desenvolvimento web."}
          </p>
        </motion.div>

        {/* Portfolio Item */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -10 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative group overflow-hidden rounded-2xl shadow-xl"
          >
            {/* Overlay de fundo para contraste */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>

            {/* Imagem de fundo (com efeito de zoom suave no hover) */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <motion.div
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 mix-blend-overlay z-0"></div>
                <video
                  src="/portfolio/vonic_systems_project.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={(e) => {
                    e.target.outerHTML = `
                      <img src="https://placehold.co/1200x675/22222A/FFFFFF?text=Vonic+Systems&font=poppins" 
                      alt="Vonic Systems - Placeholder"
                      class="w-full h-full object-cover" />
                    `;
                  }}
                />
              </motion.div>

              {/* Badge de "Primeiro Projeto" */}
              <div className="z-20">
                <div className="px-3 py-2 bg-white/90 dark:bg-dark/90 backdrop-blur-sm rounded-full text-xs font-semibold shadow-lg">
                  🏆 Primeiro Projeto
                </div>
              </div>

              {/* Botão de link */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
                  bg-white/90 dark:bg-dark/90 backdrop-blur-sm p-4 rounded-full shadow-xl
                  text-primary hover:text-primary-light transition-colors duration-300"
                aria-label={`Ver o projeto ${project.title}`}
              >
                <ArrowTopRightOnSquareIcon className="w-8 h-8" />
              </motion.a>
            </div>

            {/* Conteúdo do card */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 z-20"
              animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 text-sm md:text-base line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Área de "Mais projetos em breve" */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="p-8 bg-white/80 dark:bg-dark-light/80 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                {t?.portfolio?.comingSoon?.title || "Mais projetos em breve"}
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                {t?.portfolio?.comingSoon?.description || "Estamos constantemente desenvolvendo novos projetos inovadores. Fique atento para mais atualizações em nosso portfólio."}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 