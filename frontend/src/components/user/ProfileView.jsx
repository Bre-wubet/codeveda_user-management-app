import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { updateUserProfile } from "../../services/userService";

// ProfileView component for displaying and editing user profile with the image profile feature
const ProfileView = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, username, email, profileImage };
    await updateUserProfile(updatedUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="flex flex-col items-center mb-4">
          <img
            src={profileImage || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(username)}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 mb-2 shadow"
          />
          <span className="text-gray-500 text-sm">Profile Image Preview</span>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-md p-3 w-full outline-none transition"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-md p-3 w-full outline-none transition"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Profile Image URL</label>
          <input
            type="text"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-md p-3 w-full outline-none transition"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileView;
