import React from "react";
import "./styles.css";

interface MessageValidatedProps {
  children: string;
  isValidated: boolean;
}

export const MessageValidated: React.FC<MessageValidatedProps> = ({
  children,
  isValidated,
}) => {
  const colorItem = isValidated ? "#008000" : "#ff0000";

  return (
    <div>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li className="list-message" style={{ color: colorItem }}>
          <div className="wrapper-list-item">
            <span className="check"></span>
            <span>{children}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
