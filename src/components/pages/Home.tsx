import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import FAQSection from './FAQSection';
import ConcienciaInteractiva from './ConcienciaInteractiva'; // <-- si está en la misma carpeta
import PaginaAdultosMayores from './PaginaAdultosMayores';





const SolucionSection = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  // Datos de ejemplo para las soluciones
  const soluciones = [
    {
      src:  '/public/img/Afiches.jpg',
      alt: "Educación ambiental en escuelas",
      caption: "Programas educativos para crear conciencia ambiental desde temprana edad"
    },
    {
      src:  '/public/img/Afiches2.jpg',
      alt: "Limpieza comunitaria",
      caption: "Jornadas de limpieza organizadas por la comunidad local"
    },
    {
      src: '/public/img/Afiches3.jpg',
      alt: "Reciclaje y gestión de residuos",
      caption: "Implementación de sistemas de reciclaje y gestión responsable de residuos"
    },
    {
      src: '/public/img/Afiches4.jpg',
      alt: "Reforestación",
      caption: "Proyectos de reforestación para restaurar ecosistemas naturales"
    },
    {
      src:  '/public/img/Afiches5.jpg',
      alt: "Energías renovables",
      caption: "Promoción del uso de energías limpias y renovables"
    },
    {
      src: '/public/img/Afiche7.jpg',
      alt: "Agricultura sostenible",
      caption: "Técnicas de agricultura orgánica y sostenible para proteger el suelo"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
          <section
            className="h-[100vh] bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: "url('/img/Portada3.avif')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight uppercase drop-shadow-lg">
                Contaminación Ambiental<br />Mercado del Tambo
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
                onClick={() => {
                  const sec = document.getElementById('solucion');
                  sec?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                "Reflexiona Piensa y Toma Conciencia"
              </motion.button>
              <motion.p
                className="mt-4 text-green-300 font-medium tracking-wider uppercase text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Bienvenido
              </motion.p>
            </motion.div>
            
          </section>
    <section>
      {/* Descripción del problema */}
            <section className="py-20 bg-gray-300 relative overflow-hidden">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <h2 className="text-4xl font-extrabold mb-6">Descripción del problema</h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    La desorganización en el funcionamiento del mercado ha generado una serie de
                    consecuencias negativas que afectan gravemente el entorno urbano. Entre ellas se
                    destacan la acumulación de residuos sólidos, el inadecuado manejo de desechos
                    orgánicos, el vertido descontrolado de aguas residuales y la carencia de
                    infraestructura sanitaria adecuada. Esta situación compromete la salud pública,
                    pone en riesgo la seguridad alimentaria y deteriora el equilibrio ambiental de la
                    zona, agravando las condiciones de vida de comerciantes, consumidores y
                    habitantes del sector.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
                  >
                    Read More
                  </motion.button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                  className="rounded-3xl overflow-hidden border-[5px] border-emerald-300"
                >
                  <img
                    src="/img/TamboContaminado.avif"
                    alt="Discusión del problema"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-green-400 to-cyan-400 rounded-full blur-3xl opacity-40 -z-0 -translate-x-1/2 translate-y-1/2" />
            </section>
      
    </section>
         {/* Propuesta */}
         <section id="propuesta" className="bg-gray-100 py-20 px-6">
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold text-green-700 mb-4">
                    Nuestra Propuesta: <span className="text-emerald-500">Mercado Limpio</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    “Mercado Limpio” es una iniciativa comunitaria enfocada en combatir la
                    contaminación del Mercado del Tambo mediante acciones sostenibles,
                    educativas y participativas. Buscamos transformar los hábitos de comerciantes
                    y consumidores a través de incentivos, información y compromiso ambiental.
                  </p>
                  <ul className="text-gray-700 space-y-3 text-sm pl-4 list-disc">
                    <li>Promueve la limpieza y orden de los puestos del mercado.</li>
                    <li>Ofrece acompañamiento y material educativo a los comerciantes.</li>
                    <li>Otorga insignias, premios y visibilidad a quienes adopten buenas prácticas.</li>
                    <li>Fomenta el compromiso ciudadano mediante campañas digitales y eventos locales.</li>
                  </ul>
                </motion.div>
                <motion.div
                  className="rounded-xl overflow-hidden border-4 border-green-300 shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/public/img/MercadoLimpio.jpg"
                    alt="Ejemplo de Mercado Limpio"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </section>

    <section id="solucion" className="py-20 bg-blue-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <motion.h2
      className="text-3xl font-bold text-green-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      ¿Cómo solucionamos este problema?
    </motion.h2>

    <motion.p
      className="text-gray-600 max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Aplicamos una estrategia basada en concientización, participación comunitaria y compromiso
      ambiental, implementando acciones prácticas y educativas.
    </motion.p>

    {/* Galería de infografías */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {soluciones.map((item, idx) => (
        <motion.div
          key={idx}
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          onClick={() => openModal(item)}
        >
          <div className="relative overflow-hidden">
            <motion.img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                <ZoomIn className="text-white w-8 h-8" />
              </motion.div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300">
              {item.caption}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  

    <section id="adultos-mayores">

  <PaginaAdultosMayores />
</section>

    {/* ConcienciaInteractiva */}

<ConcienciaInteractiva />





    {/* Botón de llamada a la acción */}
    <div className="mt-16">
      <motion.button
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        viewport={{ once: true }}
      >
        ¡Quiero Participar!
      </motion.button>
    </div>
  </div>
</section>


      <section>
          {/* Modal para imagen completa */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Imagen completa */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Caption en el modal */}
              <div className="p-6 bg-white">
                <p className="text-gray-700 text-center text-lg">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </section>
 

    {/* Participa */}
    <section id="participa" className="bg-gradient-to-b from-green-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-green-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Participa en la campaña
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          ¡Súmate al cambio! Te invitamos a ser parte de la transformación del Mercado del
          Tambo siguiendo estos pasos simples:
        </motion.p>

        <motion.p
          className="text-emerald-600 font-semibold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          🧑‍🌾 Más de <strong>60 comerciantes</strong> ya se unieron. ¡Faltas tú!
        </motion.p>

        {/* Pasos */}
        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((step, i) => (
            <motion.div
              key={step}
              className="bg-white border border-green-400 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl text-green-600 font-bold mb-2">{step}</div>
              <h3 className="text-lg font-semibold text-green-700 mb-1">
                {step === 1 && 'Inscríbete'}
                {step === 2 && 'Aplica buenas prácticas'}
                {step === 3 && 'Comparte tu progreso'}
                {step === 4 && 'Gana reconocimiento'}
              </h3>
              <p className="text-sm text-gray-700">
                {step === 1 && 'Regístrate en línea o mediante nuestro equipo en campo.'}
                {step === 2 && 'Ordena tu puesto, reduce residuos y mejora el entorno.'}
                {step === 3 && 'Publica fotos o videos usando #PuestoVerde en redes sociales.'}
                {step === 4 && 'Recibe tu insignia digital y participa por premios mensuales.'}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonio y formulario en dos columnas */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-start text-left">
          {/* Testimonio */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="italic text-gray-700">
              “Desde que comencé a separar mis residuos y mantener limpio mi puesto, los clientes me
              felicitan. Me siento orgullosa de ser parte del cambio.”
            </p>
            
            <p className="mt-3 font-semibold text-green-700">— Rosa M., comerciante de verduras</p>
          </motion.div>


          {/* Formulario */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border border-green-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Tu nombre completo"
                className="border border-green-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Nombre del puesto o rubro"
                className="border border-green-300 p-3 rounded-md w-full"
              />
              <input
                type="tel"
                placeholder="Celular o WhatsApp"
                className="border border-green-300 p-3 rounded-md w-full"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold"
              >
                Enviar inscripción
              </button>
            </form>
          </motion.div>
        </div>

        {/* Botón centrado debajo */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
          >
            ¡Quiero Participar!
          </button>
        </motion.div>
      </div>
    </section>


      {/* FAQ */}
      <FAQSection />

    
          {/* Impacto */}
      <section id="impacto" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-green-700 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nuestro Impacto
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gracias a la participación de comerciantes y ciudadanos comprometidos, ya estamos
            generando cambios reales en el Mercado del Tambo.
          </motion.p>
          <div className="grid gap-10 md:grid-cols-3 text-left">
            {[
              { value: '+75', label: 'Puestos participantes' },
              { value: '+200kg', label: 'de residuos recolectados' },
              { value: '+10', label: 'actividades comunitarias realizadas' },
            ].map((item, i) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl font-extrabold text-emerald-500">{item.value}</h3>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {['Impacto1.jpg', 'Impacto2.jpg', 'Impacto3.jpg'].map((img, i) => (
              <motion.img
                key={img}
                src={`/img/${img}`} // ✅ Corrección aquí
                alt={`Impacto ${i + 1}`}
                className="rounded-lg shadow-lg object-cover w-full h-64"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>
      </section>

          {/* Testimonios */}
          <section id="testimonios" className="bg-emerald-100 py-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <motion.h2
                className="text-4xl font-bold text-green-700 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Testimonios
              </motion.h2>
              <motion.p
                className="text-gray-700 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Escucha las voces de quienes ya están haciendo la diferencia en el Mercado del Tambo.
              </motion.p>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    text:
                      '“Antes mi puesto era un caos. Ahora, con la guía de Mercado Limpio, los clientes se sienten más cómodos y yo también.”',
                    author: '– Carmen M., comerciante',
                  },
                  {
                    text:
                      '“Me siento parte de un cambio. Limpiar mi área me hizo sentir más orgulloso de lo que vendo y del lugar donde trabajo.”',
                    author: '– Julio R., vendedor de frutas',
                  },
                  {
                    text:
                      '“Ahora mis hijos vienen conmigo al mercado sin miedo. Todo está más limpio y seguro. Gracias por esta campaña.”',
                    author: '– Rosa V., cliente frecuente',
                  },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-gray-700 italic">{t.text}</p>
                    <p className="mt-4 font-semibold text-green-700">{t.author}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Aprende más */}
        <section id="aprende" className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold text-green-700 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Aprende más
            </motion.h2>
            <motion.p
              className="text-gray-700 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Descubre consejos rápidos para reducir la contaminación y hacer de tu puesto o
              visita al mercado una experiencia más saludable y responsable.
            </motion.p>

            {(() => {
              const tipsIniciales = [
                {
                  icon: '♻️',
                  title: 'Separa tus residuos',
                  text: 'Usa tachos diferenciados para residuos orgánicos, reciclables y no reciclables.',
                },
                {
                  icon: '🧼',
                  title: 'Limpia tu área diariamente',
                  text: 'Mantén tu puesto libre de restos, agua estancada o desechos.',
                },
                {
                  icon: '🌿',
                  title: 'Reduce el uso de plásticos',
                  text: 'Prefiere bolsas reutilizables o biodegradables.',
                },
              ];

              const tipsExtra = [
                {
                  icon: '💧',
                  title: 'Usa agua de forma responsable',
                  text: 'Evita desperdiciar agua al lavar tus productos o tu puesto.',
                },
                {
                  icon: '🛍️',
                  title: 'Promueve envases reutilizables',
                  text: 'Motiva a tus clientes a traer sus propios recipientes.',
                },
                {
                  icon: '📣',
                  title: 'Educa a otros',
                  text: 'Comparte estos consejos con otros comerciantes y visitantes.',
                },
              ];

              const [verMas, setVerMas] = useState(false);
              const tipsMostrar = verMas ? [...tipsIniciales, ...tipsExtra] : tipsIniciales;

              return (
                <>
                  <div className="grid gap-8 md:grid-cols-3 text-left">
                    {tipsMostrar.map((tip, i) => (
                      <motion.div
                        key={i}
                        className="bg-emerald-50 p-6 rounded-xl shadow-sm border border-green-400 hover:shadow-lg transition"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-lg font-semibold text-green-700 mb-2">
                          {tip.icon} {tip.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{tip.text}</p>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    className="mt-12 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => setVerMas(!verMas)}
                  >
                    {verMas ? 'Ver menos consejos' : 'Ver más consejos'}
                  </motion.button>
                </>
              );
            })()}
          </div>
        </section>
          {/* Sobre Nosotros */}
          <section id="nosotros" className="bg-emerald-100 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                className="text-4xl font-bold text-green-700 mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Sobre Nosotros
              </motion.h2>
              <motion.p
                className="text-gray-700 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Somos un equipo comprometido con la mejora del entorno ambiental en el Mercado
                del Tambo. Nuestra misión es sensibilizar a comerciantes y consumidores a través
                de acciones educativas, participativas y sostenibles que transformen el mercado
                en un espacio limpio, seguro y responsable.
              </motion.p>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {[
                  {
                    icon: '🌱',
                    title: 'Visión',
                    text: 'Un mercado modelo que promueve la conciencia ambiental y el bienestar colectivo.',
                  },
                  {
                    icon: '🎯',
                    title: 'Misión',
                    text: 'Promover el cambio de hábitos en el manejo de residuos mediante educación y participación comunitaria.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="bg-emerald-50 p-6 rounded-xl shadow-md"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-lg font-semibold text-green-700 mb-2">
                      {item.icon} {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
    </>
  );
};

export default SolucionSection;