import React from "react";

function ProfileHeader({ userDetails }) {
  return (
    <div className="mt-10 px-5 rounded-lg py-10 mb-10 bg-[#E2AD28]">
      <div>
        <h1 className="sm:text-5xl text-4xl">
          {userDetails.firstName} {userDetails.lastName}
        </h1>
        <h2 className="sm:text-2xl ml-2">{userDetails.username}</h2>
      </div>
    </div>
  );
}

export default ProfileHeader;
