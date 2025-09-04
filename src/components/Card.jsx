import { Link, useParams } from "react-router-dom";
import { EllipsisVertical, X } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setDeleteMenuActive,
  setDeletePostId,
  setDeleteImageId,
} from "../store/postsSlice";

function Card({
  title,
  date,
  author,
  imageSrc,
  className = "",
  slug,
  postId,
  imageId,
  userId,
  username,
}) {
  const dispatch = useDispatch();
  const { userID } = useParams();
  const userData = useSelector((state) => state.auth.userData);
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className={`m-1 ${className} `}>
      {/* Post main image */}
      <div className="relative">
        <Link to={`/post/${slug}/${postId}`}>
          <img
            src={imageSrc}
            alt={title}
            className="rounded-2xl shadow-2xl w-xs  object-cover hover:cursor-pointer h-48"
          />
        </Link>
        {userID && userData && userID === userData?.userDetailsId && (
          <div className=" bg-gray-200/50  absolute top-0 right-0 rounded-2xl cursor-pointer flex flex-col">
            <EllipsisVertical
              className={`self-end m-2 active:size-7 ${
                isMenuActive ? "hidden" : "block"
              }`}
              onClick={() => setIsMenuActive(!isMenuActive)}
            />
            <X
              className={`self-end m-2 active:size-7 ${
                isMenuActive ? "block" : "hidden"
              }`}
              onClick={() => setIsMenuActive(!isMenuActive)}
            />
            {/* Menu options */}
            {isMenuActive && (
              <div className={` flex flex-col`}>
                <Link to={`/edit-post/${postId}`}>
                  <button className="hover:bg-gray-200 active:bg-gray-300 py-1 rounded-2xl px-5 w-full">
                    Edit blog
                  </button>
                </Link>

                <button
                  className="hover:bg-gray-200 active:bg-gray-300 py-1 rounded-2xl px-5"
                  onClick={() => {
                    setIsMenuActive(!isMenuActive);
                    dispatch(setDeleteMenuActive());
                    dispatch(setDeletePostId(postId));
                    dispatch(setDeleteImageId(imageId));
                  }}
                >
                  Delete blog
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Post info */}
      <div className="mt-6 ">
        {/* title */}
        <Link to={`/post/${slug}/${postId}`}>
          <span className="text-base sm:text-lg block mb-2 hover:cursor-pointer">
            {title}
          </span>
        </Link>

        {/* date */}
        <span>{date} </span>
      </div>
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
