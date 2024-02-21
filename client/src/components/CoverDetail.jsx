import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CoverDetail.css";

const CoverDetail = ({ productId }) => {
  const [coverData, setCoverData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoverData = async () => {
      try {
        const { data, status } = await axios.get(
          `http://localhost:3001/api/cover/${productId}`
        );

        if (status !== 200) {
          setError("Error al obtener los datos de la portada");
          return;
        }

        setCoverData(data);
      } catch (error) {
        console.error("Error fetching cover data:", error);
        setError(
          "Error al obtener los datos de la portada. Intenta de nuevo más tarde."
        );
      }
    };

    fetchCoverData();
  }, [productId]);

  return (
    <div>
      {error && <div>{error}</div>}
      {/* Render cover details using coverData */}
      <img src={coverData.cover} alt="Cover" />
    </div>
  );
};

export default CoverDetail;
