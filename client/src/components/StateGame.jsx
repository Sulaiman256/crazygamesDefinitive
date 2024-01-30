import React, { useEffect, useState } from "react";
import axios from "axios";

const StateGame = ({ productId }) => {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}`
        );
        setProductDetails(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div className="state-game-container">
      <div className="state-game-details">
        <div className="product-name">{productDetails.name}</div>
        <div className="platform-info">
          <span className="icon">
            {/* Utiliza el ícono correspondiente para la plataforma */}
            {/* Por ejemplo, si la plataforma es PS4, puedes usar un ícono de PS4 de Material Icons */}
            <i className="material-icons">videogame_asset</i>
          </span>
          <span>{productDetails.platform}</span>
        </div>
        <div className="stock-info">
          <span className="icon">
            {/* Utiliza un tick verde si el producto está en stock */}
            {productDetails.stock > 0 ? (
              <i className="material-icons green">check_circle</i>
            ) : (
              <i className="material-icons red">cancel</i>
            )}
          </span>
          <span>{productDetails.stock > 0 ? "En stock" : "Agotado"}</span>
        </div>
      </div>
    </div>
  );
};

export default StateGame;
