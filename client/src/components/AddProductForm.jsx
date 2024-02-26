import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
  const initialFormState = {
    name: "",
    stock: 0,
    image: "",
    price: "",
    description: "",
    releasedate: "",
    platform: "",
    developer: "",
    distributor: "",
    genre: "",
    cover: "",
    images: ["", "", "", ""],
    video: "",
  };

  const [product, setProduct] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...product.images];
    newImages[index] = e.target.value;
    setProduct({ ...product, images: newImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct(initialFormState);
  };
  const handleClearForm = () => {
    setProduct(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Nombre</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Imagen Portada</label>
        <div className="control">
          <input
            className="input"
            type="url"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Stock</label>
        <div className="control">
          <input
            className="input"
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Precio</label>
        <div className="control">
          <input
            className="input"
            type="number"
            step="0.01"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Fecha de Lanzamiento</label>
        <div className="control">
          <input
            className="input"
            type="date"
            name="releasedate"
            value={product.releasedate}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Plataforma</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="platform"
            value={product.platform}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Desarrollador</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="developer"
            value={product.developer}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Distribuidor</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="distributor"
            value={product.distributor}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Género</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="genre"
            value={product.genre}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">PortadaFichaProducto (Cover)</label>
        <div className="control">
          <input
            className="input"
            type="url"
            name="cover"
            value={product.cover}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Imágenes (hasta 4)</label>
        <div className="control">
          {product.images.map((image, index) => (
            <input
              key={index}
              className="input"
              type="url"
              placeholder={`URL de la Imagen ${index + 1}`}
              value={image}
              onChange={(e) => handleImageChange(e, index)}
            />
          ))}
        </div>
      </div>

      <div className="field">
        <label className="label">Video</label>
        <div className="control">
          <input
            className="input"
            type="url"
            name="video"
            value={product.video}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            className="button is-info"
            type="button"
            onClick={handleClearForm}
          >
            Limpiar Formulario
          </button>
        </div>
        <div className="control">
          <button className="button is-primary" type="submit">
            Agregar Producto
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddProductForm;
