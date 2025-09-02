import { Link } from "react-router-dom";
function SidebarPostsCard({
  title,
  date,
  author,
  imageSrc,
  slug,
  postId,
  userId,
  username,
  className = "",
}) {
  return (
    <div className={`mt-6 ${className} flex md:flex-wrap gap-2 w-full`}>
      <Link to={`/post/${slug}/${postId}`}>
        {/* Post main image */}
        <div className="min-w-32 min-h-32 ">
          <img
            src={imageSrc}
            alt={title}
            className="rounded-2xl object-cover shadow-2xl hover:cursor-pointer w-32 h-32"
          />
        </div>
      </Link>

      {/* Post info */}
      <div className=" md:w-40 min-w-30 mx-3">
        <Link to={`/post/${slug}/${postId}`}>
          {/* date */}
          <span className="text-xs">{date} </span>

          {/* title */}
          <span className=" block hover:cursor-pointer text-base leading-5 ">
            {title}
          </span>
        </Link>

        {/* author name */}
        <Link to={`/user/${username}/${userId}`}>
          <span className="text-blue-400 cursor-pointer hover:text-blue-600 text-xs">
            {" "}
            by {author}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarPostsCard;
