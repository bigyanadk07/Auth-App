// Frontend: src/apis/Api.tsx
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const register = async (username: string, email: string, password: string) => {
    const response = await api.post('/register', { username, email, password });
    return response.data;
};

export const login = async (email: string, password: string) => {
    const response = await api.post('/login', { email, password });
    return response.data;
};

export const getProfile = async () => {
    const response = await api.get('/profile');
    return response.data;
};