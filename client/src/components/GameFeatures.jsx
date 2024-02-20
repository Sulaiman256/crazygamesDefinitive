import React, { useState, useEffect } from "react";
import axios from "axios";

const GameFeatures = ({ productId }) => {
  const [gameFeatures, setGameFeatures] = useState({
    developer: "",
    distributor: "",
    releasedate: "",
    genre: "",
  });

  useEffect(() => {
    const fetchGameFeatures = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}/features`
        );
        setGameFeatures(response.data);
      } catch (error) {
        console.error("Error fetching game features:", error);
      }
    };

    fetchGameFeatures();
  }, [productId]);

  return (
    <div>
      <h2>Acerca del Juego</h2>
      <div>
        <strong>Desarrollador:</strong> {gameFeatures.developer}
      </div>
      <div>
        <strong>Distribuidor:</strong> {gameFeatures.distributor}
      </div>
      <div>
        <strong>Fecha de Lanzamiento:</strong> {gameFeatures.releaseDate}
      </div>
      <div>
        <strong>Género:</strong> {gameFeatures.genre}
      </div>
    </div>
  );
};

export default GameFeatures;
