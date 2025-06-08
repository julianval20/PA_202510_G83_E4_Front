// src/Components/ProductoCard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Productos.css";

function ProductoCard({ producto, agregarAlCarrito }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  const handleAgregar = () => {
    agregarAlCarrito(producto, cantidad);
    setCantidad(1);
    cerrarModal();
  };

  return (
    <div className="producto-card">
      <h3>{producto.nombre}</h3>
      <p className="categoria">
        <strong>Categoría:</strong> {producto.categoria}
      </p>
      <img
        src={producto.foto}
        alt={producto.nombre}
        className="producto-img"
      />
      <div className="estrellas">★★★★★</div>
      <p className="precio">${producto.precio.toLocaleString()} COP</p>
      <p className="descripcion">{producto.descripcion}</p>

      <div className="botones-producto">
        <button className="boton boton-carrito" onClick={abrirModal}>
          Añadir al carrito
        </button>
        <Link to={`/productos/${producto.id}`} className="boton boton-info">
          Ver más información
        </Link>
      </div>

      {/* Modal simple */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>¿Cuántos deseas añadir?</h3>
            <input
              type="number"
              min="1"
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value) || 1)}
            />
            <div className="modal-botones">
              <button className="boton-carrito" onClick={handleAgregar}>
                Confirmar
              </button>
              <button className="boton-info" onClick={cerrarModal}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductoCard;
