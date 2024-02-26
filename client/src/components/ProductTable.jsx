import React from "react";

const ProductTable = ({ products, onDeleteProduct, onEditProduct }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Descripción</th>
          <th>Fecha de Lanzamiento</th>
          <th>Plataforma</th>
          <th>Desarrollador</th>
          <th>Distribuidor</th>
          <th>Género</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>
              <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: "50px" }}
              />
            </td>
            <td>{product.precio}</td>
            <td>{product.stock}</td>
            <td>{product.description}</td>
            <td>{product.releasedate}</td>
            <td>{product.platform}</td>
            <td>{product.relatedInfo.developer}</td>
            <td>{product.relatedInfo.distributor}</td>
            <td>{product.relatedInfo.genre}</td>
            <td>
              <button onClick={() => onDeleteProduct(product.id)}>
                Borrar
              </button>
              <button onClick={() => onEditProduct(product)}>Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
