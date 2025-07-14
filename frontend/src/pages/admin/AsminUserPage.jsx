import React from "react";
import Sidebar from "../../components/common/Sidebar";
import UserList from "../../components/admin/UserList";

// AdminUserPage component displays a list of users with a sidebar for navigation
const AdminUserPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <p className="mb-4">Manage users, view details, and perform actions.</p>
        <UserList />
      </main>
    </div>
  );
};

export default AdminUserPage;