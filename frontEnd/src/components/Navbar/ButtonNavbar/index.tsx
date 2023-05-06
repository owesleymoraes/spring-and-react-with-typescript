import React, { useContext } from "react";
import { AuthContext } from "../../../_context";
import { AuthService } from "../../../_app/service/authService";

export const ButtonNavbar = () => {
  const { userIsLogged, setUserIsLogged } = useContext(AuthContext);

  const handleClickExit = () => {
    AuthService.removeUserAuthenticated();
     setUserIsLogged(false);
  };
  
  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        {userIsLogged && (
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
        )}
        <li className="nav-item">
          <a className="nav-link" href="/cadastrar">
            Cadastro
          </a>
        </li>
        {userIsLogged && (
          <li className="nav-item">
            <a className="nav-link" href="/consulta-lancamento">
              Lançamentos
            </a>
          </li>
        )}
        <li className="nav-item">
          <a onClick={() => handleClickExit()} className="nav-link" href="/">
            Sair
          </a>
        </li>
      </ul>
    </div>
  );
};
