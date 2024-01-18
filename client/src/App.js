import React from "react";
import Navbar from "./components/Navbar";
import CardApp from "./components/CardApp";
import SearchGames from "./components/SearchGames";
// Agregamos la importación

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <SearchGames />
        <CardApp />
      </main>
    </div>
  );
}

export default App;
