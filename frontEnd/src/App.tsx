import React from "react";
import "toastr/build/toastr.css"
import { AppRoute } from "./_app-routes";
import { Navbar } from "./components/Navbar";
import "bootswatch/dist/flatly/bootstrap.css";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppRoute />
    </>
  );
};
