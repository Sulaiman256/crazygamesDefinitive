import React, { useEffect, useState } from "react";
import axios from "axios";

const GameImageCenter = ({ productId }) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}`
        );
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <div className="game-image-center-container">
      {productData.image && (
        <div className="game-image">
          <img src={productData.image} alt="Game Image" />
        </div>
      )}
    </div>
  );
};

export default GameImageCenter;
