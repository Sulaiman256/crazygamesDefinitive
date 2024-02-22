import React from "react";
import { Link } from "react-router-dom";
import "./UserIcons.css";

const UserIcons = ({ authenticated }) => {
  return (
    <div className="buttons">
      {authenticated ? (
        <>
          <Link to="/carrito" className="navbar-item">
            <span className="icon">
              <i className="material-icons">shopping_cart</i>
            </span>
          </Link>
          <Link to="/perfil" className="navbar-item">
            <span className="icon">
              <i className="material-icons">account_circle</i>
            </span>
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserIcons;
