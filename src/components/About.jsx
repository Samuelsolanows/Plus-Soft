import "./About.css";

const About = () => {
  const team = [
    {
      name: "Samuel Solano",
      role: "Fundador & Desarrollador Líder",
      description:
        "Creador de experiencia de usuarios móviles intuitivas y funcionales.",
      image: "/samuel.png",
    },
    {
      name: "Brayan Castillo",
      role: "Desarrollador Backend",
      description:
        "Especialista en arquitecturas escalables y optimización de bases de datos.",
      image: "/brayan.png",
    },
    {
      name: "Yerson Velandia",
      role: "Desarrollador Frontend",
      description:
        "Experto en crear interfaces de usuario atractivas y funcionales.",
      image: "/yerson.png",
    },
  ];

  return (
    <section id="nosotros" className="about">
      <div className="about-container">
        <h2 className="about-title">Sobre Nosotros</h2>
        <p className="about-description">
          En <span>Plus Soft</span> impulsamos la innovación tecnológica creando
          soluciones digitales a la medida. Combinamos creatividad, estrategia y
          tecnología para llevar cada proyecto a un nuevo nivel.
        </p>

        <div className="about-team">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-desc">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
