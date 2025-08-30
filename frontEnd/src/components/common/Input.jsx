import React from "react";

export default function Input(props) {
  const { type, placeholder, className } = props;
  return <input type={type} placeholder={placeholder} className={className} />;
}
