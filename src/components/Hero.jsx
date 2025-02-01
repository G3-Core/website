import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforme sua presença digital com{' '}
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                soluções web inovadoras
              </span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Desenvolvemos sites e sistemas web personalizados que impulsionam seu negócio e encantam seus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Comece Agora
              </button>
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/hero-image.svg"
                alt="Web Development"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl transform rotate-6 -z-10" />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
        >
          {[
            { number: '100+', text: 'Projetos Entregues' },
            { number: '50+', text: 'Clientes Satisfeitos' },
            { number: '5+', text: 'Anos de Experiência' },
            { number: '24/7', text: 'Suporte Técnico' },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 