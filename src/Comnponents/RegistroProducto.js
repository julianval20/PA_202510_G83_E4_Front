import React, { useState } from 'react';

const FormularioProducto = () => {
  const [producto, setProducto] = useState({
    nombreProducto: '',
    descripcionProducto: '',
    imagenProducto: null,
    precioProducto: '',
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'imagenProducto') {
      const file = files[0];
      setProducto((prev) => ({
        ...prev,
        imagenProducto: file,
      }));
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    } else {
      setProducto({
        ...producto,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (
      !producto.nombreProducto ||
      !producto.descripcionProducto ||
      !producto.imagenProducto ||
      !producto.precioProducto
    ) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const formData = new FormData();
    formData.append('nombreProducto', producto.nombreProducto);
    formData.append('descripcionProducto', producto.descripcionProducto);
    formData.append('imagenProducto', producto.imagenProducto);
    formData.append('precioProducto', producto.precioProducto);

    

    // Opcional: resetear el formulario
    setProducto({
      nombreProducto: '',
      descripcionProducto: '',
      imagenProducto: null,
      precioProducto: '',
    });
    setPreview(null);
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Registrar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Producto:</label>
          <input
            type="text"
            name="nombreProducto"
            value={producto.nombreProducto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción del Producto:</label>
          <textarea
            name="descripcionProducto"
            value={producto.descripcionProducto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Imagen del Producto:</label>
          <input
            type="file"
            name="imagenProducto"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        {preview && (
          <div style={{ marginTop: '10px' }}>
            <img
              src={preview}
              alt="Vista previa del producto"
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
          </div>
        )}
        <div>
          <label>Precio del Producto:</label>
          <input
            type="number"
            name="precioProducto"
            value={producto.precioProducto}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>
        <button type="submit">Guardar Producto</button>
      </form>
    </div>
  );
};

export default FormularioProducto;
