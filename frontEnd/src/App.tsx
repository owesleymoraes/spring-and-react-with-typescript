import React from "react";
import { AppRoute } from "./_app-routes";
import "bootswatch/dist/flatly/bootstrap.css";
import { Navbar } from "./components/Navbar";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <AppRoute />
    </>
  );
};
