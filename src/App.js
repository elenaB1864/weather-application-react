import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container ">
        <Weather />
      </div>
      <footer className=" text-center">
        {" "}
        This project was coded by{" "}
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
