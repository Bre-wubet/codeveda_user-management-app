import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import { useNavigate, Link } from "react-router-dom";
import { UserAddIcon } from '@heroicons/react/solid';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-100 via-indigo-50 to-blue-100 p-4">
      <div className="hidden md:flex flex-col items-center justify-center w-1/2 pr-8">
        <UserAddIcon className="h-24 w-24 text-blue-400 mb-6" />
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Join Us!</h2>
        <p className="text-gray-600 text-lg text-center max-w-xs">Create your account to start managing your products and profile.</p>
      </div>
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 mb-6">
          Register
        </h1>
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
        <p className="mt-3 text-center text-gray-700">
          Already have an account?{' '}
          <Link
            to="/login"
            className="inline-block text-blue-500 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;