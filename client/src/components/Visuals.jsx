import React, { useEffect, useState } from "react";
import axios from "axios";
import "./visual.css"; // Importa el archivo de hojas de estilo

const Visuals = ({ productId }) => {
  const [videoUrl, setVideoUrl] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisuals = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}/visuals`
        );

        console.log("Respuesta de Axios:", response);

        setVideoUrl(response.data.video?.video || "");
        setImages(response.data.images || []);
      } catch (error) {
        console.error("Error en Axios al obtener visuales:", error);
        setError("Error al obtener imágenes y videos del producto");
      } finally {
        setLoading(false);
      }
    };

    fetchVisuals();
  }, [productId]);

  if (loading) {
    return <p>Cargando visuales...</p>;
  }

  return (
    <div className="visual-container">
      {error && <div className="error-message">{error}</div>}

      {videoUrl && (
        <div
          className="columns mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="column is-6">
            <div className="image-gallery">
              <video
                src={videoUrl}
                controls
                style={{ borderRadius: "10px" }}
              ></video>
            </div>
          </div>
        </div>
      )}
      <div
        className="columns"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {images.length > 0 && (
          <>
            {images.map((image, index) => (
              <div className="column is-3" key={index}>
                <img
                  key={index}
                  src={image.imagen}
                  alt={`Imagen ${index + 1}`}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Visuals;
