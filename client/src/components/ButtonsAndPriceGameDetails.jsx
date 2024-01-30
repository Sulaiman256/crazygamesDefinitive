import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ButtonsAndPriceGameDetails = ({ productId }) => {
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchProductPrice = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}`
        );
        setPrice(response.data.price);
      } catch (error) {
        console.error("Error fetching product price:", error);
      }
    };

    fetchProductPrice();
  }, [productId]);

  const handleBuyNow = () => {
    // Lógica para realizar la compra, redirigir a la página de compra, etc.
    console.log("Realizando la compra ahora");
  };

  return (
    <div>
      <p>Precio: ${price}</p>
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
