import React from "react";

function Card({ title, date, author, imageSrc, className = "" }) {
  return (
    <div className={`m-5 ${className} `}>
      {/* Post main image */}
      <div className="">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl shadow-2xl w-lg object-cover hover:cursor-pointer h-48"
        />
      </div>

      {/* Post info */}
      <div className="mt-6 ">
        {/* title */}
        <span className="text-base sm:text-lg block mb-2 hover:cursor-pointer">
          {title}
        </span>

        {/* date */}
        <span>{date} </span>

        {/* author name */}
        <span className="text-blue-400 cursor-pointer hover:text-blue-600">
          {" "}
          by {author}
        </span>
      </div>
    </div>
  );
}

export default Card;
