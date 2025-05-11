import React from "react";

function Card({ title, date, author, imageSrc }) {
  return (
    <div className="m-5  ">
      <div className="">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-2xl shadow-2xl hover:cursor-pointer "
        />
      </div>
      <div className="mt-6 ">
        <span className="text-base sm:text-lg block mb-2 hover:cursor-pointer">
          {title}
        </span>
        <span>{date} </span>
        <span className="text-blue-400 cursor-pointer hover:text-blue-600">
          {" "}
          by {author}
        </span>
      </div>
    </div>
  );
}

export default Card;
