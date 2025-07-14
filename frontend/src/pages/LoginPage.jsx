import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";

// LoginPage component link to register if not registered
// and handles successful login by navigating to the dashboard
export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};