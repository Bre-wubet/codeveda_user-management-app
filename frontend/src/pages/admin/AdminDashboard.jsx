import React from "react";
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-4">
        Admin Dashboard
      </h1>
      <p className="text-gray-700 text-center mb-2 md:mb-4">
        Welcome to the admin dashboard! Use the sidebar to manage users and products.
      </p>
      <div className="w-full h-px bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 my-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Link
          to="/admin/users"
          className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-6 shadow flex flex-col items-center"
        >
          <span className="text-2xl md:text-3xl font-bold text-indigo-600 mb-2">👤</span>
          <span className="font-semibold text-gray-700">Manage Users</span>
        </Link>
        <Link
          to="/admin/products"
          className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 shadow flex flex-col items-center"
        >
          <span className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">📦</span>
          <span className="font-semibold text-gray-700">Manage Products</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
