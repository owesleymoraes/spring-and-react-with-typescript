import React from "react";
import "toastr/build/toastr.css";
import { AppRoute } from "./_app-routes";
import { Navbar } from "./components/Navbar";
import "bootswatch/dist/flatly/bootstrap.css";
//core
import "primereact/resources/primereact.min.css";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//icons
import "primeicons/primeicons.css";
import { AuthContextProvider } from "./_context";

export const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <AppRoute />
    </AuthContextProvider>
  );
};
