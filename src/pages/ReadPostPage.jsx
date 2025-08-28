import { useEffect, useState } from "react";
import { PostForm } from "../components";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import blogPostServices from "../appwrite/blogPostServices";
import { LoaderCircle } from "lucide-react";
import { ReadPost } from "../components";

function ReadPostPage() {
  // state variables
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});

  const { postId } = useParams();

  useEffect(() => {
    async function getPostDetails(postId) {
      try {
        const response = await blogPostServices.getPost(postId);
        setPost(response);
        setLoading(false);
      } catch (error) {
        console.log("Post fetching error: ", error);
        toast.error(error.message);
        setLoading(false);
      }
    }

    getPostDetails(postId);
  }, [postId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoaderCircle className="animate-spin" />
      </div>
    );
  }
  return (
    <div>
      <ReadPost post={post} />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default ReadPostPage;
