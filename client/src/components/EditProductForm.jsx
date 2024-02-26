import React, { useState, useEffect } from "react";

const EditProductForm = ({ product, onEditProduct }) => {
  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    image: product.image,
    precio: product.precio,
    stock: product.stock,
  });

  useEffect(() => {
    // Actualizar el formulario cuando cambia el producto seleccionado
    setEditedProduct({
      name: product.name,
      image: product.image,
      precio: product.precio,
      stock: product.stock,
    });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProduct(editedProduct);
  };

  return (
    <div>
      <h3>Editar Producto</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={editedProduct.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Imagen (URL):
          <input
            type="text"
            name="image"
            value={editedProduct.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="precio"
            value={editedProduct.precio}
            onChange={handleChange}
          />
        </label>
        <label>
          Stock:
          <input
            type="number"
            name="stock"
            value={editedProduct.stock}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditProductForm;
