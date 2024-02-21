import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GameFeatures.css";

const GameFeatures = ({ productId }) => {
  const [gameFeatures, setGameFeatures] = useState({
    developer: "",
    distributor: "",
    releasedate: "",
    genre: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGameFeatures = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}/features`
        );
        // Formatear la fecha para mostrar solo la fecha (sin la zona horaria)
        const formattedReleaseDate = new Date(
          response.data.releasedate
        ).toLocaleDateString(undefined, {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });
        setGameFeatures({
          ...response.data,
          releasedate: formattedReleaseDate,
        });
      } catch (error) {
        console.error("Error fetching game features:", error);
        setError("Error fetching game features");
      }
    };

    fetchGameFeatures();
  }, [productId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

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
        <strong>Fecha de Lanzamiento:</strong> {gameFeatures.releasedate}
      </div>
      <div>
        <strong>Género:</strong> {gameFeatures.genre}
      </div>
    </div>
  );
};

export default GameFeatures;
