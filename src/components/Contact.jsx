import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useForm } from '@formspree/react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { useApp } from '../contexts/AppContext';
import Confetti from 'react-confetti';

const Contact = () => {
  const { t } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const formspreeId = 'xvgzerdd';
  const [state, handleFormspreeSubmit] = useForm(formspreeId);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiSize, setConfettiSize] = useState({ width: 0, height: 0 });
  const formRef = useRef(null);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Atualiza o tamanho do confetti com base no tamanho da janela
  useEffect(() => {
    const updateConfettiSize = () => {
      setConfettiSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateConfettiSize();
    window.addEventListener('resize', updateConfettiSize);
    
    return () => window.removeEventListener('resize', updateConfettiSize);
  }, []);

  // Manipula a mudança nos campos do formulário
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handler personalizado para o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await handleFormspreeSubmit(e);
      // Incrementa o contador de submissões para acionar o efeito
      setSubmissionCount(prev => prev + 1);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setNotification({
        show: true,
        type: 'error',
        message: t.contact.notifications?.error || "Erro ao enviar mensagem. Tente novamente."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Efeito para limpar os campos após o envio bem-sucedido
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setNotification({
        show: true,
        type: 'success',
        message: t.contact.notifications?.success || "Mensagem enviada com sucesso!"
      });
      
      // Mostrar confetti
      setShowConfetti(true);
      
      // Esconder confetti após 6 segundos
      setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
      
    } else if (state.errors && state.errors.length > 0) {
      setNotification({
        show: true,
        type: 'error',
        message: t.contact.notifications?.error || "Erro ao enviar mensagem. Tente novamente."
      });
    }
  }, [state.succeeded, state.errors, t, submissionCount]);

  // Esconde a notificação após 5 segundos
  useEffect(() => {
    let timer;
    if (notification.show) {
      timer = setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [notification.show]);

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
      {/* Confetti animation */}
      {showConfetti && (
        <Confetti
          width={confettiSize.width}
          height={confettiSize.height}
          recycle={false}
          numberOfPieces={800}
          gravity={0.15}
          colors={['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']}
        />
      )}
      
      {/* Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-lg ${
              notification.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            <div className="flex items-center space-x-2">
              {notification.type === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              <span>{notification.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            ref={formRef}
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50/50 dark:bg-dark/50 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  required
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-light hover:to-secondary-light text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{t.contact.form.sending || "Enviando..."}</span>
                  </div>
                ) : (
                  t.contact.form.submit
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 