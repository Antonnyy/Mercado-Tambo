import React, { useState } from 'react';
import { 
  Instagram, 
  Github, 
  Mail, 
  Heart,
  ExternalLink,
  MessageCircle,
  Menu,
  X
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
    <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
      {label}
    </span>
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/pollito_a_la_fuga?igsh=dDM5cGNicTFqOTNv",
      label: "Instagram",
      color: "text-pink-600",
      hoverColor: "bg-pink-50"
    },
    {
      icon: PiTiktokLogo,
      href: "https://tiktok.com/@mercadolimpio",
      label: "TikTok",
      color: "text-black",
      hoverColor: "bg-gray-50"
    },
    {
      icon: Github,
      href: "https://github.com/Antonnyy/Mercado-Tambo",
      label: "GitHub",
      color: "text-gray-700",
      hoverColor: "bg-gray-50"
    },
    {
      icon: Mail,
      href: "mailto:gonzalesgilmer31@gmail.com",
      label: "Correo",
      color: "text-blue-600",
      hoverColor: "bg-blue-50"
    }
  ];

  const footerLinks = [
    { href: "/privacidad", label: "Privacidad" },
    { href: "/terminos", label: "Términos" },
    { href: "/contacto", label: "Contacto" },
    { href: "/faq", label: "Preguntas Frecuentes" },
    { href: "/blog", label: "Blog" },
    { href: "/equipo", label: "Nuestro Equipo" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 border-t border-gray-300 text-gray-900 pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Sección principal */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          
          {/* Logo y descripción */}
          <div className="text-center md:text-left max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ML</span>
              </div>
              <h3 className="text-2xl font-bold text-green-600">Mercado Limpio</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Transformando los mercados tradicionales hacia un futuro más sostenible y saludable
            </p>
            
            {/* Newsletter */}
            <div className="mt-4">
              <p className="font-medium text-gray-700 mb-2">Suscríbete a nuestro boletín</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-r-lg transition text-sm font-medium">
                  Suscribir
                </button>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="w-full md:w-auto">
            <div className="md:hidden flex justify-between items-center w-full border-b border-gray-300 pb-3 mb-4">
              <h4 className="text-lg font-semibold text-gray-800">Enlaces rápidos</h4>
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
            
            <div className={`${showMobileMenu ? 'block' : 'hidden'} md:block`}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 hidden md:block">Enlaces rápidos</h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                {footerLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Síguenos</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
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
            
            {/* Contacto directo */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Contáctanos</h4>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>contacto@mercadolimpio.org</span>
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  <span>+51 987 654 321</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-600">
              <span>&copy; {currentYear} Mercado Limpio.</span>
              <span>Todos los derechos reservados.</span>
            </div>

            {/* Créditos del equipo */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-600">
              <div className="flex items-center">
                <span>Hecho con</span>
                <Heart size={16} className="text-red-500 mx-1 animate-pulse" />
                <span>por</span>
              </div>
              <span className="font-semibold text-green-600 hover:text-green-700 transition-colors cursor-pointer flex items-center gap-1">
                <span>Pollitos a la Fuga</span>
                <ExternalLink size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* Call to action mejorado */}
        <div className="mt-10 text-center">
          <a 
            href="/#participa" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full hover:from-green-700 hover:to-green-600 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl relative overflow-hidden"
          >
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <span className="font-semibold text-lg relative z-10">¿Quieres participar en nuestra iniciativa?</span>
            <ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300 relative z-10" />
            
            {/* Tooltip informativo */}
            <span className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl">
              Únete a nuestra comunidad 🌱
            </span>
          </a>
        </div>
        
        {/* Volver arriba */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-600 hover:text-green-600 transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <span>Volver arriba</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;