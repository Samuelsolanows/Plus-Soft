import "./Hero.css";
import heroLogo from "../assets/logo.png";

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h2>
          Desarrollamos <span>Software</span> para potenciar tu{" "}
          <span>Negocio</span>
        </h2>
        <p>
          Creamos soluciones tecnológicas personalizadas que optimizan tus
          procesos, mejoran la productividad y te permiten adaptarte
          rápidamente a las demandas del mercado. Con un enfoque en la
          innovación y las últimas tecnologías, ayudamos a que tu negocio
          alcance nuevos niveles de competitividad y éxito.
        </p>
        <div className="hero-buttons">
          <a href="#nosotros" className="btn-primary">
            Sobre nosotros
          </a>
          <a href="#contacto" className="btn-secondary">
            Contáctanos
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroLogo} alt="Logo Plus Soft" />
      </div>
    </section>
  );
};

export default Hero;
