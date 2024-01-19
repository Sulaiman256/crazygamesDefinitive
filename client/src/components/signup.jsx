import React, { useState } from "react";
import axios from "axios";
import ENDPOINT from "../services/endpoint";

const Signup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${ENDPOINT}/users`, {
        name,
        email,
        password,
      });

      const data = response.data;

      if (response.status === 200 && data.success) {
        console.log("Registro exitoso:", data.success);
        // Puedes manejar la creación de sesión aquí si es necesario
      } else {
        setErrorMessage(data.error || "Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
      setErrorMessage(error.response?.data?.error || "Error desconocido");
    }

    // Limpiar los campos después de enviar el formulario
    setName("");
    setEmail("");
    setPassword("");

    // Cerrar el modal si lo deseas
    onClose();
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <h2 className="title">Registrarse</h2>
          {errorMessage && (
            <div className="notification is-danger">{errorMessage}</div>
          )}
          <form onSubmit={handleFormSubmit}>
            <div className="field">
              <label htmlFor="name" className="label">
                Nombre
              </label>
              <div className="control">
                <input
                  id="name"
                  className="input"
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Correo Electrónico
              </label>
              <div className="control">
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">
                Contraseña
              </label>
              <div className="control">
                <input
                  id="password"
                  className="input"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">
                  Registrarse
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Signup;
