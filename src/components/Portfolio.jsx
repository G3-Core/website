import { motion } from 'framer-motion';
import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import vonicWebsiteVideo from '../../public/portfolio/vonic_systems_project.mp4'

const Portfolio = () => {
  const { t } = useApp();
  const [hovered, setHovered] = useState(false);

  // Dados do primeiro projeto
  const project = {
    title: t.portfolio.vonicsystems.title,
    description: t.portfolio.vonicsystems.description,
    tags: t.portfolio.vonicsystems.tags,
    link: "https://vonicsystems.com",
    image: "/portfolio/vonic-systems.jpg", // Coloque uma imagem do projeto na pasta pública
    color: "from-blue-500 to-cyan-500",
    darkColor: "dark:from-neon-primary dark:to-neon-secondary",
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-white dark:bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black z-0"></div>
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 dark:bg-neon-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/5 dark:bg-neon-secondary/5 rounded-full filter blur-3xl"></div>

      {/* Decorative elements */}
      <div className="absolute left-10 top-20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary/20 dark:text-neon-primary/30">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 8" />
        </svg>
      </div>
      <div className="absolute right-20 bottom-40">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-secondary/20 dark:text-neon-secondary/30">
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
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary dark:text-neon-primary bg-primary/10 dark:bg-neon-primary/10 rounded-full">
            {t?.portfolio?.badge || "Nosso Portfólio"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text">
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

            {/* Badge de "Primeiro Projeto"
            <div className="absolute top-4 left-4 z-20">
              <div className="px-3 py-2 bg-white/90 dark:bg-dark/90 backdrop-blur-sm rounded-full text-xs font-semibold shadow-lg">
                🏆 {t.portfolio.firstProject}
              </div>
            </div> */}

            {/* Imagem de fundo (com efeito de zoom suave no hover) */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <motion.div
                animate={{ scale: hovered ? 1.05 : 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                {/* This overlay now uses opacity to ensure visibility in both light and dark modes */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-secondary/60 dark:from-neon-primary/60 dark:to-neon-secondary/60 mix-blend-overlay z-0"></div>

                {/* Make sure the video has proper dark mode visibility */}
                <video
                  src={vonicWebsiteVideo}
                  className="w-full h-full object-cover dark:brightness-90" // Added dark:brightness-90 to improve visibility in dark mode
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={(e) => {
                    // Improved fallback that works in both light and dark mode
                    const target = e.target;
                    const container = target.parentNode;

                    // Create fallback element
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = "relative w-full h-full";
                    fallbackDiv.innerHTML = `
          <img 
            src="https://placehold.co/1200x675/22222A/FFFFFF?text=Vonic+Systems&font=poppins" 
            alt="Vonic Systems - Placeholder"
            class="w-full h-full object-cover" 
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="bg-white/90 dark:bg-black/90 backdrop-blur-md px-6 py-4 rounded-xl text-center max-w-md shadow-xl">
              <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">
                ${t.portfolio.videoUnavailable}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                Path: /public/portfolio/vonic_systems_project.mp4
              </p>
            </div>
          </div>
        `;

                    // Replace video with fallback
                    container.replaceChild(fallbackDiv, target);
                  }}
                />
              </motion.div>

              {/* Botão de link - made more visible in dark mode */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20
      bg-white/90 dark:bg-black/90 backdrop-blur-sm p-4 rounded-full shadow-xl
      text-primary dark:text-neon-primary hover:text-primary-light dark:hover:text-neon-primary 
      transition-colors duration-300 dark:border dark:border-neon-primary/50 dark:hover:border-neon-primary"
                aria-label={t.portfolio.viewProject}
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
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} ${project.darkColor} text-white`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4"
              >
                detalhes pra onde ? nao sei se faz sentido
                <a
                  href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-white hover:text-primary-light transition-colors"
                >
                  <span className="mr-2 text-sm font-medium">{t.portfolio.viewDetails || "Ver detalhes"}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div> */}
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
            <div className="p-8 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-neon-primary/30 shadow-lg">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text dark:from-neon-primary dark:to-neon-secondary dark:neon-text">
                {t?.portfolio?.comingSoon?.title || "Mais projetos em breve"}
              </h3>
              <p className="text-gray-600 dark:text-white">
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