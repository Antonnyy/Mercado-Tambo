import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  
  const [formEnviado, setFormEnviado] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setFormEnviado(true);
    
    // Reiniciar formulario después de 3 segundos
    setTimeout(() => {
      setFormData({ nombre: '', email: '', mensaje: '' });
      setFormEnviado(false);
    }, 3000);
  };

  return (
    <main className="bg-green-500 text-gray-800 min-h-screen">

      {/* Sección de portada - Corregida la ruta de la imagen */}
      <section
        className="h-[100vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/portada2.jpg')" // Cambiado a minúscula
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

          {formEnviado ? (
            <motion.div
              className="bg-white rounded-xl shadow-md p-8 space-y-6 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-green-700">¡Mensaje enviado con éxito!</h3>
              <p className="text-gray-700">
                Te responderemos a la brevedad posible.
              </p>
            </motion.div>
          ) : (
            <motion.form
              className="bg-white rounded-xl shadow-md p-8 space-y-6 text-left"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="tu@correo.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center"
              >
                <span>Enviar mensaje</span>
                <span className="ml-2">✉️</span>
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;