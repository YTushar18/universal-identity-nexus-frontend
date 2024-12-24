import axiosInstance from "./axiosInstance";


const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchUserProfiles = async () => {
  const accessToken = localStorage.getItem("access_token");
  const userId = localStorage.getItem("user_id"); // Retrieve user_id from localStorage

  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/api/user/profiles?user_id=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    throw error;
  }
};
