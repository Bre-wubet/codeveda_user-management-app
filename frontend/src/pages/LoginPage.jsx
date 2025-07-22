import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (user) => {
    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/dashboard");
    }
  };

  return (
    <div className="my-10 flex items-center justify-center bg-gradient-to-br from-gray-500 via-indigo-50 to-gray-400 p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 mb-6">
          Login
        </h1>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
        <p className="mt-6 text-center text-gray-700">
          Don't have an account?{' '}
          <a
            href="/register"
            className="inline-block text-blue-500 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;