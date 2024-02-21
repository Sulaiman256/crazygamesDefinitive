import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./DetectUsers.css";

const socket = io("http://localhost:3000"); // Asegúrate de usar la misma URL que tu servidor Express

const DetectUsers = () => {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    // Escuchar eventos del servidor y actualizar el estado
    socket.on("activeUsers", (count) => {
      setActiveUsers(count);
    });

    // Limpiar el evento al desmontar el componente
    return () => {
      socket.off("activeUsers");
    };
  }, []);

  return (
    <div>
      <p>Usuarios activos: {activeUsers}</p>
      {/* Resto de tu aplicación React */}
    </div>
  );
};

export default DetectUsers;
