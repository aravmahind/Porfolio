import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-6 py-2 rounded-full transition-all duration-300 shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
