import React from "react";
import logo from "../logo.svg";
import "../App.css";

const ComponentDummy = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* Webpack ENV: {process.env.REACT_APP_ENV} */}
      <br />
      {/* Vite ENV:  {import.meta.env.VITE_ENV}        */}
      <p>
        Edit <code>src/App.tsx</code> and save to reload. 64
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default ComponentDummy;
