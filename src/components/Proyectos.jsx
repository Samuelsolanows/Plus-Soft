import "./Proyectos.css";

const Proyectos = () => {
  const projects = [
    {
      id: 1,
      title: "The movie App",
      description:
        "Aplicación móvil en Kotlin con reseña de todas las peliculas",
      image: "/proyectos/themovie.png",
      link: "#",
    },
    {
      id: 2,
      title: "FrutiHub",
      description:
        "Aplicacion movil para un restaurante con delivery incluido",
      image: "/proyectos/FrutiHub.png",
      link: "#",
    },
    {
      id: 3,
      title: "PayCad",
      description:
        "Aplicacion de manejo de dinero y finazas personales.",
      image: "/proyectos/paycad.png",
      link: "#",
    }
  ];

  return (
    <section id="proyectos" className="projects-section">
      <h2 className="projects-title">Proyectos Destacados</h2>
      <p className="projects-subtitle">
        Soluciones tecnológicas desarrolladas con pasión y enfoque en resultados.
      </p>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-btn">
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
