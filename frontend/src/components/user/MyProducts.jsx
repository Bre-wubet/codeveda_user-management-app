import React, { useEffect, useState } from "react";
import { getMyProducts, deleteProduct } from "../../services/productService";
import { useAuth } from "../../context/AuthContext";

// MyProducts component for displaying and managing user's products
const MyProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchMyProducts = async () => {
      const myProducts = await getMyProducts(user.id);
      setProducts(myProducts);
    };
    fetchMyProducts();
  }, [user.id]);

  const handleDelete = async (productId) => {
    await deleteProduct(productId);
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center hover:shadow-xl transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-3 border" />
            <h3 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h3>
            <p className="text-blue-600 font-semibold mb-2">${product.price}</p>
            <div className="flex space-x-2 mt-auto">
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded shadow focus:outline-none focus:ring-2 focus:ring-red-200 transition"
              >
                Delete
              </button>
              <button 
              onClick={() => handleDetails(product.id)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
