import React from "react";

function Container({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center ">
      {children}
    </div>
  );
}

export default Container;
