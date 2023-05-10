import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="card md-3">
      <h3 className="card-header">{title}</h3>
      <div className="card-body">
        {children}
      </div>
    </div>
   
  );
};
