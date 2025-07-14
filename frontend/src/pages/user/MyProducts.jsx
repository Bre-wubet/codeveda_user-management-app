import React from "react";
import Sidebar from "../../components/common/Sidebar";
import MyProducts from "../../components/user/MyProducts";

// MyProducts component displays a list of products owned by the user with a sidebar for navigation
const UserMyProducts = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <h1 className="text-2xl font-bold mb-4">My Products</h1>
        <MyProducts />
      </main>
    </div>
  );
};

export default UserMyProducts;
