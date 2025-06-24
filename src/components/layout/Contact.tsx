import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <main className="bg-green-500 text-gray-800">

      {/* Sección de portada */}
      <section
        className="h-[100vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/Portada2.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-xl">
            ¿Tienes algo que contarnos?
          </h1>
          <p className="mt-4 text-lg text-emerald-300 max-w-xl mx-auto">
            Estamos aquí para ayudarte, responder tus preguntas o sumarte a la campaña “Puesto Verde”.
          </p>
        </motion.div>
      </section>

      {/* Sección de formulario */}
      <section className="py-20 px-6 bg-gradient-to-br from-white to-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-700 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contáctanos
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Completa el siguiente formulario y nos pondremos en contacto contigo pronto.
          </motion.p>

          <motion.form
            className="bg-white rounded-xl shadow-md p-8 space-y-6 text-left"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="tu@correo.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Mensaje</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
