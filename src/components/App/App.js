import MenuList from "../MenuList";
import "./App.css";
import { useState } from "react";
import Image from "../clipart11730.png"

function App() {

  return (
    <div className="App">
      <div className="restaurantLogo">
        <h1>Vic's Pizza</h1>
      </div>
      <MenuList />
    </div>
  );
}

export default App;
