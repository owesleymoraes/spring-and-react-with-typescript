import React from "react";
import { Button } from "../Button";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card md-3">
      <h3 className="card-header">{title}</h3>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <fieldset>{children}</fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
