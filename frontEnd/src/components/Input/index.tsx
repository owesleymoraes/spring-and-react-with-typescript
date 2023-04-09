import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  ariaDescribedby?: string;
  onChangeValue: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  value,
  placeholder,
  ariaDescribedby,
  onChangeValue,
}) => {
  const handleChange = (value: string) => {
    onChangeValue(value);
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}: *</label>
      <input
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        type={type}
        className="form-control"
        id={id}
        aria-describedby={ariaDescribedby}
        placeholder={placeholder}
        name=""
      />
    </div>
  );
};
