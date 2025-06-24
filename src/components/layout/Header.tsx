import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Cerrar selector de idioma
      if (langRef.current && !(langRef.current as HTMLElement).contains(e.target as Node)) {
        setLangOpen(false);
      }
      
      // Cerrar menú móvil si se hace clic fuera
      if (mobileMenuRef.current && !(mobileMenuRef.current as HTMLElement).contains(e.target as Node)) {
        // Solo cerrar si el botón de hamburguesa no es el objetivo
        const hamburger = document.querySelector('.mobile-menu-button');
        if (hamburger && !hamburger.contains(e.target as Node)) {
          setMobileOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileOpen]);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">

        {/* Logo + texto - Reducido en móvil */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-xs sm:text-sm">
            PF
          </div>
          <div className="leading-tight hidden sm:block">
            <h1 className="text-base font-extrabold text-gray-800">MERCADO LIMPIO</h1>
            <span className="text-xs text-green-600 font-medium">Pollitos en Fuga</span>
          </div>
          <div className="sm:hidden">
            <h1 className="text-sm font-bold text-gray-800">MERCADO LIMPIO</h1>
          </div>
        </div>

        {/* Botón de hamburguesa - Mejorado para móviles */}
        <button
          className="md:hidden text-gray-700 text-xl mobile-menu-button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* Navegación desktop */}
        <nav className="hidden md:flex space-x-6 font-medium text-sm text-gray-800 bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 rounded-2xl shadow-sm border border-green-400">
          <a href="/" className="hover:text-black-600 hover:bg-green-300 px-3 py-2 rounded-xl transition-all duration-200">Inicio</a>
          <a href="/#nosotros" className="hover:text-black-600 hover:bg-green-300 px-3 py-2 rounded-xl transition-all duration-200">Nosotros</a>
          <a href="/#solucion" className="hover:text-black-600 hover:bg-green-300 px-3 py-2 rounded-xl transition-all duration-200">Solución</a>
          <a href="/#participa" className="hover:text-black-600 hover:bg-green-300 px-3 py-2 rounded-xl transition-all duration-200">Participa</a>
        </nav>

        {/* Controles de idioma + contacto - Desktop */}
        <div className="hidden md:flex items-center space-x-4 relative" ref={langRef}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center border px-2 py-1 rounded text-sm text-gray-600 hover:border-green-500 transition"
            aria-expanded={langOpen}
            aria-haspopup="true"
          >
            🌐
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71-3.957a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          {langOpen && (
            <div className="absolute right-16 mt-2 w-28 bg-white border rounded shadow-lg z-50">
              <button
                onClick={() => {
                  i18n.changeLanguage('es');
                  setLangOpen(false);
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-emerald-100"
              >
                🇪🇸 Español
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  setLangOpen(false);
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-emerald-100"
              >
                🇺🇸 English
              </button>
            </div>
          )}

          <Link
            to="/contacto"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-sm px-4 py-2 rounded flex items-center space-x-1 transition"
          >
            <span>📞</span>
            <span>Contacto</span>
          </Link>
        </div>
      </div>

      {/* Navegación móvil - Mejorada */}
      {mobileOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 bg-white z-40 pt-16 overflow-y-auto"
          style={{ height: 'calc(100vh - 64px)', top: '64px' }}
        >
          <nav className="flex flex-col space-y-2 px-6 py-4 text-gray-700">
            <a 
              href="/" 
              className="hover:text-green-600 hover:bg-green-100 px-4 py-3 rounded-lg transition-all flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              <span className="mr-3">🏠</span> Inicio
            </a>
            <a 
              href="/#nosotros" 
              className="hover:text-green-600 hover:bg-green-100 px-4 py-3 rounded-lg transition-all flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              <span className="mr-3">👥</span> Nosotros
            </a>
            <a 
              href="/#solucion" 
              className="hover:text-green-600 hover:bg-green-100 px-4 py-3 rounded-lg transition-all flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              <span className="mr-3">💡</span> Solución
            </a>
            <a 
              href="/#participa" 
              className="hover:text-green-600 hover:bg-green-100 px-4 py-3 rounded-lg transition-all flex items-center"
              onClick={() => setMobileOpen(false)}
            >
              <span className="mr-3">🤝</span> Participa
            </a>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 uppercase mb-2 px-4">Idioma</h3>
              <button
                onClick={() => {
                  i18n.changeLanguage('es');
                  setMobileOpen(false);
                }}
                className="w-full text-left hover:bg-green-100 px-4 py-3 rounded-lg transition-all flex items-center"
              >
                <span className="mr-3">🇪🇸</span> Español
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  setMobileOpen(false);
                }}
                className="w-full text-left hover:bg-green-100 px-4 py-3 rounded-lg transition-all flex items-center"
              >
                <span className="mr-3">🇺🇸</span> English
              </button>
            </div>
            
            <div className="mt-4">
              <Link
                to="/contacto"
                className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white text-center py-3 rounded-lg block font-medium transition"
                onClick={() => setMobileOpen(false)}
              >
                📞 Contacto
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;