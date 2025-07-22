import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 via-indigo-50 to-gray-400 p-4">
      {children}
    </div>
  );
};

export default AuthLayout; 