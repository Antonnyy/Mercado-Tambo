import React from 'react';
import { motion } from 'framer-motion';

const PaginaAdultosMayores = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Encabezado emocional */}
      <motion.section 
        className="bg-green-800 text-white py-16 text-center px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          El mercado limpio de antes empieza contigo hoy
        </motion.h1>
        <motion.p className="text-lg max-w-3xl mx-auto">
          Recordemos los valores que nos enseñaron: respeto, limpieza y comunidad. Volvamos a hacer del mercado un lugar digno de todos.
        </motion.p>
      </motion.section>

      {/* Comparación emocional: antes y ahora */}
      <motion.section 
        className="bg-yellow-50 py-16 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 className="text-3xl font-bold text-green-700 mb-6">
          ¿Te acuerdas cómo era antes?
        </motion.h2>
        <motion.p className="text-gray-700 max-w-3xl mx-auto mb-10">
          Cuando éramos niños, nuestros padres nos enseñaban a barrer la vereda, cuidar los puestos y respetar el espacio de todos.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <img src="img/despues.jpg" alt="Antes" className="rounded-lg shadow-lg" />
            <p className="mt-2 text-sm text-gray-600">Antes: Un mercado ordenado y respetado</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <img src="img/antes.jpg" alt="Ahora" className="rounded-lg shadow-lg" />
            <p className="mt-2 text-sm text-gray-600">Ahora: Un mercado descuidado y sucio</p>
          </motion.div>
        </div>

        <motion.blockquote 
          className="mt-12 text-xl italic text-green-800 font-medium max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          “Si queremos que nuestros nietos hereden algo mejor, el cambio empieza por nosotros.”
        </motion.blockquote>
      </motion.section>

      {/* Mini reto motivacional */}
      <motion.section 
        className="bg-white py-20 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          ¡Acepta el reto de esta semana!
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Comprométete a mantener tu puesto limpio durante toda la semana y motiva a otro comerciante a hacer lo mismo.
        </p>
        <motion.div className="text-6xl mb-4" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          🧹💪
        </motion.div>
        <p className="text-green-800 font-semibold">¡Un mercado limpio empieza por una sola acción diaria!</p>
      </motion.section>

      {/* Muro de inspiración */}
      <motion.section 
        className="bg-gray-50 py-16 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          Comerciantes que ya están dando el ejemplo
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              nombre: "Doña Teresa",
              imagen: 'img/logo1.jpg',
              mensaje: "Desde que limpio todos los días, mis clientes me felicitan."
            },
            {
              nombre: "Don Julián",
              imagen: 'img/logo3.jpg',
              mensaje: "El mercado limpio trae más orden, más respeto."
            },
            {
              nombre: "Señora Elvira",
              imagen: 'img/logo2.jpg',
              mensaje: "Lo hago por mis nietos, quiero dar el ejemplo."
            }
          ].map((persona, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={persona.imagen} alt={persona.nombre} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-bold text-green-700">{persona.nombre}</h3>
              <p className="text-sm text-gray-600 italic mt-2">"{persona.mensaje}"</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Cierre inspirador */}
      <motion.section 
        className="bg-green-100 py-16 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-green-900 mb-4">¡Tú también puedes ser parte del cambio!</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          No se trata solo de limpiar. Se trata de dar el ejemplo, de recuperar lo que fuimos y dejar un legado digno. 
        </p>
      </motion.section>
    </main>
  );
};

export default PaginaAdultosMayores;