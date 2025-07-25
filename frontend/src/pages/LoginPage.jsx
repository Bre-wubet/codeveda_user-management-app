import React from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { LockClosedIcon } from '@heroicons/react/solid';

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
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-100 via-indigo-50 to-blue-100 p-4">
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 pr-8">
        <LockClosedIcon className="h-24 w-24 text-indigo-400 mb-6" />
        <h2 className="text-3xl font-bold text-indigo-700 mb-2">Welcome Back!</h2>
        <p className="text-gray-600 text-lg text-center max-w-xs">Sign in to manage your account, products, and more.</p>
      </div>
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 mb-6">
          Login
        </h1>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
        <p className="mt-6 text-center text-gray-700">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="inline-block text-blue-500 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;