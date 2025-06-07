
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Productos.css";

function ProductoDetail() {
  // @hook Obtiene el parámetro productoId desde la URL
  const { productoId } = useParams();

  // @state Estado para almacenar el producto cargado
  const [producto, setProducto] = useState(null);

  // @hook Efecto para cargar el producto al montar el componente
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/DominicRobayod/PA_202510_G83_E4_Front/refs/heads/main/src/Mocks/Productos.js"
    )
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(productoId));
        setProducto(found);
      });
  }, [productoId]);

  // @condition Si aún no se ha cargado el producto, mostrar mensaje de carga
  if (!producto) {
    return <div className="productos-container">Cargando...</div>;
  }

  return (
    <div className="producto-detail-container">
      {/* Sección izquierda con imagen y detalles del producto */}
      <div className="producto-detail-left">
        {/* Imagen del producto o placeholder si no hay imagen */}
        {producto.foto ? (
          <img
            src={producto.foto}
            alt={producto.nombre}
            className="producto-detail-img"
          />
        ) : (
          <div className="producto-detail-img-placeholder">
            <span>Sin imagen</span>
          </div>
        )}

        {/* @element Nombre del producto */}
        <h2>{producto.nombre}</h2>

        {/* @element Precio del producto */}
        <p><strong>Precio:</strong> ${producto.precio}</p>

        {/* @element Descripción del producto */}
        <p><strong>Descripción:</strong> {producto.descripcion}</p>

        {/* @button Botón para volver a la lista de productos */}
        <Link to="/productos" className="btn-volver">
          Volver
        </Link>
      </div>

      {/* Sección derecha con calificación y comentarios */}
      <div className="producto-detail-right">
        <h3>Calificar Producto</h3>

        {/* @element Sección de estrellas para calificación */}
        <div className="estrellas">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>⭐</span>
          ))}
        </div>

        {/* @element Campo para comentario del usuario */}
        <textarea
          className="comentario"
          placeholder="Escribe tu comentario aquí..."
        ></textarea>

        {/* @button Botón para enviar la calificación */}
        <button className="btn-calificar">Enviar Calificación</button>
      </div>
    </div>
  );
}

export default ProductoDetail;