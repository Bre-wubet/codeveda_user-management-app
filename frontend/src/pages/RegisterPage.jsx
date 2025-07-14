import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import { useNavigate } from "react-router-dom";

// RegisterPage component allows users to create a new account an links to login if already registered
export const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate("/login");
  };

  return (
    <div className="register-page">
      <h1>Register</h1>
      <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};