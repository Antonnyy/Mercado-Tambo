import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Cierra el menú si haces clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as HTMLElement).contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + texto */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-sm">
            PF
          </div>
          <div className="leading-tight">
            <h1 className="text-base font-extrabold text-gray-800">MERCADO LIMPIO</h1>
            <span className="text-xs text-green-600 font-medium">Pollitos en Fuga</span>
          </div>
        </div>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-6 font-medium text-sm text-gray-700">
          <a href="/" className="hover:text-green-600 transition">{t('home')}</a>
          <a href="/#nosotros" className="hover:text-green-600 transition">{t('about')}</a>
          <a href="/#solucion" className="hover:text-green-600 transition">{t('solution')}</a>
          <a href="/#participa" className="hover:text-green-600 transition">{t('participate_menu')}</a>
        </nav>

        {/* Idioma + botón */}
        <div className="flex items-center space-x-4 relative" ref={menuRef}>
          {/* Botón de idioma con solo el ícono visible */}
          <button
            onClick={() => setOpen(!open)}
            className="border px-2 py-1 rounded text-sm text-gray-600 flex items-center"
          >
            🌐 <span className="ml-1">▼</span>
          </button>

          {/* Opciones de idioma desplegables */}
          {open && (
            <div className="absolute right-20 top-12 bg-white border rounded shadow-md text-sm text-gray-800 z-50">
              <button
                onClick={() => {
                  i18n.changeLanguage('es');
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 block w-full text-left"
              >
                Español
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 block w-full text-left"
              >
                English
              </button>
            </div>
          )}

          {/* Botón de contacto */}
          <Link
            to="/contacto"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-sm px-4 py-2 rounded flex items-center space-x-1 transition"
          >
            <span>📞</span>
            <span>{t('contact')}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
