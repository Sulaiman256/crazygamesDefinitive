import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/views/Home"; // Asegúrate de importar tu componente Home

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
