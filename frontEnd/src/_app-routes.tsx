import React from "react";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { AuthProvider, useAuth } from "./_context";
import { CadastroUsuario } from "./views/CadastroUsuario";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConsultaLancamento } from "./views/lancamentos/ConsultaLancamento";
import { CadastroDeLancamento } from "./views/lancamentos/CadastroLancamento";


export const AppRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>      
          <Route path="/" element={<Login />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />

          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" replace />}/>
          <Route path="/consulta-lancamento" element={isAuthenticated ? <ConsultaLancamento /> : <Navigate to="/" replace />}/>
          <Route path="/cadastro-lancamento/:idReleaseEdit?" element={isAuthenticated ? <CadastroDeLancamento /> : <Navigate to="/" replace />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
