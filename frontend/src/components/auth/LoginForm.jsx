import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

//login form component by the auth service api
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login({ email, password });
      login(user);
      if (user && user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-md p-3 w-full outline-none transition"
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-md p-3 w-full outline-none transition"
            required
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
