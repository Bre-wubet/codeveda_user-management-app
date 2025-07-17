import React, { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../services/productService";

// ProductList component to display and manage products by admin and to see all products and details
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

  if (loading) return <div>Loading...</div>;

  return (
    //note: to list all products with their name, price, and image of the product a delete, details button in grid format
    <div>
      <h2 className="text-xl font-bold mb-4">Products List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
            <div className="flex space-x-2">
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
              <button className="bg-blue-600 text-white px-2 py-1 rounded">
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
