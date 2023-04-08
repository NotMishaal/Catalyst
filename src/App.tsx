import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Auth } from "./components/Auth";
import NavBar from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
