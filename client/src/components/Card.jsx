import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Hacer la solicitud al servidor Express para obtener datos
    axios
      .get("http://localhost:3001/api/productos")
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div className="columns is-multiline">
      {productos.map((producto) => (
        <div key={producto.id} className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={producto.image} alt={producto.name} />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-4">{producto.name}</p>
              <p className="subtitle is-6">${producto.precio.toFixed(2)}</p>
              <p>{producto.stock > 0 ? "Disponible" : "Agotado"}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
