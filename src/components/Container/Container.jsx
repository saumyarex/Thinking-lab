import React from "react";

function Container({ children, className }) {
  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
