import React from "react";

const ProfilePicture = ({ onFileSelect }) => {
  const handleProfileSelect = (event) => {
    const file = event.target.files[0];
    onFileSelect(file);
  };

  return (
    <div>
      <label className="cursor-pointer">
        <img src="/img/camera-svgrepo-com.svg" alt="uploadImage" />
        <input type="file" className="hidden" onChange={handleProfileSelect} />
      </label>
    </div>
  );
};

export default ProfilePicture;