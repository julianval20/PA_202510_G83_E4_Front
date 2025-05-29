// src/Components/Productos.js
import React, { useEffect, useState } from "react";
import ProductoCard from "./ProductoCard";
import "./Productos.css";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/DominicRobayod/f78edc40c304eef682699b3eddf03271/raw/9ba7b5671f853c7c209e6387658b24c914308d5b/Productos.json")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <section className="productos">
      {productos.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </section>
  );
}

export default Productos;
