import React from "react";

function Card({ title, date, author, imageSrc }) {
  return (
    <div>
      <div>{imageSrc}</div>
      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>
          {date} by {author}
        </span>
      </div>
    </div>
  );
}

export default Card;
