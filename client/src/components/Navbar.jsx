import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import logoWeb from "../img/logopaginaweb.png";

function Navbar() {
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
      style={{ marginBottom: "20px" }} // Agrega espacio debajo de la barra de navegación
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          CrazyGames
        </a>

        {/* Agregar el logo centrado con padding */}
        <div
          className="navbar-item has-text-centered"
          style={{ padding: "10px" }}
        >
          <img
            src={logoWeb} // Ruta a tu logo
            alt="CrazyGames Logo"
            style={{ maxHeight: "50px" }} // Ajusta la altura según tu diseño
          />
        </div>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/admin" className="navbar-item">
            Admin
          </Link>
          <Link to="/users" className="navbar-item">
            Users
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/platforms" className="navbar-link">
              Platforms
            </Link>
            <div className="navbar-dropdown">
              <Link to="/ps4" className="navbar-item">
                PS4/PS5
              </Link>
              <Link to="/switch" className="navbar-item">
                Switch
              </Link>
              <Link to="/xbox" className="navbar-item">
                XboxOne/Xbox Series S & X
              </Link>
              <Link to="/pc" className="navbar-item">
                PC
              </Link>
              {/* Agregar más enlaces según tus necesidades */}
            </div>
          </div>
        </div>

        {/* Mueve la siguiente sección al final para colocar los botones a la derecha */}
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {/* Abre un bloque de llaves para la expresión de JavaScript */}
              <>
                <a
                  className="button is-primary"
                  href="#"
                  style={{ margin: "5px" }}
                >
                  Iniciar Sesión
                </a>
                <a
                  className="button is-light"
                  href="#"
                  style={{ margin: "5px" }}
                >
                  Registrarse
                </a>
              </>
              {/* Cierra el bloque de llaves para la expresión de JavaScript */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
