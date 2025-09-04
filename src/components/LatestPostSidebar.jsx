import React, { useEffect, useState } from "react";
import { SidebarPostsCard } from "./index.js";
import blogPostServices from "../appwrite/blogPostServices.js";
import authServices from "../appwrite/authServices.js";

function LatestPostSidebar({ className }) {
  const [latestPosts, setLatestPosts] = useState([]);

  const formatBlogDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getImageURL = async (id) => {
    try {
      const imageURL = await blogPostServices.getImage(id);
      return imageURL;
    } catch (error) {
      console.log("Error fetching images", error);
      throw error;
    }
  };

  const getUserDetails = async (id) => {
    try {
      return await authServices.getUserDetails(id);
    } catch (error) {
      console.log("Error fetching user details: ", error);
      throw error;
    }
  };

  useEffect(() => {
    const getLatestPosts = async () => {
      try {
        const response = await blogPostServices.getLatestPosts();

        if (response) {
          // Use Promise.all to handle async operations properly
          const blogsInfo = await Promise.all(
            response.documents.map(async (blog) => {
              const userDetail = await getUserDetails(blog.userDetailsID);
              const imageURL = await getImageURL(blog.coverImage);

              return {
                id: blog.$id, // Add unique ID for React keys
                title: blog.title,
                slug: blog.slug,
                imageId: blog.coverImage,
                userId: userDetail.$id,
                username: userDetail.username,
                author: userDetail
                  ? `${userDetail.firstName} ${userDetail.lastName}`
                  : "Unknown Author",
                date: formatBlogDate(blog.$createdAt),
                imageSrc: imageURL ? imageURL.replace("preview", "view") : null,
              };
            })
          );
          setLatestPosts(blogsInfo);
        } else {
          setLatestPosts([]);
        }
      } catch (error) {
        console.log("Error fetching latest posts: ", error);
      }
    };

    getLatestPosts();
  }, []);

  return (
    <div className={`${className}`}>
      <h1 className="font-bold ">LATEST POSTS</h1>
      <div>
        {latestPosts.map((blog) => (
          <SidebarPostsCard
            key={blog.id}
            postId={blog.id}
            slug={blog.slug}
            title={blog.title}
            date={blog.date}
            author={blog.author}
            imageSrc={blog.imageSrc}
            userId={blog.userId}
            username={blog.username}
            imageId={blog.imageId}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestPostSidebar;
