import React from "react";

function ProfileCard({ name, photo, bio }) {
  return (
    <div className="max-w-sm mx-auto p-4 border rounded-lg shadow-lg text-center bg-white">
      <img
        src={photo}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full border-2 border-blue-500"
      />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-600 mt-1">{bio}</p>
    </div>
  );
}

export default ProfileCard;