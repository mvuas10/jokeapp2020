import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Toolbar from "./components/Toolbar";
import Logo from "./components/images/Logo.png";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <Toolbar logo={Logo} content="Happy end of 2010!" />
      <Route expact path="/" component={Home} />
    </div>
  );
}

export default App;
