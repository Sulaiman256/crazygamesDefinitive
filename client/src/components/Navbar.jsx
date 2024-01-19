import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bulma/css/bulma.min.css";
import logoWeb from "../img/logopaginaweb.png";
import Signup from "./signup";
import Login from "./login";
import Logout from "./logout";

function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [authenticated, setAuthenticate] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setAuthenticate(true);
    }
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLogoutClick = () => {
    sessionStorage.removeItem("token");
    setAuthenticate(false);
    navigate("/", { replace: true });
  };

  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          CrazyGames
        </a>

        <div
          className="navbar-item has-text-centered"
          style={{ padding: "10px" }}
        >
          <img
            src={logoWeb}
            alt="CrazyGames Logo"
            style={{ maxHeight: "50px" }}
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
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/admin" className="navbar-item">
            Admin
          </a>
          <a href="/users" className="navbar-item">
            Users
          </a>
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
                <Logout onLogout={handleLogoutClick} />
              ) : (
                <>
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
