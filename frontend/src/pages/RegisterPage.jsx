import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate("/login");
  };

  return (
    <div className="my-10 flex items-center justify-center bg-gradient-to-br from-gray-500 via-indigo-50 to-gray-400">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-4 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 mb-6">
          Register
        </h1>
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
        <p className="mt-3 text-center text-gray-700">
          Already have an account?{' '}
          <a
            href="/login"
            className="inline-block text-blue-500 hover:text-blue-800 font-semibold px-4 py-2 rounded-lg"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;