import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authServices from "../appwrite/authServices";
import { BlogsSection, PopUpMenu, ProfileHeader } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
  setDeleteMenuActive,
  setDeletePostId,
  setDeleteImageId,
  setConfirmDelete,
} from "../store/postsSlice";
import toast, { Toaster } from "react-hot-toast";
import blogPostServices from "../appwrite/blogPostServices";

function ProfilePage() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const { deleteMenuActive, confirmDelete, deletePostId, deleteImageId } =
    useSelector((state) => state.posts);
  const { userID } = useParams();

  useEffect(() => {
    const deletePost = async (postId, coverImageId) => {
      try {
        setDeleting(true);
        await blogPostServices.deletePost(postId);
        await blogPostServices.deleteImage(coverImageId);
        toast.success("Blog deleted successfully");
        dispatch(setConfirmDelete());
        dispatch(setDeleteMenuActive());
        dispatch(setDeletePostId(null));
        dispatch(setDeleteImageId(null));
      } catch (error) {
        console.log("Error deleting blog:", error);
        toast.error(error.message);
        dispatch(setConfirmDelete());
        dispatch(setDeleteMenuActive());
        dispatch(setDeletePostId(null));
        dispatch(setDeleteImageId(null));
      } finally {
        setDeleting(false);
      }
    };

    if (confirmDelete && deleteImageId && deletePostId) {
      console.log("Post Deleted");
      deletePost(deletePostId, deleteImageId);
    }
  }, [confirmDelete, deletePostId, deleteImageId, dispatch]);

  useEffect(() => {
    const getUserDetails = async (id) => {
      if (!id) {
        setError("User ID not found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await authServices.getUserDetails(id);
        console.log("User Details after response:", response);

        setUserDetails({
          firstName: response.firstName,
          lastName: response.lastName,
          username: response.username,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError("Failed to load user profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (userID) {
      getUserDetails(userID);
    } else {
      setError("User id missing");
    }
  }, [userID]);

  if (loading) {
    return (
      <div className="mx-5 flex justify-center items-center min-h-64">
        <div className="text-lg">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-5 flex justify-center items-center min-h-64">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="mx-5 relative">
      <ProfileHeader userDetails={userDetails} />
      <BlogsSection className={"md:grid-cols-4"} userID={userID} />
      <PopUpMenu
        title={"This action will delete the blog. Are you sure?"}
        option={"Delete"}
        active={deleteMenuActive}
        cancelMethod={() => {
          dispatch(setDeleteMenuActive());
          dispatch(setDeletePostId(null));
          dispatch(setDeleteImageId(null));
        }}
        optionMethod={() => {
          dispatch(setConfirmDelete());
        }}
        loading={deleting}
      />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default ProfilePage;
