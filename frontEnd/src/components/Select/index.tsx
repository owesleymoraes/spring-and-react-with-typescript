import React, { SelectHTMLAttributes } from "react";
import "./styles.css";

export type OptionsSelect = {
  label: string;
  value: string | number;
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id?: string;
  options: OptionsSelect[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  id,
  options,
  ...props
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}: *</label>
      <select className="select" {...props}>
        {options.map((option, key) => {
          return (
            <option key={key} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
