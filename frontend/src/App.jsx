
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import RegisterPage from "../src/pages/RegisterPage";
import LoginPage from "../src/pages/LoginPage";
import HomePage from "./pages/HomePage";

// Admin pages
import AdminDashboard from "../src/pages/admin/AdminDashboard";
import UsersPage from "./pages/admin/AdminUserPage";
import ProductsPage from "../src/pages/admin/AdminProductPage";

// User pages
import UserDashboard from "../src/pages/user/UserDashboard";
import ProductUserCreate from "../src/pages/user/ProductCreate";
import UserProducts from "../src/pages/user/MyProducts";
import ProfilePage from "../src/pages/user/ProfilePage";

import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";

const App = () => {
  return (
    <Routes>
      {/* Public home route */}
      <Route path="/" element={<HomePage />} />
      {/* Auth routes */}
      <Route path="/register" element={
        <AuthLayout>
          <RegisterPage />
        </AuthLayout>
      } />
      <Route path="/login" element={
        <AuthLayout>
          <LoginPage />
        </AuthLayout>
      } />

      {/* Admin routes */}
      <Route path="/admin/dashboard" element={
        <ProtectedRoute>
          <DashboardLayout>
            <AdminDashboard />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/users" element={
        <ProtectedRoute>
          <DashboardLayout>
            <UsersPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/admin/products" element={
        <ProtectedRoute>
          <DashboardLayout>
            <ProductsPage />
          </DashboardLayout>
        </ProtectedRoute>
      } />

      {/* User routes */}
      <Route path="/user/dashboard" element={
        <ProtectedRoute>
          <DashboardLayout>
            <UserDashboard />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/user/products/create" element={
        <ProtectedRoute>
          <DashboardLayout>
            <ProductUserCreate />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/user/products" element={
        <ProtectedRoute>
          <DashboardLayout>
            <UserProducts />
          </DashboardLayout>
        </ProtectedRoute>
      } />
      <Route path="/user/profile" element={
        <ProtectedRoute>
          <DashboardLayout>
            <ProfilePage />
          </DashboardLayout>
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default App;