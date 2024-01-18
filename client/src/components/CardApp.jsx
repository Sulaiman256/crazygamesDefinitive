import React from "react";
import { Link } from "react-router-dom";

import "bulma/css/bulma.min.css";

export function CardApp({ ...item }) {
  return (
    <div className="column is-one-quarter" key={item.id}>
      {console.log("Image URL:", item.image)}
      <Link to={`/productos/${item.id}`}>
        <div className="card" style={{ width: "400px" }}>
          <figure className="image is-4by5">
            <img src={item.image} alt={item.name} />
          </figure>
        </div>
      </Link>
      <h1 className="has-text-centered pt-2 pr-5">{item.name}</h1>
    </div>
  );
}
