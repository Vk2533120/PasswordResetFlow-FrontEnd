import axios from 'axios';

const API = axios.create({
  baseURL: 'https://password-resetflow-backend-2.onrender.com/api/auth',
});

export const registerUser = (data) => API.post('/register', data);
export const sendResetLink = (data) => API.post('/forgot-password', data);
export const resetPassword = (token, data) => API.post(`/reset-password/${token}`, data);
export const loginUser = (data) => API.post('/login', data);
