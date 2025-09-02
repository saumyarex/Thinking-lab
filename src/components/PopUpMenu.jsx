import React from "react";
import { Loader2 } from "lucide-react";

function PopUpMenu({
  title,
  option,
  active,
  cancelMethod,
  optionMethod,
  loading,
}) {
  return (
    <div
      className={`flex flex-col min-h-screen justify-center items-center bg-gray-200/60 absolute top-0 w-full ${
        active ? "block" : "hidden"
      }`}
    >
      <div className="bg-[#E2AD28] text-white text-xl p-5 rounded-xl">
        <h1>{title}</h1>
        <div className="flex justify-center gap-10 mt-5">
          <button
            className="bg-gray-200 py-1 px-2 text-black rounded-lg active:bg-gray-400 hover:bg-gray-300 hover:cursor-pointer"
            onClick={cancelMethod}
          >
            Cancel
          </button>
          <button
            className="bg-red-400 py-1 px-2 text-black rounded-lg active:bg-red-600 hover:bg-red-500 hover:cursor-pointer"
            onClick={optionMethod}
          >
            {loading ? <Loader2 className="animate-spin" /> : option}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpMenu;
