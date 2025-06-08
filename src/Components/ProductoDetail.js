// src/Components/ProductoDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Productos.css";

function ProductoDetail() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/UDFJDC-ProgramacionAvanzada/PA_202510_G83_E4_Front/main/src/Mocks/Productos.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(productoId));
        setProducto(found);
      })
      .catch((error) => console.error("Error al cargar datos:", error));
  }, [productoId]);

  if (!producto) {
    return <div className="productos-container">Cargando...</div>;
  }

  return (
    <div className="producto-detail-container">
      <div className="producto-detail-left">
     <div className="producto-imagen-contenedor">
        {producto.foto ? (
          <img
            src={producto.foto}
            alt={producto.nombre}
            className="producto-detail-img"
          />
        ) : (
          <div className="producto-img-placeholder">
            <span>Sin imagen</span>
          </div>
        )}
      </div>


        <h2>{producto.nombre}</h2>
        <p><strong>Precio:</strong> ${producto.precio.toLocaleString()} COP</p>
        <p><strong>Descripción:</strong> {producto.descripcion}</p>
        <Link to="/tienda" className="btn-volver">
          Volver
        </Link>
      </div>
      <div className="producto-detail-right">
        <h3>Calificar Producto</h3>
        <div className="estrellas">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>⭐</span>
          ))}
        </div>
        <textarea
          className="comentario"
          placeholder="Escribe tu comentario aquí..."
        ></textarea>
        <button className="btn-calificar">Enviar Calificación</button>
      </div>
    </div>
  );
}

export default ProductoDetail;
