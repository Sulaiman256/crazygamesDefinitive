import React, { useState } from "react";
import axios from "axios";
import "bulma/css/bulma.min.css";

const SearchGames = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/productos/search?searchTerm=${searchTerm}`
      );

      if (response.status !== 200 || response.data.length === 0) {
        setError("No hay resultados para esta búsqueda.");
        onSearchResults([]);
        return;
      }

      setError(null);
      onSearchResults(response.data);
    } catch (error) {
      setError("Error al buscar juegos.");
      console.error("Error searching for games:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="title is-3">Buscar Juegos</h2>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ingrese el nombre del juego"
          />
        </div>
        <div className="control">
          <button className="button is-primary" onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
      {error ? <p className="has-text-danger">{error}</p> : null}
    </div>
  );
};

export default SearchGames;
