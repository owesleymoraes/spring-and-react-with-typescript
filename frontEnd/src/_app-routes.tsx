import React from "react";
import { Login } from "./views/Login";
import { CadastroUsuario } from "./views/CadastroUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";

export const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<CadastroUsuario />} />
      </Routes>
    </BrowserRouter>
  );
};
