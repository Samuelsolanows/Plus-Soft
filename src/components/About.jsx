import "./About.css";

const About = () => {
  const team = [
    {
      name: "Samuel Solano",
      role: "Fundador & Desarrollador Líder",
      description:
        "Apasionado por crear soluciones tecnológicas innovadoras con enfoque en desarrollo móvil y web.",
      image: "/samuel.png",
    },
    {
      name: "Plus Soft",
      role: "Equipo de Innovación",
      description:
        "Un grupo de desarrolladores, diseñadores y analistas dedicados a impulsar la transformación digital local.",
      image: "/samuel.png",
    },
    {
      name: "Plus Soft",
      role: "Equipo de Innovación",
      description:
        "Un grupo de desarrolladores, diseñadores y analistas dedicados a impulsar la transformación digital local.",
      image: "/samuel.png",
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
