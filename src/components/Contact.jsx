import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { useApp } from '../contexts/AppContext';

const Contact = () => {
  const { t } = useApp();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  const contactButtons = [
    {
      icon: FaWhatsapp,
      text: 'WhatsApp',
      subtext: '(15) 99695-5275',
      href: 'https://wa.me/5515996955275',
      bgColor: 'bg-[#25D366]',
      hoverScale: 'group-hover:scale-110',
      delay: 0,
    },
    {
      icon: EnvelopeIcon,
      text: 'E-mail',
      subtext: 'g3tech@gmail.com',
      href: 'mailto:g3tech@gmail.com',
      bgColor: 'bg-gradient-to-r from-primary to-secondary',
      hoverScale: 'group-hover:scale-110',
      delay: 0.1,
    },
    {
      icon: FaLinkedinIn,
      text: 'LinkedIn',
      subtext: '@g3tech',
      href: 'https://linkedin.com/company/g3tech',
      bgColor: 'bg-[#0A66C2]',
      hoverScale: 'group-hover:scale-110',
      delay: 0.2,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-dark-light z-0"></div>
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/5 dark:bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 rounded-full">
            {t.contact.badge || "Entre em contato"}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactButtons.map((button, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: button.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-white/90 dark:bg-dark-light/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 group overflow-hidden relative"
              >
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gray-100 dark:bg-dark opacity-20 rounded-full transform rotate-45 transition-all duration-300 group-hover:scale-150 group-hover:rotate-90"></div>
                
                <div className={`w-12 h-12 ${button.bgColor} rounded-lg p-3 text-white flex-shrink-0 ${button.hoverScale} transition-transform relative z-10`}>
                  <button.icon className="w-full h-full" />
                </div>
                
                <div className="flex flex-col relative z-10">
                  <span className="text-xl font-semibold text-gray-900 dark:text-white">
                    {button.text}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {button.subtext}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/90 dark:bg-dark-light/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 space-y-6 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full transform rotate-45"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 dark:bg-secondary/10 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50/50 dark:bg-dark/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50/50 dark:bg-dark/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50/50 dark:bg-dark/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                {t.contact.form.submit}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 