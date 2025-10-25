import React, { useState } from "react";
import "./Tecnologias.css";

const Tecnologias = () => {
  const [selected, setSelected] = useState("movil");

  const techs = {
    movil: [
      { name: "Kotlin", icon: "/icons/kotlin.png" },
      { name: "Android Studio", icon: "/icons/androidstudio.png" },
      { name: "Jetpack Compose", icon: "/icons/jetpack.png" },
      { name: "Firebase", icon: "/icons/firebase.png" },
      { name: "Retrofit", icon: "/icons/retrofit.png" },
    ],
    escritorio: [
      { name: "Java", icon: "/icons/java.png" },
      { name: "C#", icon: "/icons/csharp.png" },
      { name: "Python", icon: "/icons/python.png" },
      { name: ".Net", icon: "/icons/net.png" },
      { name: "WPF", icon: "/icons/wpf.png" },
    ],
    web: [
      { name: "Javascript", icon: "/icons/javascript.png" },
      { name: "Typescript", icon: "/icons/typescript.png" },
      { name: "React.JS", icon: "/icons/react.png" },
      { name: "Node.JS", icon: "/icons/node.png" },
      { name: "CSS", icon: "/icons/css.png" },
      { name: "HTML", icon: "/icons/html.png" },
      { name: "Angular", icon: "/icons/angular.png" },
      { name: "SASS", icon: "/icons/sass.png" },
      { name: "Razor", icon: "/icons/razor.png" },
    ],
    basedatos: [
      { name: "SQL Server", icon: "/icons/sql.png" },
      { name: "MYSQL", icon: "/icons/mysql.png" },
      { name: "SQLite", icon: "/icons/sqlite.png" },
      { name: "FireBase", icon: "/icons/firebase.png" },
    ],
    uiux: [
      { name: "Figma", icon: "/icons/figma.png" },
      { name: "Adobe XD", icon: "/icons/xd.png" },
      { name: "Photoshop", icon: "/icons/photoshop.png" },
      { name: "Illustrator", icon: "/icons/illustrator.png" },
    ],
  };

  return (
    <section className="technologies">
      <h2 className="technologies-title">Tecnologías</h2>
      <p className="technologies-subtitle">
        Herramientas que usamos para dar vida a cada proyecto.
      </p>

      <div className="tech-buttons">
        <button
          className={`tech-btn ${selected === "movil" ? "active" : ""}`}
          onClick={() => setSelected("movil")}
        >
          Móvil
        </button>

        <button
          className={`tech-btn ${selected === "uiux" ? "active" : ""}`}
          onClick={() => setSelected("uiux")}
        >
          UX / UI
        </button>

        <button
          className={`tech-btn ${selected === "escritorio" ? "active" : ""}`}
          onClick={() => setSelected("escritorio")}
        >
          Escritorio
        </button>

        <button
          className={`tech-btn ${selected === "web" ? "active" : ""}`}
          onClick={() => setSelected("web")}
        >
          web
        </button>

        <button
          className={`tech-btn ${selected === "basedatos" ? "active" : ""}`}
          onClick={() => setSelected("basedatos")}
        >
          basedatos
        </button>
      </div>

      <div className="tech-grid">
        {techs[selected].map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tecnologias;
