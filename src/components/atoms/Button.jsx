import React from "react";

const Button = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
};

export default Button;
