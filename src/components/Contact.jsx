import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Entre em{' '}
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Contato
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para ajudar você a transformar sua presença digital. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg p-3 text-white flex-shrink-0">
                <PhoneIcon className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-gray-600">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg p-3 text-white flex-shrink-0">
                <EnvelopeIcon className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                <p className="text-gray-600">contato@websystems.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg p-3 text-white flex-shrink-0">
                <MapPinIcon className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Enviar Mensagem
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 