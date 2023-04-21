import React from "react";
interface FieldRegisterProps {
  widthField: number;
  typeColumn?: string;
  children: React.ReactNode;
}

export const FieldRegister: React.FC<FieldRegisterProps> = ({
  children,
  widthField,
  typeColumn = "md",
}) => {
  return (
    <div className="row">
      <div className={`col-${typeColumn}-${widthField}`}>
        <div className="bs-component">{children}</div>
      </div>
    </div>
  );
};
