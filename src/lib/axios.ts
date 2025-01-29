import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000", // Adjust as needed
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the access token
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // Ensure code runs only on client-side
      const token = localStorage.getItem("access_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
