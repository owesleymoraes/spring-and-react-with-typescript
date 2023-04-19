import React from "react";
import './styles.css'

interface ButtonProps {
  title: string;
  onClick: () => void;
  enabledButton?: boolean;
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
  enabledButton,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn btn-${typeButton}`}
      disabled={enabledButton}
    >
      {title}
    </button>
  );
};
