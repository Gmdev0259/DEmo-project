import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          demo project 
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.ganeshmahakalkar.dev/">
          ganeshmahakalkar
        </a>{" "}
        | Showing {" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
