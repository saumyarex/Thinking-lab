import React from "react";

function Input({ lable, type = "text", className = "", ...props }, ref) {
  const id = React.useId();
  return (
    <div className="w-full">
      {lable && (
        <label htmlFor={id} className="m-1 p-2 inline-block font-bold">
          {lable}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`rounded-2xl p-2 focus:bg-gray-300 ${className}`}
        {...props}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(Input);
