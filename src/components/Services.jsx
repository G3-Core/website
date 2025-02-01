import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Sites modernos e responsivos desenvolvidos com as mais recentes tecnologias do mercado.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Aplicações Mobile',
    description: 'Apps nativos e híbridos que proporcionam a melhor experiência para seus usuários.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'E-commerce',
    description: 'Lojas virtuais completas e personalizadas para impulsionar suas vendas online.',
    icon: ShoppingCartIcon,
  },
  {
    title: 'Marketing Digital',
    description: 'Estratégias completas para aumentar sua visibilidade e atrair mais clientes.',
    icon: RocketLaunchIcon,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nossos{' '}
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Serviços
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em desenvolvimento web e mobile para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg p-3 mb-6 text-white">
                <service.icon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary">
            Ver Todos os Serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 