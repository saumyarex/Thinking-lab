import React from "react";

function Button(title, type, className = "", ...props) {
  return (
    <button
      type={type}
      className={`p-3 rounded-xl  px-5 py-2 bg-[#E2AD28] hover:bg-[#e2c028] hover:cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
