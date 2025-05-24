// src/auth/authService.ts
import axios from '../services/api/axiosInstance';

export const loginUser = async (data: { email: string; password: string }) => {
  const res = await axios.post('/Account/login', data);
  return res.data;
};

export const registerUser = async (data: { email: string; password: string }) => {
  const res = await axios.post('/register', data);
  return res.data;
};
