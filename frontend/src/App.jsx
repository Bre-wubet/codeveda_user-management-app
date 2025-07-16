
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import protectedRoute from "./components/common/ProtectedRoute";
import RegisterPage from "../src/pages/RegisterPage";
import LoginPage from "../src/pages/LoginPage";

// Admin pages
import AdminDashboard from "../src/pages/admin/AdminDashboard";
import UsersPage from "../src/pages/admin/AsminUserPage";
import ProductsPage from "../src/pages/admin/AdminProductPage";

// User pages
import UserDashboard from "../src/pages/user/UserDashboard";
import UserProducts from "../src/pages/user/MyProducts";
import ProfilePage from "../src/pages/user/ProfilePage";
// import HomePage from "../src/pages/HomePage";
// import AboutPage from "../src/pages/AboutPage";

// define the main App component with routes for the application
const App = () => {
  return (
    <Routes>
    {/* // auth routes */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

    {/* // admin routes */}
    <Route path="/admin/dashboard" element={protectedRoute(<AdminDashboard />)} />
    <Route path="/admin/users" element={protectedRoute(<UsersPage />)} />
    <Route path="/admin/products" element={protectedRoute(<ProductsPage />)} />

    {/* // user routes */}
    <Route path="/user/dashboard" element={protectedRoute(<UserDashboard />)} />
    <Route path="/user/products" element={protectedRoute(<UserProducts />)} />
    <Route path="/user/profile" element={protectedRoute(<ProfilePage />)} />

    {/* // public routes */}
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* // catch-all route for 404 */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}

    </Routes>
  );
};

export default App;