import React from "react";

function SelectInput(
  { label, name, options = [], classname = "", ...props },
  ref
) {
  const id = React.useId();

  return (
    <div>
      {label && (
        <label htmlFor={id} className="m-1 p-2 font-medium inline">
          {label}{" "}
        </label>
      )}
      <select
        name={name}
        id={id}
        ref={ref}
        {...props}
        className={`border-2 mt-3 border-gray-200 p-2 rounded-lg ${classname} `}
      >
        {options.map((option, id) => (
          <option value={option.toLowerCase()} key={id}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(SelectInput);
