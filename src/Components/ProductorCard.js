// src/Components/ProductorCard.js
import React from "react";
import "./Productores.css";

function ProductorCard({ productor }) {
  return (
    <div className="productor-card">
      <h3>{productor.nombre}</h3>
      <p className="productor-ubicacion">
        <strong>Ubicación:</strong> {productor.ubicacion}
      </p>
      {productor.foto ? (
        <img
          src={productor.foto}
          alt={productor.nombre}
          className="productor-img"
        />
      ) : (
        <div className="productor-img-placeholder">
          <span>Sin imagen</span>
        </div>
      )}
      <p className="productor-descripcion">{productor.descripcion}</p>
    </div>
  );
}

export default ProductorCard;
