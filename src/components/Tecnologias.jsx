import React, { useState } from "react";
import "./Tecnologias.css";

const Tecnologias = () => {
  const [selected, setSelected] = useState("web");

  const techs = {
    movil: [
      { name: "Kotlin", icon: "/icons/android/kotlin.png" },
      { name: "Android Studio", icon: "/icons/android/androidstudio.png" },
      { name: "Jetpack Compose", icon: "/icons/android/jetpack.png" },
      { name: "Firebase", icon: "/icons/android/firebase.png" },
      { name: "Retrofit", icon: "/icons/android/retrofit.png" },
    ],
    escritorio: [
      { name: "Java", icon: "/icons/escritorio/java.png" },
      { name: "C#", icon: "/icons/escritorio/csharp.png" },
      { name: "Python", icon: "/icons/escritorio/python.png" },
      { name: ".Net", icon: "/icons/escritorio/net.png" },
      { name: "WPF", icon: "/icons/escritorio/wpf.png" },
    ],
    web: [
      { name: "Javascript", icon: "/icons/Web/javascript.png" },
      { name: "Typescript", icon: "/icons/Web/typescript.png" },
      { name: "React.JS", icon: "/icons/Web/react.png" },
      { name: "Node.JS", icon: "/icons/Web/node.png" },
      { name: "CSS", icon: "/icons/Web/css.png" },
      { name: "HTML", icon: "/icons/Web/html.png" },
      { name: "Angular", icon: "/icons/Web/angular.png" },
      { name: "SASS", icon: "/icons/Web/sass.png" },
      { name: "Python", icon: "/icons/escritorio/python.png" },
      { name: "PHP", icon: "/icons/Web/php.png" },
      { name: "Laravel", icon: "/icons/Web/laravel.png" },
      { name: ".Net", icon: "/icons/escritorio/net.png" },
      { name: "Livewire", icon: "/icons/Web/livewire.png" },
      { name: "C#", icon: "/icons/escritorio/csharp.png" },
      { name: "JQuery", icon: "/icons/Web/jquery.png" },
      { name: "Node.JS", icon: "/icons/Web/node.png" },
      { name: "API Rest", icon: "/icons/Web/api.png" },
    ],
    basedatos: [
      { name: "SQL Server", icon: "/icons/DataBase/sql.png" },
      { name: "MYSQL", icon: "/icons/DataBase/mysql.png" },
      { name: "SQLite", icon: "/icons/DataBase/sqlite.png" },
      { name: "FireBase", icon: "/icons/DataBase/firebase.png" },
    ],
    uiux: [
      { name: "Figma", icon: "/icons/ux_ui/figma.png" },
      { name: "Adobe XD", icon: "/icons/ux_ui/xd.png" },
      { name: "Photoshop", icon: "/icons/ux_ui/photoshop.png" },
      { name: "Illustrator", icon: "/icons/ux_ui/illustrator.png" },
    ],
  };

  return (
    <section id="tecnologias" className="technologies">
      <h2 className="technologies-title">Tecnologías</h2>
      <p className="technologies-subtitle">
        Herramientas que usamos para dar vida a cada proyecto.
      </p>

      <div className="tech-buttons">
        <button
          className={`tech-btn ${selected === "web" ? "active" : ""}`}
          onClick={() => setSelected("web")}
        >
          Web
        </button>

        <button
          className={`tech-btn ${selected === "movil" ? "active" : ""}`}
          onClick={() => setSelected("movil")}
        >
          Móvil
        </button>

        <button
          className={`tech-btn ${selected === "escritorio" ? "active" : ""}`}
          onClick={() => setSelected("escritorio")}
        >
          Escritorio
        </button>

        <button
          className={`tech-btn ${selected === "uiux" ? "active" : ""}`}
          onClick={() => setSelected("uiux")}
        >
          UX / UI
        </button>

        <button
          className={`tech-btn ${selected === "basedatos" ? "active" : ""}`}
          onClick={() => setSelected("basedatos")}
        >
          Base de datos
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
