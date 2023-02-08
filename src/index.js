import React from "react";
import ReactDOM from "react-dom/client";
// Components
import AppProvider from "./Context";
// Style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider />
  </React.StrictMode>
);
