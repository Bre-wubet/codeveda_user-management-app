// context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import  logout from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (user) => setUser(user);
  const logout = () => {
    logout();
    setUser(null);
  };
  const updateUser = (updated) => setUser(updated);

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
