import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();

  const adminLinks = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/admin/users", label: "Users" },
    { to: "/admin/products", label: "Products" },
  ];

  const userLinks = [
    { to: "/user/dashboard", label: "Dashboard" },
    { to: "/user/products", label: "My Products" },
    { to: "/user/profile", label: "Profile" },
  ];

  const links = user?.role === "admin" ? adminLinks : userLinks;

  return (
    <aside className="w-64 min-h-screen bg-gray-100 p-4 border-r hidden md:block">
      <nav className="flex flex-col gap-3">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-100 ${
                isActive ? "bg-blue-200 font-semibold" : ""
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
