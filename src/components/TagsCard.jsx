import React from "react";

function TagsCard() {
  const [activeTags, setActiveTags] = React.useState([]);

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

  const toggleTags = React.useCallback((tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((pre) => pre != tag) : [...prev, tag]
    );
  }, []);

  return (
    <div>
      <h2 className="mb-4 block font-bold">Popular Tags</h2>
      <ul className="flex flex-wrap w-80">
        {tags.map((tag) => {
          const tagActive = activeTags.includes(tag);
          console.log(tagActive);
          return (
            <li
              key={tag}
              value={tag}
              className={`rounded-2xl py-1 px-3 m-1 inline ${
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
