import React from "react";
import Sidebar from "../../components/common/Sidebar";
import ProductList from "../../components/admin/ProductList";

// AdminProductPage component displays a list of products with a sidebar for navigation
const AdminProductPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <h1 className="text-2xl font-bold mb-4">Product Management</h1>
        <p className="mb-4">Manage products, view details, and perform actions.</p>
        <ProductList />
      </main>
    </div>
  );
};

export default AdminProductPage;
