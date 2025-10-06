import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-w8tk.onrender.com", // make sure backend runs on this port
});

// Add token automatically to every request
API.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
