import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

// LoginPage component link to register if not registered
// navigating to the admin dashboard if the user is an admin and navigating to the user dashboard if the user is a regular user
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
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default LoginPage;