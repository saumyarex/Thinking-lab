import { useEffect, useState, useCallback } from "react";
import { setTags, setSearchTerm } from "../store/postsSlice";
import { useDispatch } from "react-redux";

function TagsCard() {
  const [activeTags, setActiveTags] = useState([]);
  const dispatch = useDispatch();
  const tags = [
    "design",
    "branding",
    "seo",
    "web developemt",
    "marketing",
    "ux design",
    "app development",
    "social media",
    "ui design",
  ];

  const toggleTags = useCallback((tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((pre) => pre != tag) : [...prev, tag]
    );
  }, []);

  useEffect(() => {
    const updateTags = () => {
      dispatch(setTags(activeTags));
      dispatch(setSearchTerm(null));
    };
    updateTags();
  }, [activeTags, dispatch]);

  return (
    <div className="mr-4">
      <h2 className="mb-4 block font-bold">POPULAR TAGS</h2>
      <ul className="flex flex-wrap  ">
        {tags.map((tag) => {
          const tagActive = activeTags.includes(tag);
          return (
            <li
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TagsCard;
