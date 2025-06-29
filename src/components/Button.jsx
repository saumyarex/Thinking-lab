import React from "react";

function Button({ children, type = "submit", className = "", ...props }) {
  return (
    <button
      type={type}
      className={`p-3 rounded-xl text-white font-medium  px-5 py-2 bg-[#E2AD28] hover:bg-[#e28e28] hover:cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
