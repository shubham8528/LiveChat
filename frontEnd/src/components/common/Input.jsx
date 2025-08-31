import React from "react";

export default function Input(props) {
  const { type, placeholder, className, onChange, name } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}
