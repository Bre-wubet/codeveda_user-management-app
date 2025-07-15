import api from "./api"

// admin can get list of products, delete products
const getAllProducts = async () => {
    const response = await api.get('/products');
    return response.data.Error ? response.data.Error : response.data.products;
};

const deleteProduct = async (productId) => {
    const response = await api.delete(`/products/${productId}`);
    return response.data.Error ? response.data.Error : response.data.message;
};

// user access
const getMyProducts = async () => {
    const response = await api.get('/products/user/${userId}');
    return response.data.Error ? response.data.Error : response.data.products;
};

const createProduct = async (productData) => {
    const response = await api.post('/products', productData);
    return response.data.Error ? response.data.Error : response.data.product;
};

const updateProduct = async (productId, productData) => {
    const response = await api.put(`/products/${productId}`, productData);
    return response.data.Error ? response.data.Error : response.data.product;
};


export { createProduct, updateProduct, deleteProduct, getAllProducts, getMyProducts };