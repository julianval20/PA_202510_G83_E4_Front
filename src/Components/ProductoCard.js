// src/Components/ProductoCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./Productos.css";

function ProductoCard({ producto }) {
  return (
    <div className="producto-card">
      <h3>{producto.nombre}</h3>
      <p className="categoria"><strong>Categoría:</strong> {producto.categoria}</p>

      <img
        src={producto.foto}
        alt={producto.nombre}
        className="producto-img"
      />
      <div className="estrellas">★★★★★</div>
      <p className="precio">${producto.precio.toLocaleString()} COP</p>
      <p className="descripcion">{producto.descripcion}</p>

      <div className="botones-producto">
        <button className="boton boton-carrito">Añadir al carrito</button>
        {/* ✅ ENLACE corregido a /productos/${producto.id} */}
        <Link to={`/productos/${producto.id}`} className="boton boton-info">
          Ver más información
        </Link>
      </div>
    </div>
  );
}

export default ProductoCard;
