// Description.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Description.css";

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
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <div className="box">
          <h3 className="title is-4 has-text-centered">Descripción</h3>
          <p className="has-text-centered">
            {description && description.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Description;
