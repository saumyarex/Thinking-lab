import { useState, useEffect } from "react";
import blogPostServices from "../appwrite/blogPostServices";
import toast from "react-hot-toast";
import parse from "html-react-parser";
function ReadPost({ post }) {
  // get Image url from appwrite storage
  const [imageId, setImageId] = useState();
  useEffect(() => {
    async function getImage(fileId) {
      try {
        const response = await blogPostServices.getImage(fileId);
        setImageId(response.replace("preview", "view"));
      } catch (error) {
        console.log("Error fetching image: ", error);
        toast.error(error.message);
      }
    }

    if (!imageId) {
      if (post) {
        getImage(post.coverImage);
      }
    }
  }, [imageId, post]);

  return (
    <div className="md:mx-20 sm:mx-10 mx-5 my-10">
      <div className="  w-full flex justify-center mb-3">
        <img src={imageId} alt={post.title} className="max-w-4xl w-full" />
      </div>

      <h1 className="sm:text-5xl text-4xl font-bold"> {post.title} </h1>
      <p className="text-xl mt-3 font-medium"> {post.excerpt} </p>
      <div className="blog-content">{parse(post.content)}</div>
    </div>
  );
}

export default ReadPost;
