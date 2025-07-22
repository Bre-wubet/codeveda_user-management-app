import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100">
        <Sidebar />
        <main className="flex-1 p-4 md:p-10 flex flex-col items-center md:pl-64">
          {children}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout; 