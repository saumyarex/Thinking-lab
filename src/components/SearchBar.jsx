import { useEffect, useState } from "react";
import blogPostServices from "../appwrite/blogPostServices";
import { useDispatch } from "react-redux";
import { setSearchTerm, setCategory, setTags } from "../store/postsSlice";
/* 
Key steps
-keep track of serach term
-send for search after 2 seconds
*/
function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (search.trim() !== "") {
        try {
          dispatch(setSearchTerm(search));
          dispatch(setCategory(null));
          dispatch(setTags([]));
          const response = await blogPostServices.searchPosts(search);
          setSearchResult(response.documents);
        } catch (error) {
          console.log("Searching error:", error);
        }
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [search, dispatch]);

  return (
    <div>
      <div className=" relative ">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search"
          value={search}
          // onChange={(e) => onChangeofSerachTerm(e)}
          onChange={(e) => setSearch(e.target.value)}
          className={`border-black border rounded-3xl md:h-11 h-11 pl-5 w-full overflow-visible ${
            (searchResult?.length ?? 0) > 0
              ? "border-b-0 rounded-b-none"
              : "border-2"
          }`}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setSearchTerm(search));
              dispatch(setCategory(null));
              dispatch(setTags([]));
              setSearch("");
              setSearchResult([]);
            }
          }}
        />

        {/* Search result box */}
        <div className="rounded-3xl border border-t-0 rounded-t-none bg-neutral-100 cursor-pointer">
          {searchResult.map((result, index) => (
            <li
              key={index}
              className="list-none px-5 py-1 active:bg-neutral-200 rounded-3xl active:border"
              onClick={() => {
                setSearch("");
                setSearchResult([]);
                dispatch(setSearchTerm(result.title));
                dispatch(setCategory(null));
                dispatch(setTags([]));
              }}
            >
              {" "}
              {result.title} a
            </li>
          ))}
        </div>

        {/* Search logo */}
        <div
          className={`md:h-11 h-11 bg-[#36648B] hover:bg-[#547da1] w-15 absolute right-0 top-0 md:py-3.5 py-3.5 px-5 rounded-3xl  hover:cursor-pointer ${
            (searchResult?.length ?? 0) > 0 ? "rounded-br-none" : ""
          }`}
          onClick={() => {
            dispatch(setSearchTerm(search));
            setSearch("");
            setSearchResult([]);
          }}
        >
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
