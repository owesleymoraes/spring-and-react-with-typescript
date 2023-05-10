import React from "react";
import "./styles.css";

interface ButtonProps {
  title?: string;
  icon?: string;
  enabledButton?: boolean;
  onMouseInformation?: string;
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
  icon,
  title,
  typeButton,
  enabledButton,
  onMouseInformation,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`btn btn-${typeButton}`}
      disabled={enabledButton}
      title={onMouseInformation}
    >
      <i className={`pi pi-${icon}`}></i> {title}
    </button>
  );
};
