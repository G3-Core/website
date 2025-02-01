import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useApp } from '../contexts/AppContext';

const Contact = () => {
  const { t } = useApp();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-dark-paper">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="section-title dark:text-white">
            {t.contact.title}{' '}
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              {t.contact.highlight}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <a
              href="https://wa.me/5515996955275"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-6 bg-white dark:bg-dark-paper p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg p-3 text-white flex-shrink-0">
                <PhoneIcon className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{t.contact.phone}</h3>
                <p className="text-gray-600 dark:text-gray-400">(15) 99695-5275</p>
              </div>
            </a>

            <a
              href="mailto:g3tech@gmail.com"
              className="flex items-center space-x-6 bg-white dark:bg-dark-paper p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg p-3 text-white flex-shrink-0">
                <EnvelopeIcon className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{t.contact.email}</h3>
                <p className="text-gray-600 dark:text-gray-400">g3tech@gmail.com</p>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-dark-paper p-8 rounded-xl shadow-lg space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-dark dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              {t.contact.form.submit}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 