import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination() {
  return (
    <div className="flex gap-5 ">
      <div className="flex bg-gray-200 sm:py-2 sm:px-3 py-1 px-2 rounded-lg hover:cursor-pointer active:bg-gray-300">
        <ChevronLeft />
        Previous
      </div>
      <div className="bg-gray-200 sm:py-2 sm:px-4 py-1 px-2 rounded-lg hover:cursor-pointer active:bg-gray-300">
        1
      </div>
      <div className="bg-gray-200 sm:py-2 sm:px-4 py-1 px-2 rounded-lg hover:cursor-pointer active:bg-gray-300 sm:block hidden">
        2
      </div>
      <div className="bg-gray-200 sm:py-2 sm:px-4 py-1 px-2 rounded-lg hover:cursor-pointer active:bg-gray-300 sm:block hidden">
        3
      </div>
      <div className="bg-gray-200 sm:py-2 sm:px-4 py-1 px-2 rounded-lg hover:cursor-pointer active:bg-gray-300">
        ...
      </div>
      <div className="bg-gray-200 sm:py-2 sm:px-4 py-1 px-2 rounded-lg hover:cursor-pointer active:bg-gray-300">
        10
      </div>
      <div className="flex bg-gray-200 sm:py-2 sm:px-3 rounded-lg hover:cursor-pointer active:bg-gray-300 py-1 px-2">
        Next
        <ChevronRight />
      </div>
    </div>
  );
}

export default Pagination;
