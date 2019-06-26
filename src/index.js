import React from "react";
import ReactDOM from "react-dom";
import { Chapter1 } from "./Chapter1";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <h1>{Chapter1}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
