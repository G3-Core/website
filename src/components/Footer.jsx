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
      color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark text-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
              <img src={logo} alt="G3 Tech Logo" className="h-10 w-auto mr-2" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary-light to-secondary-light text-transparent bg-clip-text">
                {t.footer.company.title}
              </h3>
            </div>
            <p className="text-gray-400 dark:text-dark-text-secondary text-center md:text-left">
              {t.footer.company.description}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary-light to-secondary-light text-transparent bg-clip-text">
              {t.footer.contact.title}
            </h3>
            <div className="space-y-3 text-gray-400 dark:text-dark-text-secondary text-center md:text-left">
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
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-primary-light to-secondary-light text-transparent bg-clip-text">
              {t.footer.social.title}
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start w-full">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 dark:bg-dark-light text-gray-400 hover:text-white ${link.color} transition-all duration-300 group hover:-translate-y-1`}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 dark:text-dark-text-secondary">
            © {currentYear} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 