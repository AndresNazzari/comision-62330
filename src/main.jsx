import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Upper CamelCase for components
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
