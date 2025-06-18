import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-green-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-green-700 font-semibold"
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp size={18} /> : <FaChevronDown size={18} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.p
            className="text-gray-700 mt-3 text-sm leading-relaxed pl-1 pr-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-green-700 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Preguntas Frecuentes
        </motion.h2>

        <div className="text-left space-y-4">
          <FAQItem
            question="¿Quiénes pueden participar en la campaña Puesto Verde?"
            answer="Todos los comerciantes del Mercado del Tambo que deseen mejorar sus prácticas ambientales pueden unirse sin costo."
          />
          <FAQItem
            question="¿Qué beneficios obtengo al participar?"
            answer="Visibilidad, reconocimiento, certificación como Puesto Verde, acceso a capacitaciones y posibles premios."
          />
          <FAQItem
            question="¿Necesito registrarme para participar?"
            answer="Sí. Puedes registrarte directamente en esta página o en los stands informativos dentro del mercado."
          />
          <FAQItem
            question="¿Cómo sé si estoy haciendo bien mi proceso de limpieza?"
            answer="Nuestro equipo hará visitas de seguimiento y te brindará guías visuales con buenas prácticas."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
