import React from "react";
import { Controller } from "react-hook-form";

function TagsInput({ label, name, control, tags }) {
  return (
    <div>
      {label && <label className="m-1 mb-4 p-2 font-medium ">{label} </label>}
      <Controller
        name={name || "tags"}
        control={control}
        rules={{ required: "Select one tag atleast" }}
        render={({ field }) => {
          return (
            <div className="flex flex-wrap ">
              {tags.map((tag) => {
                const activeTags = field.value || [];
                const tagActive = activeTags.includes(tag);
                const toggleTags = (tag) => {
                  const updatedTags = activeTags.includes(tag)
                    ? activeTags.filter((t) => t !== tag)
                    : [...activeTags, tag];

                  field.onChange(updatedTags);
                };
                return (
                  <button
                    type="button"
                    key={tag}
                    value={tag}
                    className={`rounded-2xl py-1 px-3 m-1 md:grow-1 ${
                      tagActive
                        ? "bg-[#36648B] text-white hover:bg-[#34506d]"
                        : "bg-gray-300 hover:bg-[#36648B] hover:text-white"
                    } hover:cursor-pointer hover:mx-2`}
                    onClick={() => toggleTags(tag)}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          );
        }}
      />
    </div>
  );
}

export default TagsInput;
