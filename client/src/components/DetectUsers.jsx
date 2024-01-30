import React, { useState, useEffect } from "react";

const DetectUsers = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Simula la conexión a un servidor de WebSocket o alguna lógica para contar usuarios
    const socket = new WebSocket("ws://localhost:3001"); // Reemplaza con tu URL de WebSocket si tienes una

    // Incrementa el contador cuando un usuario se conecta
    socket.addEventListener("open", () => {
      setUserCount((prevCount) => prevCount + 1);
    });

    // Decrementa el contador cuando un usuario se desconecta
    socket.addEventListener("close", () => {
      setUserCount((prevCount) => Math.max(prevCount - 1, 0));
    });

    return () => {
      // Cierra la conexión al desmontar el componente
      socket.close();
    };
  }, []);

  return (
    <div className="user-count-container">
      <p>Cantidad de usuarios en esta página: {userCount}</p>
    </div>
  );
};

export default DetectUsers;
