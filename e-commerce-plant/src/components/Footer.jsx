import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Sección de Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://wa.me/123456789" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </div>

        {/* Línea de Copyright */}
        <div className="text-center">
          <p className="text-white">© {new Date().getFullYear()} Charly's Plants. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
