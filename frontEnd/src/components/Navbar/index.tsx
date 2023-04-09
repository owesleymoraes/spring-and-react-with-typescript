import React from "react";
import { ButtonNavbar } from "./ButtonNavbar";

export const Navbar: React.FC = () => {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a
          href=""
          className="navbar-brand"
          style={{ fontSize: "20px", fontWeight: "bolder" }}
        >
          Minhas Finanças
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <ButtonNavbar />
      </div>
    </div>
  );
};
