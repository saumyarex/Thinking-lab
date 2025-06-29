import React from "react";

function Container({ children, className }) {
  return <div className={`w-full min-h-screen ${className}`}>{children}</div>;
}

export default Container;
