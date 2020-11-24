import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import "./defaults.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
