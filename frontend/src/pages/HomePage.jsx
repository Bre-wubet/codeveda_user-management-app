import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../services/productService';
import reactLogo from '../assets/react.svg';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(Array.isArray(data) ? data : []);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-indigo-100 pb-12">
      <div className="w-full flex flex-col items-center justify-center pt-10 pb-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 flex flex-col items-center w-full max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 mb-4">
            Welcome to CodeVeda User Management
          </h1>
          <p className="text-gray-700 text-center mb-6 max-w-xl">
            Manage your users and products with ease. Please login or register to get started.
          </p>
          <div className="flex gap-4">
            <Link to="/login" className="px-6 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition">Login</Link>
            <Link to="/register" className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">Register</Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-6 mt-2">All Products</h2>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="text-indigo-500 text-lg animate-pulse">Loading products...</span>
          </div>
        ) : products.length === 0 ? (
          <div className="flex justify-center items-center h-40">
            <span className="text-gray-500 text-lg">No products found.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product._id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center">
                <img
                  src={product.productImg || reactLogo}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-lg mb-3 border border-indigo-100 bg-indigo-50"
                  onError={e => { e.target.onerror = null; e.target.src = reactLogo; }}
                />
                <h3 className="text-lg font-semibold text-indigo-700 mb-1 text-center line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2 text-center line-clamp-2">{product.description}</p>
                <span className="text-indigo-600 font-bold text-base mb-2">${product.price?.toFixed(2) ?? 'N/A'}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage; 