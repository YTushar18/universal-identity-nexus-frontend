import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const { data } = await axios.post('/api/auth/refresh', { refresh_token: refreshToken });
          localStorage.setItem('access_token', data.access_token);

          // Update the header with the new token and retry the request
          originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`;
          return axiosInstance(originalRequest);
        } catch (err) {
          // If refresh fails, log the user out
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;



// Usage in API Calls

// Replace axios with axiosInstance in your services to include automatic token refresh.
// ---------------------------------------------------------------------------------------
// import axiosInstance from './services/axiosInstance';

// export const getUserData = async () => {
//   const response = await axiosInstance.get('/user/data');
//   return response.data;
// };
