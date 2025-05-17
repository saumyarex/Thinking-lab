import React from "react";

function NavBar() {
  const [authentiction, setAuthentication] = React.useState(false);
  const [menuOption, setMenuOption] = React.useState(true);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full ${
        scrolled ? "bg-[#bfb291] shadow-lg" : "bg-transparent"
      }`}
    >
      <div
        className={`flex font-medium text-xs sm:text-xl items-center m-10 mb-4 `}
      >
        <div className="grow self-start font-extrabold hover:cursor-pointer ">
          IDEA LAB
        </div>

        {/* Desktop Navigation */}
        <div className="sm:block hidden">
          <ul className="flex gap-4 grow-0  justify-end items-center mr-10">
            <li className="hover:cursor-pointer">Home</li>
            <li className={`${authentiction ? "block" : "hidden"}`}>
              {" "}
              <button
                className={`bg-yellow-500 p-2 rounded text-white text-xs hover:cursor-pointer hover:bg-yellow-600`}
              >
                Add Blog
              </button>
            </li>
            <li className={`${authentiction ? "block" : "hidden"}`}>
              {" "}
              <button
                className={`bg-yellow-500 p-2 rounded text-white text-xs hover:cursor-pointer hover:bg-yellow-600`}
              >
                Logout
              </button>
            </li>
            <li className={`${authentiction ? "hidden" : "block"}`}>
              {" "}
              <button
                className={`bg-yellow-500 p-2 rounded text-white text-xs hover:cursor-pointer hover:bg-yellow-600`}
              >
                Sign Up
              </button>
            </li>
            <li className={`${authentiction ? "hidden" : "block"}`}>
              {" "}
              <button
                className={`bg-yellow-500 p-2 rounded text-white text-xs hover:cursor-pointer hover:bg-yellow-600 `}
              >
                Login
              </button>
            </li>
            <li className={`${authentiction ? "block" : "hidden"}`}>
              <div className="w-2 hover:cursor-pointer">
                <svg
                  fill="#000000"
                  className="w-10 h-10"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-148.48 -148.48 808.96 808.96"
                  xml:space="preserve"
                >
                  <g
                    id="SVGRepo_bgCarrier"
                    stroke-width="0"
                    transform="translate(7.680000000000007,7.680000000000007), scale(0.97)"
                  >
                    <rect
                      x="-148.48"
                      y="-148.48"
                      width="808.96"
                      height="808.96"
                      rx="404.48"
                      fill="#c0c0c0"
                      strokewidth="0"
                    ></rect>
                  </g>
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
                        <path d="M256,0c-65.733,0-119.211,53.479-119.211,119.211S190.267,238.423,256,238.423s119.211-53.479,119.211-119.211 S321.733,0,256,0z M256,218.024c-54.486,0-98.813-44.328-98.813-98.813S201.515,20.398,256,20.398s98.813,44.328,98.813,98.813 S310.485,218.024,256,218.024z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M426.272,331.529c-45.48-45.48-105.952-70.529-170.272-70.529c-64.32,0-124.791,25.047-170.273,70.529 c-45.48,45.48-70.529,105.952-70.529,170.272c0,5.632,4.566,10.199,10.199,10.199h461.204c5.632,0,10.199-4.567,10.199-10.199 C496.801,437.482,471.752,377.01,426.272,331.529z M35.831,491.602C41.179,374.789,137.889,281.398,256,281.398 s214.821,93.391,220.17,210.204H35.831z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M182.644,457.944H66.295c-5.633,0-10.199,4.567-10.199,10.199s4.566,10.199,10.199,10.199h116.349 c5.633,0,10.199-4.567,10.199-10.199S188.277,457.944,182.644,457.944z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M225.621,457.944h-7.337c-5.633,0-10.199,4.567-10.199,10.199s4.566,10.199,10.199,10.199h7.337 c5.633,0,10.199-4.567,10.199-10.199S231.254,457.944,225.621,457.944z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className={`sm:hidden flex flex-col`}>
          <button
            onClick={() => setMenuOption(!menuOption)}
            className="self-end"
          >
            {menuOption ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          <ul
            className={`${
              menuOption ? "hidden" : "block"
            } flex flex-col gap-2 `}
          >
            <li className="hover:cursor-pointer">Home</li>
            <li className={`${authentiction ? "block" : "hidden"}`}>
              {" "}
              <button
                className={`bg-yellow-500 p-2 rounded text-white text-xs hover:cursor-pointer hover:bg-yellow-600`}
              >
                Add Blog
              </button>
            </li>
            <li className={`${authentiction ? "block" : "hidden"}`}>
              {" "}
              <button
                className={`bg-yellow-500 p-2 rounded text-white text-xs hover:cursor-pointer hover:bg-yellow-600`}
              >
                Logout
              </button>
            </li>
            <li className={`${authentiction ? "hidden" : "block"}`}>
              {" "}
              <button
                className={`bg-yellow-500 p-2 rounded text-white text-xs hover:cursor-pointer hover:bg-yellow-600`}
              >
                Sign Up
              </button>
            </li>
            <li className={`${authentiction ? "hidden" : "block"}`}>
              {" "}
              <button
                className={`bg-yellow-500 p-2 rounded text-white text-xs hover:cursor-pointer hover:bg-yellow-600 `}
              >
                Login
              </button>
            </li>
            <li className={`${authentiction ? "block" : "hidden"}`}>
              <div className="w-2 hover:cursor-pointer">
                <svg
                  fill="#000000"
                  className="w-10 h-10"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="-148.48 -148.48 808.96 808.96"
                  xml:space="preserve"
                >
                  <g
                    id="SVGRepo_bgCarrier"
                    stroke-width="0"
                    transform="translate(7.680000000000007,7.680000000000007), scale(0.97)"
                  >
                    <rect
                      x="-148.48"
                      y="-148.48"
                      width="808.96"
                      height="808.96"
                      rx="404.48"
                      fill="#c0c0c0"
                      strokewidth="0"
                    ></rect>
                  </g>
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
                        <path d="M256,0c-65.733,0-119.211,53.479-119.211,119.211S190.267,238.423,256,238.423s119.211-53.479,119.211-119.211 S321.733,0,256,0z M256,218.024c-54.486,0-98.813-44.328-98.813-98.813S201.515,20.398,256,20.398s98.813,44.328,98.813,98.813 S310.485,218.024,256,218.024z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M426.272,331.529c-45.48-45.48-105.952-70.529-170.272-70.529c-64.32,0-124.791,25.047-170.273,70.529 c-45.48,45.48-70.529,105.952-70.529,170.272c0,5.632,4.566,10.199,10.199,10.199h461.204c5.632,0,10.199-4.567,10.199-10.199 C496.801,437.482,471.752,377.01,426.272,331.529z M35.831,491.602C41.179,374.789,137.889,281.398,256,281.398 s214.821,93.391,220.17,210.204H35.831z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M182.644,457.944H66.295c-5.633,0-10.199,4.567-10.199,10.199s4.566,10.199,10.199,10.199h116.349 c5.633,0,10.199-4.567,10.199-10.199S188.277,457.944,182.644,457.944z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M225.621,457.944h-7.337c-5.633,0-10.199,4.567-10.199,10.199s4.566,10.199,10.199,10.199h7.337 c5.633,0,10.199-4.567,10.199-10.199S231.254,457.944,225.621,457.944z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
