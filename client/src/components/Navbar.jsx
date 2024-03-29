import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import logoWeb from "../img/logopaginaweb.png";
import Signup from "./signup";
import Login from "./login";
import Logout from "./logout";
import UserIcons from "./UserIcons";

function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    !!sessionStorage.getItem("token")
  );

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);

    // Aquí actualizamos el estado directamente al iniciar sesión
    setAuthenticated(true);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLogoutClick = () => {
    sessionStorage.removeItem("token");

    // Aquí actualizamos el estado directamente al cerrar sesión
    setAuthenticated(false);

    navigate("/", { replace: true });
  };

  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {/* Elimina el texto CrazyGames y utiliza solo el logo como enlace */}
        <a className="navbar-item" href="/">
          {/* Comentario: CrazyGames */}
        </a>

        <a className="navbar-item" href="/">
          <img
            src={logoWeb}
            alt="CrazyGames Logo"
            style={{ maxHeight: "50px" }}
          />
        </a>

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
            <a href="/platforms" className="navbar-link">
              Platforms
            </a>
            <div className="navbar-dropdown">
              <a href="/ps4" className="navbar-item">
                PS4/PS5
              </a>
              <a href="/switch" className="navbar-item">
                Switch
              </a>
              <a href="/xbox" className="navbar-item">
                XboxOne/Xbox Series S & X
              </a>
              <a href="/pc" className="navbar-item">
                PC
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {authenticated ? (
                <>
                  {/* Agrega el botón de cierre de sesión */}
                  <Logout onLogout={handleLogoutClick} />
                  <UserIcons authenticated={authenticated} />
                </>
              ) : (
                <>
                  {/* Agrega el botón de inicio de sesión */}
                  <a
                    className="button is-primary"
                    href="#"
                    onClick={handleLoginClick}
                  >
                    Iniciar Sesión
                  </a>
                  <a
                    className="button is-light"
                    href="#"
                    onClick={handleSignupClick}
                  >
                    Registrarse
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </nav>
  );
}

export default Navbar;
