import React, { useState, useEffect } from 'react';

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

const residuos = [
  { id: 1, nombre: "🍌 Cáscara", tipo: "orgánico", emoji: "🟢" },
  { id: 2, nombre: "🍶 Botella", tipo: "reciclable", emoji: "🔵" },
  { id: 3, nombre: "📄 Papel sucio", tipo: "no reciclable", emoji: "🔴" }
];

const tachos = [
  { tipo: "orgánico", nombre: "Orgánico", emoji: "🟢", color: "bg-green-100 border-green-400", hoverColor: "hover:bg-green-200" },
  { tipo: "reciclable", nombre: "Reciclable", emoji: "🔵", color: "bg-blue-100 border-blue-400", hoverColor: "hover:bg-blue-200" },
  { tipo: "no reciclable", nombre: "No Reciclable", emoji: "🔴", color: "bg-red-100 border-red-400", hoverColor: "hover:bg-red-200" }
];

const ConcienciaInteractiva = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [aciertos, setAciertos] = useState(0);
  const [residuoSeleccionado, setResiduoSeleccionado] = useState<{ id: number; nombre: string; tipo: string; emoji: string } | null>(null);
  const [tachoResaltado, setTachoResaltado] = useState<string | null>(null);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [residuosColocados, setResiduosColocados] = useState(new Set());
  const [modoInteraccion, setModoInteraccion] = useState('hybrid'); // 'drag', 'touch', 'hybrid'

  // Detectar capacidades del dispositivo
  useEffect(() => {
    const tieneDragDrop = 'draggable' in document.createElement('div');
    const esTactil = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (tieneDragDrop && !esTactil) {
      setModoInteraccion('drag');
    } else if (esTactil && !tieneDragDrop) {
      setModoInteraccion('touch');
    } else {
      setModoInteraccion('hybrid');
    }
  }, []);

  const reiniciarTodo = () => {
    setPreguntaActual(0);
    setPuntuacion(0);
    setFinalizado(false);
    setAciertos(0);
    setResiduoSeleccionado(null);
    setRespuestaSeleccionada(null);
    setMostrarResultado(false);
    setResiduosColocados(new Set());
  };

  const manejarRespuesta = (indice) => {
    if (mostrarResultado) return;
    
    setRespuestaSeleccionada(indice);
    setMostrarResultado(true);
    
    if (indice === preguntas[preguntaActual].correcta) {
      setPuntuacion(puntuacion + 1);
    }

    setTimeout(() => {
      setMostrarResultado(false);
      setRespuestaSeleccionada(null);
      
      const siguiente = preguntaActual + 1;
      if (siguiente < preguntas.length) {
        setPreguntaActual(siguiente);
      } else {
        setFinalizado(true);
      }
    }, 1500);
  };

  // Funciones para drag & drop (PC)
  const manejarInicioArrastre = (e, residuo) => {
    e.dataTransfer.setData('residuoId', residuo.id.toString());
    e.dataTransfer.setData('tipo', residuo.tipo);
    e.dataTransfer.effectAllowed = 'move';
  };

  const manejarArrastreEncima = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const manejarSoltar = (e, tipoTacho) => {
    e.preventDefault();
    const residuoId = parseInt(e.dataTransfer.getData('residuoId'));
    const tipoResiduo = e.dataTransfer.getData('tipo');
    
    procesarClasificacion(residuoId, tipoResiduo, tipoTacho);
  };

  // Funciones para touch (móvil)
  const seleccionarResiduo = (residuo) => {
    if (residuosColocados.has(residuo.id)) return;
    
    if (residuoSeleccionado?.id === residuo.id) {
      setResiduoSeleccionado(null);
    } else {
      setResiduoSeleccionado(residuo);
    }
  };

  const clasificarEnTacho = (tipoTacho) => {
    if (!residuoSeleccionado) return;
    
    procesarClasificacion(residuoSeleccionado.id, residuoSeleccionado.tipo, tipoTacho);
  };

  // Lógica común de clasificación
  const procesarClasificacion = (residuoId, tipoResiduo, tipoTacho) => {
    if (tipoResiduo === tipoTacho) {
      setAciertos((prev) => prev + 1);
      setResiduosColocados(prev => new Set([...prev, residuoId]));
      setTachoResaltado(tipoTacho);
      
      setTimeout(() => {
        setTachoResaltado(null);
        setResiduoSeleccionado(null);
      }, 800);
    } else {
      setTachoResaltado('error');
      setTimeout(() => {
        setTachoResaltado(null);
        setResiduoSeleccionado(null);
      }, 800);
    }
  };

  const obtenerColorRespuesta = (indice) => {
    if (!mostrarResultado) return "bg-white hover:bg-emerald-100 border-green-400 text-green-800 hover:shadow-md";
    
    if (indice === preguntas[preguntaActual].correcta) {
      return "bg-green-200 border-green-600 text-green-900 shadow-md";
    } else if (indice === respuestaSeleccionada) {
      return "bg-red-200 border-red-600 text-red-900 shadow-md";
    } else {
      return "bg-gray-100 border-gray-400 text-gray-600";
    }
  };

  const esResiduoColocado = (residuoId) => residuosColocados.has(residuoId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 py-4 sm:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700 mb-2">
            🌍 EcoJuegos Interactivos
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Aprende sobre el medio ambiente mientras te diviertes
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Quiz */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-green-200 order-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700 mb-4 sm:mb-6 text-center">
              🌱 Quiz de Conciencia Ambiental
            </h2>
            
            {!finalizado ? (
              <>
                <div className="mb-4 sm:mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs sm:text-sm text-gray-600">
                      Pregunta {preguntaActual + 1} de {preguntas.length}
                    </span>
                    <span className="text-xs sm:text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                      Puntos: {puntuacion}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 sm:h-3 rounded-full transition-all duration-500"
                      style={{ width: `${((preguntaActual + 1) / preguntas.length) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-green-800 mb-4 sm:mb-6 leading-relaxed">
                  {preguntas[preguntaActual].pregunta}
                </h3>
                
                <div className="space-y-2 sm:space-y-3">
                  {preguntas[preguntaActual].opciones.map((opcion, i) => (
                    <button
                      key={i}
                      onClick={() => manejarRespuesta(i)}
                      disabled={mostrarResultado}
                      className={`block w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl border-2 transition-all duration-300 text-left font-medium text-sm sm:text-base transform ${
                        obtenerColorRespuesta(i)
                      } hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed`}
                    >
                      <span className="block">{opcion}</span>
                      {mostrarResultado && i === preguntas[preguntaActual].correcta && (
                        <span className="float-right text-lg">✅</span>
                      )}
                      {mostrarResultado && i === respuestaSeleccionada && i !== preguntas[preguntaActual].correcta && (
                        <span className="float-right text-lg">❌</span>
                      )}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-6 sm:py-8">
                <div className="text-4xl sm:text-6xl mb-4">
                  {puntuacion === preguntas.length ? "🏆" : puntuacion >= preguntas.length / 2 ? "🌟" : "🌱"}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">
                  ¡Quiz Completado!
                </h3>
                <p className="text-lg sm:text-xl text-gray-700 mb-2">
                  Tu puntuación: <strong className="text-green-600">{puntuacion}</strong> de {preguntas.length}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  {puntuacion === preguntas.length 
                    ? "¡Perfecto! Eres un experto en medio ambiente 🌍" 
                    : "Cada paso cuenta para cuidar nuestro planeta 🌱"}
                </p>
                <button
                  onClick={reiniciarTodo}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 font-medium transform hover:scale-105 active:scale-95"
                >
                  🔄 Volver a intentar
                </button>
              </div>
            )}
          </div>

          {/* Juego de Clasificación */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-blue-200 order-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700 mb-4 text-center">
              ♻️ Clasifica los Residuos
            </h2>
            <p className="text-gray-600 text-center mb-4 sm:mb-6 text-xs sm:text-sm">
              {modoInteraccion === 'drag' ? "Arrastra cada residuo al tacho correcto" : 
               modoInteraccion === 'touch' ? "Toca un residuo y luego el tacho correcto" :
               "Arrastra o toca para clasificar"}
            </p>

            {/* Tachos de basura */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {tachos.map((tacho) => (
                <div
                  key={tacho.tipo}
                  onClick={() => clasificarEnTacho(tacho.tipo)}
                  onDragOver={manejarArrastreEncima}
                  onDrop={(e) => manejarSoltar(e, tacho.tipo)}
                  className={`
                    p-4 sm:p-6 lg:p-8 rounded-xl border-3 border-dashed transition-all duration-300 cursor-pointer text-center min-h-[120px] sm:min-h-[150px] flex flex-col justify-center items-center
                    ${tacho.color} ${tacho.hoverColor}
                    ${tachoResaltado === tacho.tipo ? 'scale-105 sm:scale-110 shadow-xl bg-opacity-80 border-solid' : ''}
                    ${tachoResaltado === 'error' ? 'animate-pulse border-red-500 bg-red-100' : ''}
                    ${residuoSeleccionado ? 'hover:scale-105 shadow-lg' : ''}
                    transform hover:shadow-md active:scale-95
                  `}
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">{tacho.emoji}</div>
                  <div className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base leading-tight">
                    {tacho.nombre}
                  </div>
                </div>
              ))}
            </div>

            {/* Residuos */}
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 text-center">
                {residuosColocados.size === residuos.length ? "¡Todos clasificados! 🎉" : "Residuos para clasificar:"}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {residuos.map((residuo) => (
                  <button
                    key={residuo.id}
                    draggable={modoInteraccion !== 'touch' && !esResiduoColocado(residuo.id)}
                    onDragStart={(e) => manejarInicioArrastre(e, residuo)}
                    onClick={() => seleccionarResiduo(residuo)}
                    disabled={esResiduoColocado(residuo.id)}
                    className={`
                      px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transition-all duration-300 font-medium border-2 text-xs sm:text-sm lg:text-base
                      ${esResiduoColocado(residuo.id) 
                        ? 'bg-gray-300 border-gray-400 text-gray-500 cursor-not-allowed opacity-50' 
                        : residuoSeleccionado?.id === residuo.id 
                          ? 'bg-yellow-200 border-yellow-400 scale-105 sm:scale-110 shadow-lg ring-2 ring-yellow-300' 
                          : 'bg-gray-100 border-gray-300 hover:bg-gray-200 hover:shadow-lg cursor-pointer'}
                      ${!esResiduoColocado(residuo.id) ? 'transform hover:scale-105 active:scale-95' : ''}
                    `}
                  >
                    {residuo.nombre}
                    {esResiduoColocado(residuo.id) && <span className="ml-2">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Progreso */}
            <div className="text-center">
              <div className="mb-4">
                <span className="text-base sm:text-lg font-semibold text-gray-700">
                  Progreso: {aciertos} / {residuos.length}
                </span>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 sm:h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(aciertos / residuos.length) * 100}%` }}
                  />
                </div>
              </div>

              {aciertos === residuos.length && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-6 mt-4 transform animate-pulse">
                  <div className="text-3xl sm:text-4xl mb-2">🎉</div>
                  <p className="text-green-700 font-bold text-lg sm:text-xl mb-3">
                    ¡Excelente trabajo!
                  </p>
                  <p className="text-green-600 mb-4 text-sm sm:text-base">
                    Has clasificado correctamente todos los residuos
                  </p>
                  <button
                    onClick={reiniciarTodo}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transition-all duration-300 font-medium transform hover:scale-105 active:scale-95"
                  >
                    🎮 Jugar de nuevo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

       {/* Instrucciones */}
       <div className="mt-6 lg:mt-8 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-xl p-4 sm:p-6">
          <h3 className="font-semibold text-blue-800 mb-3 text-center text-base sm:text-lg">
            💻📱 Cómo Jugar
          </h3>
          <div className="text-center text-xs sm:text-sm text-blue-700">
            <p className="mb-2">
              <strong>Quiz:</strong> Selecciona la respuesta correcta y acumula puntos
            </p>
            <p>
              <strong>Clasificación:</strong> Arrastra o toca los residuos y colócalos en el tacho correcto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcienciaInteractiva;