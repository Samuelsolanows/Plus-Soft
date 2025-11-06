import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Logo y descripción */}
        <div className="footer-about">
          <h2 className="footer-logo">Plus Soft</h2>
          <p>
            Creamos soluciones digitales a la medida.  
            Aplicaciones móviles, sitios web y sistemas de escritorio  
            diseñados para impulsar tu negocio.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div className="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-contact">
          <h3>Contáctanos</h3>
          <p>📍 Colombia, La Guajira</p>
          <p>📞 +57 300 000 0000</p>
          <p>✉️ info@plussoft.com</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Plus Soft. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
