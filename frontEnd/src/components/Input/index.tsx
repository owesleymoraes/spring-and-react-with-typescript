import React, { HtmlHTMLAttributes } from "react";

interface InputProps {
  id?: string;
  name?: string;
  type: string;
  label: string;
  value: string;
  placeholder: string;
  ariaDescribedby?: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  label,
  value,
  placeholder,
  ariaDescribedby,
  onChange,
}) => {
  const handleChange = (value: string) => {
    onChange(value);
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
