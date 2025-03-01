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
    },
    {
      icon: EnvelopeIcon,
      text: 'E-mail',
      subtext: 'g3tech@gmail.com',
      href: 'mailto:g3tech@gmail.com',
      bgColor: 'bg-gradient-to-r from-primary to-secondary',
    },
    {
      icon: FaLinkedinIn,
      text: 'LinkedIn',
      subtext: '@g3tech',
      href: 'https://linkedin.com/company/g3tech',
      bgColor: 'bg-[#0A66C2]',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-dark-light">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="flex flex-col space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-white dark:bg-dark-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${button.bgColor} rounded-lg p-3 text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <button.icon className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold dark:text-white">
                    {button.text}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {button.subtext}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-dark-light p-8 rounded-xl shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              {t.contact.form.submit}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 