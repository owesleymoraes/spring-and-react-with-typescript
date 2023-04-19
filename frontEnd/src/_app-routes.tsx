import React from "react";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { CadastroUsuario } from "./views/CadastroUsuario";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConsultaLancamento } from "./views/ConsultaLancamento";

export const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<CadastroUsuario />} />
        <Route path="/consulta-lancamento" element={<ConsultaLancamento />} />
      </Routes>
    </BrowserRouter>
  );
};
