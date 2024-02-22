import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ButtonsAndPriceGameDetails.css";

const ButtonsAndPriceGameDetails = ({ productId }) => {
  const [precio, setPrecio] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductPrice = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}`
        );
        setPrecio(response.data.precio);
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
    console.log("Realizando la compra ahora");
  };

  const handleAddToCart = () => {
    // Lógica para añadir a la cesta
    console.log("Añadiendo a la cesta");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="buttons-and-price-container">
      <p>Precio: ${precio}</p>
      <div className="buttons">
        <div className="cart-container">
          <div className="cart-buttons">
            <button className="button is-success" onClick={handleAddToCart}>
              Añadir a la cesta
              <span className="icon" style={{ marginLeft: "5px" }}>
                <i className="material-icons">shopping_cart</i>
              </span>
            </button>
            <button className="button is-primary" onClick={handleBuyNow}>
              Comprar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsAndPriceGameDetails;
