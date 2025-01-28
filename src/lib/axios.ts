import axios from "axios";
import AuthService from "@/features/auth/AuthService";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Implement token refresh logic here
      // Example:
      // const newToken = await AuthService.refreshToken();
      // if (newToken) {
      //   localStorage.setItem('access_token', newToken);
      //   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      //   return axiosInstance(originalRequest);
      // }
      // If refresh fails, logout the user
      AuthService.logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
