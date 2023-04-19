import React from "react";
interface FieldRegisterProps {
  widthField: number;
  children: React.ReactNode;
}

export const FieldRegister: React.FC<FieldRegisterProps> = ({
  children,
  widthField,
}) => {
  return (
    <div className="row">
      <div className={`col-lg-${widthField}`}>
        <div className="bs-component">{children}</div>
      </div>
    </div>
  );
};
