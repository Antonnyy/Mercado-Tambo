import React from 'react';
import { 
  Instagram, 
  Github, 
  Mail, 
  Heart,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { PiTiktokLogo } from 'react-icons/pi';

const SocialIcon = ({ icon: Icon, href, label, color, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative p-3 rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 ${color} hover:${hoverColor}`}
    aria-label={label}
  >
    <Icon size={20} className="transition-colors duration-300" />
    <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {label}
    </span>
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/pollito_a_la_fuga?igsh=dDM5cGNicTFqOTNv",
      label: "Síguenos en Instagram",
      color: "text-pink-600",
      hoverColor: "bg-pink-50"
    },
    {
      icon: PiTiktokLogo, // Representando TikTok
      href: "https://tiktok.com/@mercadolimpio",
      label: "Síguenos en TikTok",
      color: "text-black",
      hoverColor: "bg-gray-50"
    },
    {
      icon: Github,
      href: "https://github.com/Antonnyy/Mercado-Tambo",
      label: "Ver código en GitHub",
      color: "text-gray-700",
      hoverColor: "bg-gray-50"
    },
    {
      icon: Mail,
      href: "mailto:gonzalesgilmer31@gmail.com",
      label: "Envíanos un correo",
      color: "text-blue-600",
      hoverColor: "bg-blue-50"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 border-t border-gray-300 text-gray-900 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Sección principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Mercado Limpio</h3>
            <p className="text-gray-600 max-w-md">
              Transformando los mercados tradicionales hacia un futuro más sostenible y saludable
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-lg font-semibold text-gray-800">Síguenos</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                  color={social.color}
                  hoverColor={social.hoverColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <span>&copy; {currentYear} Mercado Limpio.</span>
              <span>Todos los derechos reservados.</span>
            </div>

            {/* Enlaces adicionales */}
            <div className="flex gap-6 text-gray-600">
              <a href="/privacidad" className="hover:text-green-600 transition-colors duration-200">
                Privacidad
              </a>
              <a href="/terminos" className="hover:text-green-600 transition-colors duration-200">
                Términos
              </a>
              <a href="/contacto" className="hover:text-green-600 transition-colors duration-200">
                Contacto
              </a>
            </div>

            {/* Créditos del equipo */}
            <div className="flex items-center gap-2">
              <span>Hecho con</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>por el equipo</span>
              <span className="font-semibold text-green-600 hover:text-green-700 transition-colors cursor-pointer">
                Pollitos a la Fuga
              </span>
            </div>
          </div>
        </div>

        
        {/* Call to action mejorado */}
        <div className="mt-8 text-center">
          <a 
            href="/#participa" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full hover:from-green-700 hover:to-green-600 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden"
          >
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <span className="font-semibold text-lg relative z-10">¿Quieres participar?</span>
            <ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300 relative z-10" />
            
            {/* Tooltip informativo */}
            <span className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              Únete a nuestra comunidad 🌱
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;