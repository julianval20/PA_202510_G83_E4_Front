// src/Components/Productores.js
import React, { useEffect, useState } from "react";
import ProductorCard from "./ProductorCard";
import "./Productores.css";

function Productores() {
  const [productores, setProductores] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/UDFJDC-ProgramacionAvanzada/PA_202510_G83_E4_Front/refs/heads/main/src/Mocks/Productores.js"
    )
      .then((res) => res.json())
      .then((data) => setProductores(data));
  }, []);

  const filtrarProductores = () => {
    const termino = busqueda.toLowerCase();
    return productores.filter(
      (productor) =>
        productor.nombre.toLowerCase().includes(termino) ||
        productor.ubicacion.toLowerCase().includes(termino)
    );
  };

  return (
    <div className="productores-container">
      <h2 className="productores-titulo">Productores</h2>

      <div className="productores-filtros">
        <input
          type="text"
          placeholder="Buscar por nombre o ubicación..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="input-busqueda"
        />
      </div>

      <section className="productores-grid">
        {filtrarProductores().map((productor) => (
          <ProductorCard key={productor.id} productor={productor} />
        ))}
      </section>
    </div>
  );
}

export default Productores;
