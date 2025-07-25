import React from "react";
import ProductList from "../../components/admin/ProductList";

const AdminProductPage = () => {
  return (
    <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
        Product Management
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Manage products, view details, and perform actions.
      </p>
      <div className="w-full h-px bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 my-6" />
      <ProductList />
    </div>
  );
};

export default AdminProductPage;
