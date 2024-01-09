import React from "react";
import { BrowserRouter as Router, Routes, Switch } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>{/* Define tus rutas aquí */}</Switch>
    </Router>
  );
};

export default App;
