import React from "react";

function SearchBar() {
  return (
    <div>
      <div className="mr-10 relative ">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search"
          className="border-black border rounded-3xl md:h-11 h-8 pl-5 w-full overflow-visible "
        />

        {/* Search logo */}
        <div className="md:h-11 h-8 bg-[#36648B] hover:bg-[#547da1] w-15 absolute right-0 top-0 md:py-3.5 py-2 px-5 rounded-3xl  hover:cursor-pointer">
          <svg
            fill="#ffffff"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.4 488.4"
            xml:space="preserve"
            // className=" absolute md:top-3 md:left-5 top-2 left-5"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
