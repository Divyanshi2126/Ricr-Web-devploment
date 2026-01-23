import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditprofileModal from "./modals/EditprofileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <div className="max-w-3xl bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-lg font-medium">{user?.fullName}</p>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium">{user?.email}</p>
          </div>

          {/* Phone */}
          <div>
            <p className="text-sm text-gray-500">Mobile Number</p>
            <p className="text-lg font-medium">{user?.mobileNumber}</p>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => setIsEditProfileModalOpen(true)}
            className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {isEditProfileModalOpen && (
        <EditprofileModal
          onClose={() => setIsEditProfileModalOpen(false)}
        />
      )}
    </>
  );
};

export default UserProfile;
