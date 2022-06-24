import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      Weather App
      <footer>
        {" "}
        This website was coded by{" "}
        <a
          href="https://github.com/elenaB1864"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elena Balanescu
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/elenaB1864/weather-application-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced.
        </a>
      </footer>
    </div>
  );
}
