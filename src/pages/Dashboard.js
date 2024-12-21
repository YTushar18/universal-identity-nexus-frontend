// import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="flex-1 p-6 overflow-auto">
//           <h2 className="text-blue-800 text-2xl font-bold">
//             Welcome to Your Dashboard
//           </h2>
//           <p className="text-gray-700 mt-4">
//             Here you can manage your profiles and explore other features.
//           </p>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            <h2 className="text-blue-800 text-2xl font-bold">
              Welcome to Your Dashboard
            </h2>
            <p className="text-gray-700 mt-4">
              Here you can manage your profiles and explore other features.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;