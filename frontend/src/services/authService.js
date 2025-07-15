import api from './api';

const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    } else {
        throw new Error('Login failed: No token received');
    }
    return response.data.Error ? response.data.Error : response.data.user;
};

const register = async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data.Error ? response.data.Error : response.data.user;
};

//authLogout function
const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

export default {
    login,
    register,
    logout
};
