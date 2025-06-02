// src/Components/ProductoCard.js
import React, { useEffect, useState } from "react";
import ProductoCard from "./ProductoCard";
import "./Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [ordenPrecio, setOrdenPrecio] = useState("none");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/UDFJDC-ProgramacionAvanzada/PA_202510_G83_E4_Front/refs/heads/main/src/Mocks/Productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  const filtrarProductos = () => {
    let filtrados = productos.filter((producto) => {
      const termino = busqueda.toLowerCase();
      return (
        producto.nombre.toLowerCase().includes(termino) ||
        producto.categoria.toLowerCase().includes(termino)
      );
    });

    if (ordenPrecio === "asc") {
      filtrados.sort((a, b) => a.precio - b.precio);
    } else if (ordenPrecio === "desc") {
      filtrados.sort((a, b) => b.precio - a.precio);
    }

    return filtrados;
  };

  return (
    <div className="productos-container">
      <h2 className="productos-titulo">Productos</h2>

      <div className="productos-filtros">
        <input
          type="text"
          placeholder="Buscar por nombre o categoría..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="input-busqueda"
        />

        <select
          value={ordenPrecio}
          onChange={(e) => setOrdenPrecio(e.target.value)}
          className="select-precio"
        >
          <option value="none">Ordenar por precio</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>
      </div>

      <section className="productos">
        {filtrarProductos().map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </div>
  );
}

export default Productos;
