import MenuList from "../MenuList/MenuList";
import "./App.css";
import { useState } from "react";


function App() {

  const [order, setOrder] = useState([]);

  return (
    <div className="App">
      <div className="restaurantLogo">
        <h1>Lorenzo's</h1>
      </div>
      <MenuList />
    </div>
  );
}

export default App;
