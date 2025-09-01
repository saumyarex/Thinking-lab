import { Link } from "react-router-dom";

function Card({
  title,
  date,
  author,
  imageSrc,
  className = "",
  slug,
  postId,
  userId,
  username,
}) {
  return (
    <div className={`m-5 ${className} `}>
      <Link to={`/post/${slug}/${postId}`}>
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
        </div>
      </Link>
      {/* author name */}
      <Link to={`/user/${username}/${userId}`}>
        <span className="text-blue-400 cursor-pointer hover:text-blue-600">
          {" "}
          by {author}
        </span>
      </Link>
    </div>
  );
}

export default Card;
