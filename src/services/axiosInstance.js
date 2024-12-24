import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response, // Return successful responses as they are
  async (error) => {
    const originalRequest = error.config;

    // If the response status is 401 (Unauthorized) and the request is not already retried
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken) {
        try {
          // Attempt to refresh the access token using the refresh token
          const { data } = await axios.post("/api/auth/refresh", {
            refresh_token: refreshToken,
          });

          // Save the new access token in localStorage
          localStorage.setItem("access_token", data.access_token);

          // Update the Authorization header and retry the original request
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${data.access_token}`;
          return axiosInstance(originalRequest);
        } catch (err) {
          console.error("Token refresh failed:", err);

          // If refresh fails, log the user out
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          localStorage.removeItem("user_id");

          // Redirect to the Login page
          window.location.href = "/login";
        }
      } else {
        // If no refresh token is available, log the user out
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user_id");

        window.location.href = "/login";
      }
    }

    // Reject the error if it's not handled by the interceptor
    return Promise.reject(error);
  }
);

export default axiosInstance;
