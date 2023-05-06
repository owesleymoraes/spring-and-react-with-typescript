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
        <ButtonNavbar />
      </div>
    </div>
  );
};
