import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../services/axiosInstance";
import profileAttributes from "../config/profileAttributes"; // Import the configuration

const ProfilesSection = () => {
  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [isNewProfile, setIsNewProfile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const attributesPerPage = 5; // Set number of attributes per page
  const userId = localStorage.getItem("user_id");
  const accessToken = localStorage.getItem("access_token");

  // Fetch profiles on component mount
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axiosInstance.get(
          `/user/profiles?user_id=${userId}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setProfiles(response.data.data);
      } catch (err) {
        console.error("Error fetching profiles:", err);
      }
    };

    fetchProfiles();
  }, [userId, accessToken]);

  const handleProfileSelect = (profile) => {
    setActiveProfile(profile);
    setFormData(profile.profile_data || {});
    setIsNewProfile(false);
    setCurrentPage(0);
  };

  const handleNewProfile = () => {
    setActiveProfile(null);
    setFormData({});
    setIsNewProfile(true);
    setCurrentPage(0);
  };

  const handleFormChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = async () => {
    try {
      if (isNewProfile) {
        await axios.post(
          `/api/profiles`,
          {
            user_id: userId,
            profile_id: profiles.length + 1,
            profile_name: "New Profile",
            profile_data: formData,
          },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
      } else {
        await axios.put(
          `/api/profiles`,
          {
            user_id: userId,
            profile_id: activeProfile.profile_id,
            profile_name: activeProfile.profile_name,
            profile_data: formData,
          },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
      }
      alert("Profile saved successfully!");
    } catch (err) {
      console.error("Error saving profile:", err);
    }
  };

  const renderFormFields = () => {
    if (!activeProfile && !isNewProfile)
      return <p>Select a profile to edit or create a new one.</p>;

    const profileName =
      activeProfile?.profile_name?.toLowerCase() || "new_profile";
    const attributes = profileAttributes[profileName] || [];
    const startIndex = currentPage * attributesPerPage;
    const paginatedAttributes = attributes.slice(
      startIndex,
      startIndex + attributesPerPage
    );

    return paginatedAttributes.map((attr) => (
      <div key={attr.key} className="mb-4">
        <label className="block text-gray-700">{attr.label}:</label>
        <input
          type={attr.type}
          className="block w-full p-2 border border-gray-300 rounded"
          value={formData[attr.key] || ""}
          onChange={(e) => handleFormChange(attr.key, e.target.value)}
        />
      </div>
    ));
  };

  const totalPages = Math.ceil(
    (profileAttributes[activeProfile?.profile_name?.toLowerCase()] || [])
      .length / attributesPerPage
  );

  return (
    <div className="flex">
      {/* Profile Selection */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h3 className="text-lg font-bold mb-4">Profiles</h3>
        {profiles.map((profile) => (
          <button
            key={profile.profile_id}
            className={`w-full text-left py-2 px-4 mb-2 rounded ${
              activeProfile?.profile_id === profile.profile_id
                ? "bg-teal-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleProfileSelect(profile)}
          >
            {profile.profile_name}
          </button>
        ))}
        <button
          className="w-full text-left py-2 px-4 mb-2 rounded bg-green-500 text-white"
          onClick={handleNewProfile}
        >
          + Add New Profile
        </button>
      </div>

      {/* Form Section */}
      <div className="flex flex-col w-3/4 p-6 bg-gray-50 rounded-lg shadow-md min-h-[90vh]">
        <h3 className="text-lg font-bold mb-6">
          {isNewProfile
            ? "New Profile"
            : activeProfile?.profile_name || "Select a Profile"}
        </h3>
        <div className="flex-1">{renderFormFields()}</div>
        <div className="flex justify-between items-center mt-6">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <div className="flex gap-4">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={handleNewProfile}
            >
              Cancel
            </button>
            {currentPage === totalPages - 1 ? (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleSave}
              >
                {isNewProfile ? "Submit" : "Save Changes"}
              </button>
            ) : (
              <button
                className="bg-green-500 text-white py-2 px-4 rounded"
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesSection;
