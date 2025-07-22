import React from "react";
import UserList from "../../components/admin/UserList";

const AdminUserPage = () => {
  return (
    <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
        User Management
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Manage users, view details, and perform actions.
      </p>
      <div className="w-full h-px bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 my-6" />
      <UserList />
    </div>
  );
};

export default AdminUserPage;