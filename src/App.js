import React from "react";
import { getCovidData } from "./Api/covid";

function App() {
  getCovidData();
  return (
    <div className="App">
      <h1>Covid-19 Tracker</h1>
    </div>
  );
}

export default App;
