import React from "react";
import Sidebar from "../../components/common/Sidebar";

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <p className="mb-4">Welcome to your dashboard. Here you can manage your account settings and preferences.</p>
      </main>
    </div>
  );
};

export default UserDashboard;
