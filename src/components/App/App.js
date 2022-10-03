import MenuList from "../MenuList/MenuList";
import "./App.css";
import { useState } from "react";


function App() {

  const [order, setOrder] = useState([]);

  return (
    <div className="App">
      <div className="restaurantLogo">
        <h1>Vic's Pizza</h1>
        <img src="clipart11730.png" />
      </div>
      <MenuList />
    </div>
  );
}

export default App;
