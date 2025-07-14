
import { Route, Routes } from "react-router-dom";
import { protectedRoute } from "./components/common/ProtectedRoute";


// define the main App component with routes for the application
const App = () => {
  return (
    <Routes>
    {/* // auth routes */}
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
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* // catch-all route for 404 */}
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
};

export default App;