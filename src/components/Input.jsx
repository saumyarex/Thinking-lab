import React from "react";

function Input(
  { label, type = "text", rightIcon, className = "", ...props },
  ref
) {
  const id = React.useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="m-1 p-2 block font-medium">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          type={type}
          id={id}
          className={`rounded-lg p-2 border-2 border-gray-200 w-full pr-10 ${className}`}
          {...props}
          ref={ref}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}

export default React.forwardRef(Input);
