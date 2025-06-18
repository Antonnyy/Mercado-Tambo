import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import FAQSection from './FAQSection'; // ✅ misma carpeta

const Home = () => {
  const { t } = useTranslation();
  return (
    
    <main className="pt-24" id="home">



<section
        className="h-[90vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/Portada3.avif')"
        }}
      >
        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Contenido central animado */}
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
              const section = document.getElementById('solucion');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Slide
          </motion.button>

          <motion.p
            className="mt-4 text-green-300 font-medium tracking-wider uppercase text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Welcome to
          </motion.p>
        </motion.div>
      </section>


<section className="py-20 bg-gray-300">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

    {/* Texto animado */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-4xl font-extrabold mb-6">Descripción del problema</h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        La desorganización en el funcionamiento del mercado ha generado una serie de consecuencias negativas que afectan gravemente el entorno urbano. Entre ellas se destacan la acumulación de residuos sólidos, el inadecuado manejo de desechos orgánicos, el vertido descontrolado de aguas residuales y la carencia de infraestructura sanitaria adecuada. Esta situación compromete la salud pública, pone en riesgo la seguridad alimentaria y deteriora el equilibrio ambiental de la zona, agravando las condiciones de vida de comerciantes, consumidores y habitantes del sector.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
      >
        Read More
      </motion.button>
    </motion.div>

    {/* Imagen animada */}
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

  {/* Círculo decorativo */}
  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-green-400 to-cyan-400 rounded-full blur-3xl opacity-40 -z-0 translate-x-[-50%] translate-y-[50%]" />
</section>


<section id="solucion" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    {/* Título y descripción con fade in */}
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
      Aplicamos una estrategia basada en concientización, participación comunitaria
      y compromiso ambiental, implementando acciones prácticas y educativas.
    </motion.p>

    {/* Tarjetas animadas */}
    <div className="grid gap-8 md:grid-cols-2">
      
      {[
        {
          title: '📱 Campaña en redes sociales',
          text: 'Reels, memes y videos educativos que fomentan el cuidado del mercado y el manejo de residuos.'
        },
        {
          title: '🧼 Jornadas comunitarias',
          text: 'Acciones colectivas de limpieza organizadas con vecinos, comerciantes y voluntarios.'
        },
        {
          title: '🏆 Concurso “Mi Puesto Verde”',
          text: 'Participa mostrando tu puesto limpio y gana premios e insignias digitales.'
        },
        {
          title: '✅ Certificación ambiental',
          text: 'Reconocemos los esfuerzos sostenidos de los participantes con un sello “Puesto Verde”.'
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-green-700 mb-2">{item.title}</h3>
          <p className="text-gray-700 text-sm">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section id="propuesta" className="bg-gray-300 py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* Texto con animación desde la izquierda */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-green-700 mb-6">
        Nuestra Propuesta: <span className="text-emerald-500">Puesto Verde</span>
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        “Puesto Verde” es una iniciativa comunitaria enfocada en combatir la contaminación
        del Mercado del Tambo mediante acciones sostenibles, educativas y participativas.
        Buscamos transformar los hábitos de comerciantes y consumidores a través de incentivos,
        información y compromiso ambiental.
      </p>

      <ul className="text-gray-700 space-y-3 text-sm pl-4 list-disc">
        <li>Promueve la limpieza y orden de los puestos del mercado.</li>
        <li>Ofrece acompañamiento y material educativo a los comerciantes.</li>
        <li>Otorga insignias, premios y visibilidad a quienes adopten buenas prácticas.</li>
        <li>Fomenta el compromiso ciudadano mediante campañas digitales y eventos locales.</li>
      </ul>
    </motion.div>

    {/* Imagen con animación desde la derecha */}
    <motion.div
      className="rounded-xl overflow-hidden border-4 border-green-300 shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <img
        src="/img/puesto-verde-demo.jpg"
        alt="Ejemplo de Puesto Verde"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
</section>


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
      className="text-gray-600 max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      ¡Súmate al cambio! Te invitamos a ser parte de la transformación del Mercado del Tambo
      siguiendo estos pasos simples:
    </motion.p>

    <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
      {[1, 2, 3, 4].map((step, index) => (
        <motion.div
          key={step}
          className="bg-white border border-green-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl text-green-600 font-bold mb-2">{step}</div>
          <h3 className="text-lg font-semibold text-green-700 mb-1">
            {step === 1 && 'Inscríbete'}
            {step === 2 && 'Aplica buenas prácticas'}
            {step === 3 && 'Comparte tu progreso'}
            {step === 4 && 'Gana reconocimiento'}
          </h3>
          <p className="text-sm text-gray-600">
            {step === 1 && 'Regístrate en línea o mediante nuestro equipo en campo.'}
            {step === 2 && 'Ordena tu puesto, reduce residuos y mejora el entorno.'}
            {step === 3 && 'Publica fotos o videos usando #PuestoVerde en redes sociales.'}
            {step === 4 && 'Recibe tu insignia digital y participa por premios mensuales.'}
          </p>
        </motion.div>
      ))}
    </div>

    <motion.button
      className="mt-12 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      ¡Quiero Participar!
    </motion.button>
  </div>
</section>

<FAQSection />

<section id="impacto" className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    
    {/* Título y texto inicial */}
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
      Gracias a la participación de comerciantes y ciudadanos comprometidos,
      ya estamos generando cambios reales en el Mercado del Tambo.
    </motion.p>

    {/* Estadísticas */}
    <div className="grid gap-10 md:grid-cols-3 text-left">
      {[
        { value: '+75', label: 'Puestos participantes' },
        { value: '+200kg', label: 'de residuos recolectados' },
        { value: '+10', label: 'actividades comunitarias realizadas' },
      ].map((item, index) => (
        <motion.div
          key={item.value}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-extrabold text-emerald-500">{item.value}</h3>
          <p className="text-gray-600">{item.label}</p>
        </motion.div>
      ))}
    </div>

    {/* Galería de imágenes */}
    <div className="mt-16 grid gap-6 md:grid-cols-3">
      {['cambio1.jpg', 'cambio2.jpg', 'cambio3.jpg'].map((img, i) => (
        <motion.img
          key={img}
          src={`/img/${img}`}
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

<section id="testimonios" className="bg-emerald-100 py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    
    {/* Título con animación */}
    <motion.h2
      className="text-4xl font-bold text-green-700 mb-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Testimonios
    </motion.h2>

    {/* Subtítulo */}
    <motion.p
      className="text-gray-700 max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      Escucha las voces de quienes ya están haciendo la diferencia en el Mercado del Tambo.
    </motion.p>

    {/* Testimonios animados */}
    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          text: "“Antes mi puesto era un caos. Ahora, con la guía de Puesto Verde, los clientes se sienten más cómodos y yo también.”",
          author: "– Carmen M., comerciante"
        },
        {
          text: "“Me siento parte de un cambio. Limpiar mi área me hizo sentir más orgulloso de lo que vendo y del lugar donde trabajo.”",
          author: "– Julio R., vendedor de frutas"
        },
        {
          text: "“Ahora mis hijos vienen conmigo al mercado sin miedo. Todo está más limpio y seguro. Gracias por esta campaña.”",
          author: "– Rosa V., cliente frecuente"
        }
      ].map((testimonio, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 italic">{testimonio.text}</p>
          <p className="mt-4 font-semibold text-green-700">{testimonio.author}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section id="aprende" className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">

    {/* Título */}
    <motion.h2
      className="text-4xl font-bold text-green-700 mb-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Aprende más
    </motion.h2>

    {/* Subtítulo */}
    <motion.p
      className="text-gray-700 max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
    >
      Descubre consejos rápidos para reducir la contaminación y hacer de tu puesto o visita al mercado una experiencia más saludable y responsable.
    </motion.p>

    {/* Tips con animación individual */}
    <div className="grid gap-8 md:grid-cols-3 text-left">
      {[
        {
          icon: '♻️',
          title: 'Separa tus residuos',
          text: 'Usa tachos diferenciados para residuos orgánicos, reciclables y no reciclables. ¡Es más fácil de lo que parece!',
        },
        {
          icon: '🧼',
          title: 'Limpia tu área diariamente',
          text: 'Mantén tu puesto libre de restos, agua estancada o desechos. Refleja tu compromiso con tus clientes.',
        },
        {
          icon: '🌿',
          title: 'Reduce el uso de plásticos',
          text: 'Prefiere bolsas reutilizables o biodegradables. Tus clientes te lo agradecerán y el planeta también.',
        },
      ].map((tip, i) => (
        <motion.div
          key={i}
          className="bg-emerald-50 p-6 rounded-xl shadow-sm border border-green-200 hover:shadow-lg transition"
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

    {/* Botón */}
    <motion.button
      className="mt-12 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      Ver más consejos
    </motion.button>
  </div>
</section>

<section id="nosotros" className="bg-emerald-100 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* Título */}
    <motion.h2
      className="text-4xl font-bold text-green-700 mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Sobre Nosotros
    </motion.h2>

    {/* Descripción */}
    <motion.p
      className="text-gray-700 max-w-3xl mx-auto leading-relaxed"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
    >
      Somos un equipo comprometido con la mejora del entorno ambiental en el Mercado del Tambo.
      Nuestra misión es sensibilizar a comerciantes y consumidores a través de acciones educativas,
      participativas y sostenibles que transformen el mercado en un espacio limpio, seguro y responsable.
    </motion.p>

    {/* Cartas de misión y visión */}
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
          <h3 className="text-lg font-semibold text-green-700 mb-2">{item.icon} {item.title}</h3>
          <p className="text-sm text-gray-600">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </main>
  );
};

export default Home;
