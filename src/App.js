import React from 'react';
import './App.css';
import GraphicPie from "./components/GraphicPie"
import Bar from "./components/Bar"

function App() {
  return (
    <div className="App">
      <div className="container-graphics">
        <GraphicPie />
        <Bar />
      </div>
    </div>
  );
}

export default App;
