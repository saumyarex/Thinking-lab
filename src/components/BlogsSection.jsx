import { useEffect, useState } from "react";
import { Card, Pagination } from "./index";
import toast from "react-hot-toast";
import blogPostServices from "../appwrite/blogPostServices";
import authServices from "../appwrite/authServices";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

function BlogsSection({ tags, category, searchTerm, className, userId }) {
  const { confirmDelete } = useSelector((state) => state.posts);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
      toast.error(error.message);
      return null;
    }
  };

  const getUserDetails = async (id) => {
    try {
      return await authServices.getUserDetails(id);
    } catch (error) {
      console.log("Error fetching user details: ", error);
      toast.error(error.message);
      return null;
    }
  };

  const handlePageChange = (pageNo) => {
    if (pageNo >= 1 && pageNo <= totalPages) {
      setCurrentPage(pageNo);
    }
  };

  useEffect(() => {
    async function getPosts(pageNo, tags, category, searchTerm, userId) {
      try {
        setLoading(true);
        const response = await blogPostServices.getListOfPosts(
          pageNo,
          tags,
          category,
          searchTerm,
          userId
        );

        if (response) {
          // Set pagination data

          setTotalPages(
            Math.ceil(response.total / (response.documents?.length || 1))
          );

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
          setBlogs(blogsInfo);
        } else {
          setBlogs([]);
          setTotalPages(1);
        }

        setError(null);
      } catch (error) {
        console.log("Blogs fetching error: ", error);
        toast.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (!confirmDelete) {
      getPosts(currentPage, tags, category, searchTerm, userId);
    }
  }, [category, tags, searchTerm, userId, confirmDelete, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [tags, category, searchTerm, userId]);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg flex">
          Loading blogs... <Loader2 className="animate-spin" />
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-500">Error loading blogs: {error}</div>
      </div>
    );
  }

  // Empty state
  if (blogs.length === 0) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-500">No blogs found.</div>
      </div>
    );
  }

  if (blogs.length > 0) {
    return (
      <div className="mx-2 space-y-5 flex flex-col items-center w-full">
        <div
          className={`grid lg:grid-cols-3 sm:grid-cols-2 gap-x-10 md:gap-x-3  ${className}`}
        >
          {blogs.map((blog) => (
            <Card
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
              className="max-w-sm sm:max-w-3xs lg:max-w-sm w-full"
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  }
}

export default BlogsSection;
