import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 border-t text-gray-900 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; 2025 Puesto Verde. Todos los derechos reservados.</p>
        <p>
          Hecho con 💚 por el equipo <span className="font-semibold text-green-600">Pollitos a la Fuga</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
