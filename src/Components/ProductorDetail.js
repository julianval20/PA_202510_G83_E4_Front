import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import "./Productores.css";

function ProductorDetail() {
  const { productorId } = useParams();
  const [productor, setProductor] = useState(null);
  const intl = useIntl();

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    const url = userLang.startsWith("es")
      ? "https://raw.githubusercontent.com/UDFJDC-ProgramacionAvanzada/PA_202510_G83_E4_Front/refs/heads/main/src/Mocks/Productores.json"
      : "https://raw.githubusercontent.com/DominicRobayod/PA_202510_G83_E4_Front/refs/heads/main/src/Mocks/EnProductores.json";

    fetch(url)
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
        <p>
          <strong><FormattedMessage id="productores.ubicacion" />:</strong> {productor.ubicacion}
        </p>
        <p>{productor.descripcion}</p>
        <Link to="/productores" className="btn-volver">
          <FormattedMessage id="productores.volver" />
        </Link>
      </div>

      <div className="productor-detail-right">
        <h3><FormattedMessage id="productores.calificar" /></h3>
        <div className="estrellas">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>⭐</span>
          ))}
        </div>
        <textarea
          className="comentario"
          placeholder={intl.formatMessage({ id: "productores.comentario.placeholder" })}
        ></textarea>
        <button className="btn-calificar">
          <FormattedMessage id="productores.calificar.boton" />
        </button>
      </div>
    </div>
  );
}

export default ProductorDetail;
