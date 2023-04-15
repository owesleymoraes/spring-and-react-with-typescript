import React from "react";
import "./GlobalStyle.css";
import "toastr/build/toastr.min.css"
import { App } from "./App";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
