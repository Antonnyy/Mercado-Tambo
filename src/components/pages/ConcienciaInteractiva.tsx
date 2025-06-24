import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Preguntas para el quiz
const preguntas = [
  {
    pregunta: "¿Cuánto tiempo tarda en degradarse una bolsa plástica?",
    opciones: ["1 año", "20 años", "100 años", "Más de 400 años"],
    correcta: 3
  },
  {
    pregunta: "¿Cuál de estos residuos es reciclable?",
    opciones: ["Cáscara de plátano", "Botella de plástico", "Papel sucio", "Pañal"],
    correcta: 1
  },
  {
    pregunta: "¿Qué puedes hacer para reducir la contaminación en tu entorno?",
    opciones: [
      "Esperar a que otros lo hagan",
      "Usar productos reutilizables",
      "Botar basura en cualquier lugar",
      "Ignorar el problema"
    ],
    correcta: 1
  }
];

// Elementos para arrastrar
const residuos = [
  { nombre: "Cáscara", tipo: "orgánico" },
  { nombre: "Botella", tipo: "reciclable" },
  { nombre: "Papel sucio", tipo: "no reciclable" }
];

const ConcienciaInteractiva = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [aciertos, setAciertos] = useState(0);

  const reiniciarTodo = () => {
    setPreguntaActual(0);
    setPuntuacion(0);
    setFinalizado(false);
    setAciertos(0);
  };

  const manejarRespuesta = (indice) => {
    if (indice === preguntas[preguntaActual].correcta) {
      setPuntuacion(puntuacion + 1);
    }
    const siguiente = preguntaActual + 1;
    if (siguiente < preguntas.length) {
      setPreguntaActual(siguiente);
    } else {
      setFinalizado(true);
    }
  };

  const manejarArrastre = (e, residuo) => {
    e.dataTransfer.setData("tipo", residuo.tipo);
  };

  const permitirSoltar = (e) => e.preventDefault();

  const manejarSoltar = (e, tacho) => {
    const tipo = e.dataTransfer.getData("tipo");
    if (tipo === tacho) {
      setAciertos((prev) => prev + 1);
    }
  };

  return (
    <motion.section 
      id="conciencia" 
      className="py-20 bg-white px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="bg-emerald-50 p-6 rounded-xl shadow-md"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Quiz de Conciencia Ambiental
          </h2>
          {!finalizado ? (
            <>
              <h3 className="text-lg font-semibold text-green-700 mb-3">
                {preguntas[preguntaActual].pregunta}
              </h3>
              <div className="space-y-2">
                {preguntas[preguntaActual].opciones.map((opcion, i) => (
                  <motion.button
                    key={i}
                    onClick={() => manejarRespuesta(i)}
                    className="block w-full bg-white hover:bg-emerald-100 border border-green-400 text-green-800 py-2 px-4 rounded transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {opcion}
                  </motion.button>
                ))}
              </div>
            </>
          ) : (
            <motion.div 
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h3 className="text-xl font-bold text-green-700">¡Gracias por participar!</h3>
              <p className="mt-2 text-gray-700">
                Tu puntuación: <strong>{puntuacion}</strong> de {preguntas.length}
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Cada paso cuenta para cuidar el medio ambiente 🌱
              </p>
              <motion.button
                onClick={reiniciarTodo}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-full shadow transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Volver a intentar
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-6 rounded-xl shadow-md"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
            Clasifica los residuos
          </h2>
          <p className="text-gray-600 text-sm mb-4 text-center">
            Arrastra cada residuo hacia su tacho correspondiente
          </p>
          <div className="flex justify-around mb-6">
            {["orgánico", "reciclable", "no reciclable"].map((tacho) => (
              <motion.div
                key={tacho}
                onDragOver={permitirSoltar}
                onDrop={(e) => manejarSoltar(e, tacho)}
                className="w-28 h-28 flex items-center justify-center bg-emerald-100 border border-green-400 rounded-lg text-center text-sm text-green-900 shadow-inner"
                whileHover={{ scale: 1.05 }}
              >
                {tacho.charAt(0).toUpperCase() + tacho.slice(1)}
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-4 flex-wrap">
            {residuos.map((residuo, i) => (
              <motion.div
                key={i}
                draggable
                onDragStart={(e) => manejarArrastre(e, residuo)}
                className="bg-white px-4 py-2 rounded-full shadow cursor-move border border-green-400 text-green-800"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {residuo.nombre}
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-center text-gray-600">
            Aciertos: <span className="font-semibold">{aciertos}</span> / {residuos.length}
          </p>

          {aciertos === residuos.length && (
            <motion.div 
              className="mt-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-green-700 font-medium">¡Clasificación completada correctamente! 🥳</p>
              <motion.button
                onClick={reiniciarTodo}
                className="mt-2 bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-full shadow transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jugar de nuevo
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ConcienciaInteractiva;