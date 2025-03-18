import React from "react";

const Input = ({
  placeholder = "",
  type = "text",
  className = "",
  ...props
}) => {
  return (
    <input
      className="w-full border border-gray-300 px-3.5 py-1.5 rounded"
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
