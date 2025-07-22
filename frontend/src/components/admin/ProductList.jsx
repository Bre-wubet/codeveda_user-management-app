import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../services/productService";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    await deleteProduct(productId);
    setProducts(products.filter((product) => product._id !== productId));
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="animate-pulse text-indigo-600 text-xl font-semibold">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen right-96 items-center bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 p-4 md:p-6">
      
        <div className="left-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div 
              key={product._id} 
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-5 flex flex-col"
            >
              <div className="relative group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 md:h-56 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
              
              <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-2">{product.name}</h3>
              <p className="text-indigo-600 font-semibold mb-4">${product.price}</p>
              
              <div className="flex gap-2 mt-auto">
                <button
                  onClick={() => handleDelete(product._id)}
                  className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                  Delete
                </button>
                <button 
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default ProductList;
