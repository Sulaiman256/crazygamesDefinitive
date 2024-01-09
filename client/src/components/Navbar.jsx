import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de tener React Router instalado si lo necesitas

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <span>GamesCrazy</span>
        </Link>

        <div className="navbar-item">
          <img
            src="ruta/a/tu/logo.png" // Ruta a tu logo
            alt="GamesCrazy Logo"
            style={{ maxHeight: "50px" }} // Ajusta la altura según tu diseño
          />
        </div>

        <div className="navbar-end">
          <Link to="/cart" className="navbar-item">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to="/user" className="navbar-item">
            <i className="fas fa-user"></i>
          </Link>
          <Link to="/settings" className="navbar-item">
            <i className="fas fa-cogs"></i>
          </Link>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/users" className="navbar-item">
            Users
          </Link>
          <Link to="/admin" className="navbar-item">
            Admin
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/platforms" className="navbar-link">
              Platforms
            </Link>
            <div className="navbar-dropdown">
              <Link to="/ps4" className="navbar-item">
                PS4/PS5
              </Link>
              <Link to="/xbox" className="navbar-item">
                XboxOne/XboxS&X
              </Link>
              <Link to="/pc" className="navbar-item">
                PC
              </Link>
              {/* Agrega más enlaces según tus necesidades */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
