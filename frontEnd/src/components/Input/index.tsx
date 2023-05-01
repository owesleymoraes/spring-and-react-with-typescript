import React, { InputHTMLAttributes } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  ariaDescribedby?: string;
  onChangeValue: (value: string, name: string) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  label,
  value,
  placeholder,
  ariaDescribedby,
  onChangeValue,
}) => {
  const handleChange = (
    target: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  ) => {
    const { value, name } = target;
    onChangeValue(value, name);
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}: *</label>
      <input
        value={value}
        onChange={(event) => handleChange(event.target)}
        type={type}
        className="form-control"
        id={id}
        aria-describedby={ariaDescribedby}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};
