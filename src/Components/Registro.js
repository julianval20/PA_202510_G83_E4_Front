import React, { useState } from "react";
import "./Registro.css";
import fondo from "../Images/registro-mujer.webp"; // 👈 Importa la imagen

function Registro() {
  const [formData, setFormData] = useState({
    username: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.contrasena !== formData.confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="registro-container">
      {/* Capa de fondo */}
      <div
        className="fondo-desenfocado"
        style={{ backgroundImage: `url(${fondo})` }}
      ></div>

      {/* Formulario */}
      <div className="registro-right">
        <form onSubmit={handleSubmit} className="registro-form">
          <h2>Registrarse</h2>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />

          <label>Contraseña:</label>
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
            required
          />

          <label>Confirmar contraseña:</label>
          <input
            type="password"
            name="confirmarContrasena"
            value={formData.confirmarContrasena}
            onChange={handleChange}
            required
          />

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
