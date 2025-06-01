import React, { useState } from 'react';

const CompraProducto = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState('');

  if (!producto) {
    return <p>No hay producto seleccionado para comprar.</p>;
  }

  const handleCantidadChange = (e) => {
    const valor = parseInt(e.target.value);
    setCantidad(valor > 0 ? valor : 1);
  };

  const handleComprar = () => {
    const total = cantidad * parseFloat(producto.precioProducto);
    setMensaje(`¡Compra realizada! Total: $${total.toFixed(2)}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Comprar Producto</h2>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <img
          src={producto.imagenUrl}
          alt={producto.nombreProducto}
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <div>
          <h3>{producto.nombreProducto}</h3>
          <p>{producto.descripcionProducto}</p>
          <strong>Precio unitario: ${producto.precioProducto}</strong>
          <div style={{ marginTop: '10px' }}>
            <label>Cantidad: </label>
            <input
              type="number"
              value={cantidad}
              onChange={handleCantidadChange}
              min="1"
            />
          </div>
          <button onClick={handleComprar} style={{ marginTop: '10px' }}>
            Comprar
          </button>
          {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
        </div>
      </div>
    </div>
  );
};

export default CompraProducto;
