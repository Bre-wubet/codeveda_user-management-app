import React from "react";
import Sidebar from "../../components/common/Sidebar";
import ProfileView from "../../components/user/ProfileView";

const UserProfilePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <ProfileView />
      </main>
    </div>
  );
};

export default UserProfilePage;
