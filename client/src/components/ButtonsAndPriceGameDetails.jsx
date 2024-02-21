import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ButtonsAndPriceGameDetails.css";

const ButtonsAndPriceGameDetails = ({ productId }) => {
  const [precio, setPrecio] = useState(""); // Cambié el nombre de la variable a 'precio'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductPrice = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}`
        );
        setPrecio(response.data.precio); // Cambié el nombre de la propiedad a 'precio'
      } catch (error) {
        console.error("Error fetching product price:", error);
        setError("Error fetching product price");
      } finally {
        setLoading(false);
      }
    };

    fetchProductPrice();
  }, [productId]);

  const handleBuyNow = () => {
    // Lógica para realizar la compra, redirigir a la página de compra, etc.
    console.log("Realizando la compra ahora");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <p>Precio: ${precio}</p>{" "}
      {/* Cambié el nombre de la variable a 'precio' */}
      <Link to="/carrito">
        <span className="icon">
          <i className="material-icons">shopping_cart</i>
        </span>
      </Link>
      <button onClick={handleBuyNow} className="button is-primary">
        Comprar Ahora
      </button>
    </div>
  );
};

export default ButtonsAndPriceGameDetails;
