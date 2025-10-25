import "./Servicios.css";

const serviciosData = [
  {
    titulo: "Desarrollo Web",
    descripcion:
      "Ofrecemos soluciones de desarrollo web personalizadas que transforman tus ideas en realidad. Desde sitios web hasta aplicaciones empresariales, garantizamos eficiencia, escalabilidad y calidad.",
    imagen: "/servicios/web.png",
  },
  {
    titulo: "Diseño UI / UX",
    descripcion:
      "Creamos experiencias visuales únicas enfocadas en la usabilidad y la interacción del usuario. Convertimos tus ideas en diseños atractivos, modernos y funcionales.",
    imagen: "/servicios/uiux.png",
  },
  {
    titulo: "Desarrollo Escritorio",
    descripcion:
      "Llevamos tus ideas al siguiente nivel con aplicaciones de escritorio personalizadas, desde herramientas de productividad hasta sistemas empresariales robustos.",
    imagen: "/servicios/escritorio.png",
  },
  {
    titulo: "Gestión de Base de Datos",
    descripcion:
      "Gestionamos tus datos con eficiencia y seguridad, ofreciendo soluciones de base de datos personalizadas para tu negocio.",
    imagen: "/servicios/basedatos.png",
  },
  {
    titulo: "Desarrollo Móvil",
    descripcion:
      "Creamos aplicaciones móviles potentes e intuitivas, adaptadas a tus necesidades, asegurando una experiencia de usuario óptima.",
    imagen: "/servicios/movil.png",
  },
  {
    titulo: "Desarrollo de API REST",
    descripcion:
      "Creamos APIs REST seguras y escalables que facilitan la integración entre sistemas, asegurando un flujo eficiente de datos.",
    imagen: "/servicios/api.png",
  },
  {
    titulo: "Integración de IA",
    descripcion:
      "Incorporamos inteligencia artificial en tus procesos para optimizar la eficiencia y apoyar la toma de decisiones estratégicas.",
    imagen: "/servicios/ia.jpg",
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="servicios">
      <h2>Servicios</h2>

      <div className="servicios-grid">
        {serviciosData.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <img src={servicio.imagen} alt={servicio.titulo} />
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
            <a href="#contacto" className="btn-servicio">
              Quiero saber más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
