import React from "react";

const InputWithLabel = ({ label, id, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-1 font-semibold">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputWithLabel;