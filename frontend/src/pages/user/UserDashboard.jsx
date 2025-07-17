import React from "react";
import Sidebar from "../../components/common/Sidebar";

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <p className="mb-4">Welcome to your dashboard. Here you can manage your account settings and preferences.</p>
        <a
          href="/user/products/create"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4"
        >
          + Create Product
        </a>
      </main>
    </div>
  );
};

export default UserDashboard;
