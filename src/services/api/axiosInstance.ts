// src/api/axiosInstance.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7059/api',
});

export default instance;
