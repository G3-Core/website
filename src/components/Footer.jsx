import { useApp } from '../contexts/AppContext';

const Footer = () => {
  const { t } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-dark text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              {t.footer.company.title}
            </h3>
            <p className="text-gray-400 dark:text-dark-text-secondary mb-4">
              {t.footer.company.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              {t.footer.contact.title}
            </h3>
            <div className="space-y-2 text-gray-400 dark:text-dark-text-secondary">
              <p>{t.footer.contact.address}</p>
              <p>{t.footer.contact.phone}</p>
              <p>{t.footer.contact.email}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              {t.footer.social.title}
            </h3>
            <div className="flex space-x-4">
              {t.footer.social.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-dark-text-secondary">
          <p>
            © {currentYear} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 