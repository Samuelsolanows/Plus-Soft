import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    celular: "",
    mensaje: "",
  });

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        {/* Información lateral */}
        <div className="contact-info">
          <h3 className="subtitle">CONTÁCTANOS</h3>
          <h2 className="title">¡Escríbenos!<br />Estaremos encantados de atenderte.</h2>

          <div className="info-block">
            <div>
              <h4>Dirección</h4>
              <p>📍 Colombia, Pamplona NS</p>
              <p>Calle 3 #3-450 Barrio El Buque</p>
            </div>
            <div>
              <h4>¿Cómo te podemos ayudar?</h4>
              <p>✉️ info@plussoft.com</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form className="contact-form">
          <h3>Envíanos un mensaje</h3>

          <label>Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre completo"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          />

          <label>Email*</label>
          <input
            type="email"
            placeholder="example@correo.com"
            value={formData.correo}
            onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
          />

          <label>Celular*</label>
          <input
            type="tel"
            placeholder="300 000 0000"
            value={formData.celular}
            onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
          />

          <label>Tu mensaje*</label>
          <textarea
            rows="4"
            placeholder="Escribe aquí tu mensaje"
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
          ></textarea>

          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
