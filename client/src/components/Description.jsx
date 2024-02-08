// Description.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

const Description = ({ productId }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        // Obtener la descripción del juego
        const response = await axios.get(
          `http://localhost:3001/api/productos/${productId}/description`
        );

        setDescription(response.data.description || "");
      } catch (error) {
        console.error("Error fetching description:", error);
      }
    };

    fetchDescription();
  }, [productId]);

  return (
    <div>
      <h3>Descripción</h3>
      <p>
        <p>{description && description.description}</p>
      </p>
    </div>
  );
};

export default Description;