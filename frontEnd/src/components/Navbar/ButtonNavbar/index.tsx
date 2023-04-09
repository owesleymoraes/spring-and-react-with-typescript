import React from "react";

export const ButtonNavbar = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cadastrar">
            Cadastro
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Lançamentos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};
