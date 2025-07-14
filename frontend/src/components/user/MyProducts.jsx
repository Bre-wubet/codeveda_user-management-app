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

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
            <div className="flex space-x-2">
              <button
                onClick={() => handleDelete(product.id)}
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

export default MyProducts;
