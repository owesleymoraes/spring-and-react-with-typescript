import React from "react";
import { Login } from "./views/Login";
import "bootswatch/dist/flatly/bootstrap.css";
import { CadastroUsuario } from "./views/CadastroUsuario";

export const App: React.FC = () => {
  return <CadastroUsuario />;
};
