import React from "react";
import MyProducts from "../../components/user/MyProducts";

const UserMyProducts = () => {
  return (
    <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 mb-2">
        My Products
      </h1>
      <div className="w-full h-px bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 my-6" />
      <MyProducts />
    </div>
  );
};

export default UserMyProducts;
