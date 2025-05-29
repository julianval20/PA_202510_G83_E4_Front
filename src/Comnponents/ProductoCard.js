// src/Components/ProductoCard.js
import React from "react";
import "./Productos.css";

function ProductoCard({ producto }) {
  return (
    <div className="producto-card">
      <h3>{producto.nombre}</h3>
      <img src={producto.foto} alt={producto.nombre} className="producto-img" />
      <div className="estrellas">★★★★★</div>
      <p className="precio">${producto.precio.toLocaleString()} COP</p>
      <p className="descripcion">{producto.descripcion}</p>
    </div>
  );
}

export default ProductoCard;
