import api from "./api";


//admin can create, update, delete users
const getAllUsers = async () => {
    const response = await api.get('/users');
    return response.data.Error ? response.data.Error : response.data;
}

const createUser = async (userData) => {
    const response = await api.post('/users', userData);
    return response.data.Error ? response.data.Error : response.data.user;
}

const updateUser = async (userId, userData) => {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data.Error ? response.data.Error : response.data.user;
}

const deleteUser = async (userId) => {
    const response = await api.delete(`/users/${userId}`);
    return response.data.Error ? response.data.Error : response.data.message;
}


// user access
const getUserById = async (userId) => {
    const response = await api.get(`/users/${userId}`);
    return response.data.Error ? response.data.Error : response.data.user;
};

const updateUserProfile = async (userId, userData) => {
    const response = await api.put(`/users/${userId}/profile`, userData);
    return response.data.Error ? response.data.Error : response.data.user;
};

export { getAllUsers, createUser, updateUser, deleteUser, getUserById, updateUserProfile };