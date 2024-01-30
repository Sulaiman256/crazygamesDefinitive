import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/views/Home";
import GameDetail from "./components/GameDetail";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:id" element={<GameDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
