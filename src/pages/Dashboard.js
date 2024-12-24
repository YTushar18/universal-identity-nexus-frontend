// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import for navigation
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import axios from "axios";
// import axiosInstance from "../services/axiosInstance";

// const Dashboard = () => {
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     const checkAuthentication = () => {
//       const accessToken = localStorage.getItem("access_token");
//       if (!accessToken) {
//         navigate("/login"); // Redirect to login if no token
//       }
//     };

//     const fetchUserProfileMapping = async () => {
//       const userId = localStorage.getItem("user_id");
//       const accessToken = localStorage.getItem("access_token");

//       if (!userId || !accessToken) {
//         navigate("/login");
//         return;
//       }

//       try {
//         const response = await axiosInstance.get(
//           `/user/profile-mapping?user_id=${userId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }
//         );
//         setUserData(response.data);
//       } catch (err) {
//         setError("Failed to load user data. Please try again.");
//         console.error(err);
//       }
//     };

//     checkAuthentication(); // Check if the user is authenticated
//     fetchUserProfileMapping(); // Fetch user data
//   }, [navigate]);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Navbar */}
//       <Navbar
//         firstName={userData?.first_name || ""}
//         lastName={userData?.last_name || ""}
//         userType={userData?.user_type || ""}
//       />

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar
//           firstName={userData?.first_name || ""}
//           lastName={userData?.last_name || ""}
//           userType={userData?.user_type || ""}
//         />

//         {/* Main Content Area */}
//         <div className="flex-1 p-6 overflow-auto">
//           <h2 className="text-blue-800 text-2xl font-bold mb-6">
//             Welcome to Your Dashboard
//           </h2>
//           {error ? (
//             <p className="text-red-500">{error}</p>
//           ) : (
//             <>
//               {/* KPI Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {/* Card 1: No of Profiles */}
//                 <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
//                   <div className="mr-4">
//                     <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M5.121 17.804A4 4 0 015 15.05V9a7 7 0 017-7m0 0a7 7 0 017 7v6.05a4 4 0 01-.121 2.754M12 3v18"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-700">
//                       No of Profiles
//                     </h3>
//                     <p className="text-2xl font-bold text-blue-800">
//                       {userData?.profile_count || 0}
//                     </p>
//                   </div>
//                 </div>
//                 {/* Card 2: No of Requests */}
//                 <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
//                   <div className="mr-4">
//                     <div className="bg-green-100 text-green-600 p-4 rounded-full">
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M3 10h11m4 0h1m-6-5h6M4 15h16m0 0v1m-6-1v1m-8 0v-6a1 1 0 011-1h10a1 1 0 011 1v6"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-700">
//                       No of Requests
//                     </h3>
//                     <p className="text-2xl font-bold text-green-800">150</p>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProfilesSection from "../components/ProfilesSection"; // Import Profiles Section
import axiosInstance from "../services/axiosInstance";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("dashboard"); // State to manage active section
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        navigate("/login");
      }
    };

    const fetchUserProfileMapping = async () => {
      const userId = localStorage.getItem("user_id");
      const accessToken = localStorage.getItem("access_token");

      if (!userId || !accessToken) {
        navigate("/login");
        return;
      }

      try {
        const response = await axiosInstance.get(
          `/user/profile-mapping?user_id=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUserData(response.data);
      } catch (err) {
        setError("Failed to load user data. Please try again.");
        console.error(err);
      }
    };

    checkAuthentication();
    fetchUserProfileMapping();
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar
        firstName={userData?.first_name || ""}
        lastName={userData?.last_name || ""}
        userType={userData?.user_type || ""}
      />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          firstName={userData?.first_name || ""}
          lastName={userData?.last_name || ""}
          userType={userData?.user_type || ""}
          onMenuSelect={setActiveSection} // Pass function to update active section
        />

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          {activeSection === "dashboard" ? (
            <>
              <h2 className="text-blue-800 text-2xl font-bold mb-6">
                Welcome to Your Dashboard
              </h2>
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Card 1: No of Profiles */}
                  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="mr-4">
                      <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.121 17.804A4 4 0 015 15.05V9a7 7 0 017-7m0 0a7 7 0 017 7v6.05a4 4 0 01-.121 2.754M12 3v18"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        No of Profiles
                      </h3>
                      <p className="text-2xl font-bold text-blue-800">
                        {userData?.profile_count || 0}
                      </p>
                    </div>
                  </div>
                  {/* Card 2: No of Requests */}
                  <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                    <div className="mr-4">
                      <div className="bg-green-100 text-green-600 p-4 rounded-full">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10h11m4 0h1m-6-5h6M4 15h16m0 0v1m-6-1v1m-8 0v-6a1 1 0 011-1h10a1 1 0 011 1v6"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        No of Requests
                      </h3>
                      <p className="text-2xl font-bold text-green-800">150</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <ProfilesSection />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;