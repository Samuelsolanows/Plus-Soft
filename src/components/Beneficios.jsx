import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Users, Layers, icons, Brain, BarChart } from "lucide-react";
import "./Beneficios.css";

const beneficiosData = [
  {
    icono: <Zap size={40} color="#007bff" />,
    titulo: "Trabajo eficiente",
    descripcion:
      "Optimizamos los procesos con metodologías ágiles para entregar resultados excepcionales sin demoras.",
  },
  {
    icono: <Shield size={40} color="#007bff" />,
    titulo: "Seguridad garantizada",
    descripcion:
      "Implementamos protocolos de seguridad avanzados que protegen tus datos y los de tus clientes.",
  },
  {
    icono: <Users size={40} color="#007bff" />,
    titulo: "Trabajo en equipo",
    descripcion:
      "Mantenemos comunicación constante contigo para garantizar que cada detalle del proyecto cumpla tus expectativas.",
  },
  {
    icono: <Layers size={40} color="#007bff" />,
    titulo: "Escalabilidad asegurada",
    descripcion:
      "Construimos sistemas modulares que crecen contigo, facilitando la evolución de tus soluciones digitales.",
  },
  {
    icono: <Brain size={40} color="#007bff" />,
    titulo: "Integracion inteligente con IA",
    descripcion:
      "Implementamos soluciones con inteligencia artificial para automatizar procesos, optimizar la interacción con los usuarios y mejorar la eficiencia de tu negocio.",
  },
  {
    icono:<BarChart size={40} color="#007bff"/>,
    titulo: "Escalabilidad y mantenimiento garantizado",
    descripcion: "Nuestras soluciones están pensadas para crecer contigo: actualizables, seguras y fáciles de mantener a largo plazo."
  }
];

const BeneficiosModernos = () => {
  return (
    <section id="beneficios" className="beneficios-modernos">
      <h2>¿Por qué elegir Plus Soft?</h2>

      <div className="beneficios-grid">
        {beneficiosData.map((b, index) => (
          <motion.div
            key={index}
            className="beneficio-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="icono">{b.icono}</div>
            <h3>{b.titulo}</h3>
            <p>{b.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BeneficiosModernos;
