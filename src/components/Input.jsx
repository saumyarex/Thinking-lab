import React from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = React.useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="m-1 p-2 block font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`rounded-lg p-2 border-2 border-gray-200 w-full ${className}`}
        {...props}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(Input);
