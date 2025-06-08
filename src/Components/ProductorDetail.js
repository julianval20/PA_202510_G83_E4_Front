// src/Components/ProductorDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Productores.css";

function ProductorDetail() {
  const { productorId } = useParams();
  const [productor, setProductor] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/UDFJDC-ProgramacionAvanzada/PA_202510_G83_E4_Front/refs/heads/main/src/Mocks/Productores.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(productorId));
        setProductor(found);
      });
  }, [productorId]);

  if (!productor) {
    return <div className="productores-container">Cargando...</div>;
  }

  return (
    <div className="productor-detail-container">
      <div className="productor-detail-left">
        {productor.foto ? (
          <img
            src={productor.foto}
            alt={productor.nombre}
            className="productor-detail-img"
          />
        ) : (
          <div className="productor-detail-img-placeholder">
            <span>Sin imagen</span>
          </div>
        )}
        <h2>{productor.nombre}</h2>
        <p><strong>Ubicación:</strong> {productor.ubicacion}</p>
        <p>{productor.descripcion}</p>
        <Link to="/productores" className="btn-volver">
          Volver
        </Link>
      </div>
      <div className="productor-detail-right">
        <h3>Calificar Productor</h3>
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

export default ProductorDetail;