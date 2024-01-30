// Visuals.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const Visuals = ({ productId }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchVisuals = async () => {
      try {
        // Obtener el video (trailer) y las imágenes del juego
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}/visuals`
        );

        setVideoUrl(response.data.video?.video_url || "");
        setImages(response.data.images || []);
      } catch (error) {
        console.error("Error fetching visuals:", error);
      }
    };

    fetchVisuals();
  }, [productId]);

  return (
    <div>
      {videoUrl && (
        <div>
          <h3>Trailer</h3>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {images.length > 0 && (
        <div>
          <h3>Imágenes</h3>
          <div className="image-gallery">
            {images.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Imagen ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Visuals;
