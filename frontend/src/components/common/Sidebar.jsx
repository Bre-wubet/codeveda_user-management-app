import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { HomeIcon, UsersIcon, ArchiveIcon, UserCircleIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  const { user } = useAuth();

  const adminLinks = [
    { to: "/admin/dashboard", label: "Dashboard", icon: HomeIcon },
    { to: "/admin/users", label: "Users", icon: UsersIcon },
    { to: "/admin/products", label: "Products", icon: ArchiveIcon },
  ];

  const userLinks = [
    { to: "/user/dashboard", label: "Dashboard", icon: HomeIcon },
    { to: "/user/products", label: "My Products", icon: ArchiveIcon },
    { to: "/user/profile", label: "Profile", icon: UserCircleIcon },
  ];

  const links = user?.role === "admin" ? adminLinks : userLinks;

  const linkClasses = "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300";
  const activeLinkClasses = "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg";
  const inactiveLinkClasses = "text-gray-600 hover:bg-indigo-100 hover:text-indigo-700";

  return (
    <aside className="w-64 min-h-screen bg-white/80 backdrop-blur-sm p-4 border-r border-gray-200/60 hidden md:block fixed pt-20">
      <nav className="flex flex-col gap-3">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            <Icon className="h-6 w-6" />
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
