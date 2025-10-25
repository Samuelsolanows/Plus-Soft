import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
          <img src="/logo.png" alt="Logo Plus Soft" />
          <h1>Plus Soft</h1>
        
      </div>

      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#contacto" className="btn-contacto">
          Contáctanos
        </a>
      </nav>
    </header>
  );
};

export default Header;
