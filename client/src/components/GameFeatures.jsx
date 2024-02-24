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
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <div className="box">
          <h2 className="title is-4 has-text-centered">Acerca del Juego</h2>
          <div className="content">
            <p className="has-text-centered">
              <strong>Desarrollador:</strong> {gameFeatures.developer}
            </p>
            <p className="has-text-centered">
              <strong>Distribuidor:</strong> {gameFeatures.distributor}
            </p>
            <p className="has-text-centered">
              <strong>Fecha de Lanzamiento:</strong> {gameFeatures.releasedate}
            </p>
            <p className="has-text-centered">
              <strong>Género:</strong> {gameFeatures.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameFeatures;
