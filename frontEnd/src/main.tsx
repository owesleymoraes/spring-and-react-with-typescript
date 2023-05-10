import React from "react";
import "./GlobalStyle.css";
import { App } from "./App";
import "toastr/build/toastr.min.css"
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
