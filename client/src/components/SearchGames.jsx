import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";

const SearchGames = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm !== "") {
      handleSearch();
      return;
    }
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = async () => {
    try {
      const { data, status } = await axios.get(
        `http://localhost:3001/api/productos/search?searchTerm=${searchTerm}`
      );

      if (status !== 200 || data.length === 0) {
        setError("No hay resultados para esta búsqueda!!!");
        onSearchResults([]);
        return;
      }

      setError("");
      onSearchResults(data);
    } catch (error) {
      console.error("Error en la solicitud HTTP", error);
      setError("Error en la solicitud HTTP");
    }
  };

  return (
    <div>
      <div className="field has-addons pt-3">
        <div className="control">
          <input
            className="input"
            type="search"
            placeholder="Buscar un juego"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {error && <p className="has-text-danger">{error}</p>}
    </div>
  );
};

export default SearchGames;
