import React from 'react';
import './App.css';
import {Hamburger, TotalPrice,IngredientList} from "./components";

function App() {
  return(
    <div>
      <Hamburger />
      <TotalPrice />
      <IngredientList />
    </div>
  );
}

export default App;
