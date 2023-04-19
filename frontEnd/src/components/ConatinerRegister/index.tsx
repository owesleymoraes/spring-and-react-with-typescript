import React from "react";

interface ContainerRegisterProps {
  children: React.ReactNode;
}

export const ContainerRegister: React.FC<ContainerRegisterProps> = ({
  children,
}) => {
  return <div className="container">{children}</div>;
};
