import React from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  typeButton:
    | "success"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "light"
    | "dark"
    | "link";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  typeButton,
}) => {
  return (
    <button onClick={onClick} type="button" className={`btn btn-${typeButton}`}>
      {title}
    </button>
  );
};
