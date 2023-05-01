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
  onChangeSelected: (value: string, name: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  label,
  id,
  options,
  onChangeSelected,
  ...props
}) => {
  const handleChange = (
    target: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  ) => {
    const { value, name } = target;
    onChangeSelected(value, name);
  };
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}: *</label>
      <select
        className="select"
        onChange={(event) => handleChange(event.target)}
        {...props}
      >
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
