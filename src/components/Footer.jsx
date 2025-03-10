import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/G3_logo.png';

const Footer = () => {
  const { t } = useApp();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/g3tech',
      icon: FaLinkedinIn,
      color: 'hover:bg-[#0A66C2]',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/g3tech',
      icon: FaInstagram,
      color: 'hover:bg-gradient-to-r hover:from-[#104F89] hover:via-[#00BFFF] hover:to-[#104F89]',
    },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background shape - adaptado para tema claro/escuro */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white dark:from-black to-transparent z-0"></div>
      
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-neon-primary/5 dark:to-neon-secondary/5 transform -skew-y-3"></div>
      
      {/* Alterado para usar cores claras no tema claro */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white pt-24 pb-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-r from-primary to-secondary rounded-full filter blur-3xl opacity-70"></div>
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-white/10 shadow-xl mb-12"
          >
            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-6">
                  <img src={logo} alt="G3 Tech Logo" className="h-10 w-auto mr-2" />
                  <h3 className="text-xl font-bold text-primary dark:bg-gradient-to-r dark:from-neon-primary dark:to-neon-secondary dark:text-transparent dark:bg-clip-text">
                    {t.footer.company.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                  {t.footer.company.description}
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-bold mb-6 text-primary dark:bg-gradient-to-r dark:from-neon-primary dark:to-neon-secondary dark:text-transparent dark:bg-clip-text">
                  {t.footer.contact.title}
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400 text-center md:text-left">
                  <p className="flex items-center justify-center md:justify-start">
                    {t.footer.contact.address}
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    {t.footer.contact.phone}
                  </p>
                  <p className="flex items-center justify-center md:justify-start">
                    {t.footer.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-bold mb-6 text-primary dark:bg-gradient-to-r dark:from-neon-primary dark:to-neon-secondary dark:text-transparent dark:bg-clip-text">
                  {t.footer.social.title}
                </h3>
                <div className="flex space-x-4 justify-center md:justify-start w-full">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-white/10 backdrop-blur-sm text-gray-600 dark:text-gray-300 ${link.color} border border-gray-200 dark:border-white/10 transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-lg`}
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <div className="w-full max-w-2xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-500/30 to-transparent mb-8"></div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-500"
            >
              © {currentYear} {t.footer.copyright}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;