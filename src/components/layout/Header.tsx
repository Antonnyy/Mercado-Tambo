import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
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
          <a href="/" className="hover:text-green-600 transition">Inicio</a>
          <a href="/#nosotros" className="hover:text-green-600 transition">Nosotros</a>
          <a href="/#solucion" className="hover:text-green-600 transition">Solución</a>
          <a href="/#participa" className="hover:text-green-600 transition">Participa</a>
        </nav>

        {/* Idioma + botón */}
        <div className="flex items-center space-x-4 relative" ref={menuRef}>
          {/* 🌐 Selector con menú */}
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center border px-2 py-1 rounded text-sm text-gray-600 hover:border-green-500 transition"
          >
            🌐
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.187l3.71-3.957a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          {/* Menú desplegable */}
          {open && (
            <div className="absolute right-16 mt-2 w-28 bg-white border rounded shadow-lg z-50">
              <button
                onClick={() => {
                  i18n.changeLanguage('es');
                  setOpen(false);
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-emerald-100"
              >
                🇪🇸 Español
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  setOpen(false);
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-emerald-100"
              >
                🇺🇸 English
              </button>
            </div>
          )}

          {/* Botón de contacto */}
          <Link
            to="/contacto"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-sm px-4 py-2 rounded flex items-center space-x-1 transition"
          >
            <span>📞</span>
            <span>Contacto</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
