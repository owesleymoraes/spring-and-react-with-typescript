import React, { useEffect, useState } from "react";
import { UsuarioService } from "../../_app/service/userService";
import { LocalStorageService } from "../../_app/service/localStorageService";

export const Home: React.FC = () => {
  const [balance, setBalance] = useState(0);

  const usuarioService = new UsuarioService();

  useEffect(() => {
    const userLogger = LocalStorageService.getItemLocalStorage("user_logged");

    usuarioService
      .obterSaldoPorUsuario(userLogger?.id)
      .then((response) => {
        setBalance(response.data);
      })
      .catch((error) => {
        alert("Error to login: " + error.response);
      });
  }, []);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">Bem Vindo!</h1>
        <p className="lead">Esse é seu sistema de finanças.</p>
        <p className="lead">Seu saldo para o mês atual é de R$ {balance}</p>
        <hr className="my-4" />
        <p>
          E essa é sua área administrativa, utilize um dos menus ou botões
          abaixo para navegar pelo sistema.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/cadastrar" role="button">
            <i className="fa fa-users"></i> Cadastrar Usuário
          </a>
          <a
            className="btn btn-danger btn-lg"
            href="https://bootswatch.com/flatly/#"
            role="button"
          >
            <i className="fa fa-users"></i> Cadastrar Lançamento
          </a>
        </p>
      </div>
    </div>
  );
};
