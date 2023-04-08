import React from "react";
interface FieldRegisterProps {
  children: React.ReactNode;
}

export const FieldRegister: React.FC<FieldRegisterProps> = ({ children }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="bs-component">{children}</div>
      </div>
    </div>
  );
};
