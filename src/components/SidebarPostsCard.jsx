import React from "react";

function SidebarPostsCard({ title, date, author, imageSrc, className = "" }) {
  return (
    <div className={`mt-4 ${className} grid grid-cols-2 `}>
      {/* Post main image */}
      <div className="w-32 h-32 ">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl object-cover shadow-2xl hover:cursor-pointer w-32 h-32"
        />
      </div>

      {/* Post info */}
      <div>
        {/* date */}
        <span className="text-xs">{date} </span>

        {/* title */}
        <span className=" block hover:cursor-pointer text-base leading-5 ">
          {title}
        </span>

        {/* author name */}
        <span className="text-blue-400 cursor-pointer hover:text-blue-600 text-xs">
          {" "}
          by {author}
        </span>
      </div>
    </div>
  );
}

export default SidebarPostsCard;
