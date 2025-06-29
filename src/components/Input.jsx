import React from "react";

function Input({ lable, type = "text", className = "", ...props }, ref) {
  const id = React.useId();
  return (
    <div className="w-full">
      {lable && (
        <label htmlFor={id} className="m-1 p-2 block font-medium">
          {lable}
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
