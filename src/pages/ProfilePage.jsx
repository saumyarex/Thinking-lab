import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authServices from "../appwrite/authServices";
import { BlogsSection, ProfileHeader } from "../components";

function ProfilePage() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { userId } = useParams();

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

    if (userId) {
      getUserDetails(userId);
    } else {
      setError("User id missing");
    }
  }, [userId]);

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
    <div className="mx-5">
      <ProfileHeader userDetails={userDetails} />
      <BlogsSection className={"md:grid-cols-4"} userId={userId} />
    </div>
  );
}

export default ProfilePage;
