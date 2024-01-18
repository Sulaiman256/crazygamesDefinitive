import React, { useEffect, useState } from "react";
import SearchGames from "../SearchGames";
import { CardApp } from "../CardApp";
import ENDPOINT from "../../services/endpoint";
import axios from "axios";

export function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const getGames = async () => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/productos`);
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  const handleSearchResults = (results) => {
    if (Array.isArray(results)) {
      setSearchResults(results);
    } else {
      console.error("Los resultados no son un array:", results);
      setSearchResults([]);
    }
  };

  return (
    <>
      <SearchGames onSearchResults={handleSearchResults} />
      {searchResults.length > 0 ? (
        <div>
          <p>Los resultados son:</p>
          <div className="columns is-multiline pt-4">
            {searchResults.map((item) => (
              <CardApp key={item.id} {...item} />
            ))}
          </div>
        </div>
      ) : (
        <p>No hay resultados</p>
      )}
    </>
  );
}
