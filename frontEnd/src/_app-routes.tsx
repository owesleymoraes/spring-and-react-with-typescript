import React, { useContext, useEffect } from "react";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { AuthContext } from "./_context";
import { AuthService } from "./_app/service/authService";
import { CadastroUsuario } from "./views/CadastroUsuario";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConsultaLancamento } from "./views/lancamentos/ConsultaLancamento";
import { CadastroDeLancamento } from "./views/lancamentos/CadastroLancamento";

export const AppRoute: React.FC = () => {
  const { setUserIsLogged } = useContext(AuthContext);

  useEffect(() => {
    if (AuthService.isUserAuthenticated()) {
      setUserIsLogged(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<CadastroUsuario />} />

        <Route
          path="/home"
          element={
            AuthService.isUserAuthenticated() ? (
              <Home />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/consulta-lancamento"
          element={
            AuthService.isUserAuthenticated() ? (
              <ConsultaLancamento />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/cadastro-lancamento/:idReleaseEdit?"
          element={
            AuthService.isUserAuthenticated() ? (
              <CadastroDeLancamento />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
