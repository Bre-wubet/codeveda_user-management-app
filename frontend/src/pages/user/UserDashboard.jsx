import React from "react";
import { useAuth } from "../../context/AuthContext";
import { UserCircleIcon, CollectionIcon, PlusCircleIcon } from '@heroicons/react/outline';

const UserDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center">
      <div className="flex flex-col items-center mb-6">
        <img
          src={user?.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.username || 'User')}`}
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover border-4 border-indigo-200 shadow mb-2"
        />
        <h1 className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 mb-1">
          Welcome, {user?.username || 'User'}!
        </h1>
        <p className="text-gray-700 text-center">
          Here you can manage your account, products, and profile.
        </p>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 my-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <a
          href="/user/products"
          className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl p-6 shadow hover:shadow-lg transition group"
        >
          <CollectionIcon className="h-10 w-10 text-indigo-500 group-hover:text-indigo-700 mb-2" />
          <span className="font-semibold text-gray-700">My Products</span>
        </a>
        <a
          href="/user/profile"
          className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-6 shadow hover:shadow-lg transition group"
        >
          <UserCircleIcon className="h-10 w-10 text-blue-500 group-hover:text-blue-700 mb-2" />
          <span className="font-semibold text-gray-700">Profile</span>
        </a>
        <a
          href="/user/products/create"
          className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-6 shadow hover:shadow-lg transition group"
        >
          <PlusCircleIcon className="h-10 w-10 text-purple-500 group-hover:text-purple-700 mb-2" />
          <span className="font-semibold text-gray-700">Create Product</span>
        </a>
      </div>
    </div>
  );
};

export default UserDashboard;
