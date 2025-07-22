import React, { useState, useEffect } from "react";
import { getProductById, updateProduct } from "../../services/productService";
import { useAuth } from "../../context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";

const ProductEdit = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProductById(id);
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setImage(product.image);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = { name, description, price, image, userId: user.id };
    await updateProduct(id, updatedProduct);
    navigate("/my-products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Edit Product</h2>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-md p-3 w-full outline-none transition"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-md p-3 w-full outline-none transition"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-md p-3 w-full outline-none transition"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-md p-3 w-full outline-none transition"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
