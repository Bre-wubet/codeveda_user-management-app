import React from "react";
import Sidebar from "../../components/common/Sidebar";

// AdminDashboard component serves as the main layout for admin pages styled with a sidebar
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <main>
        <h1 className="">Admin Dashboard</h1>
      </main>
    </div>
  );
};

export default AdminDashboard;
