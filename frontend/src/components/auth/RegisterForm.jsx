import React, { useState } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
// register form component by the auth service api

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const user = await authService.register({ name, email, password });
      if (user && user.token) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/user/dashboard");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
