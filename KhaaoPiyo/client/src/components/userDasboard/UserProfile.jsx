import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditprofileModal from "./modals/EditprofileModal";

const UserProfile = () => {
  const { user } = useAuth();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(user?.profileImage || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      // yahan API call kar sakte ho image upload ke liye
    }
  };

  return (
    <>
      <div className="max-w-4xl bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

        {/* PROFILE HEADER */}
        <div className="flex gap-6 items-center mb-8">
          {previewImage ? (
            <img
              src={previewImage}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover border"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold">
              {user?.fullName?.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <label className="cursor-pointer text-sm text-blue-600 font-medium">
              Change Photo
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <p className="text-gray-500 text-sm mt-1">
              JPG, PNG allowed
            </p>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-lg font-medium">{user?.fullName || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium">{user?.email || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Mobile Number</p>
            <p className="text-lg font-medium">{user?.mobileNumber || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="text-lg font-medium">{user?.gender || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-lg font-medium">{user?.dob || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-lg font-medium">{user?.address || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Payment Method</p>
            <p className="text-lg font-medium">
              {user?.paymentMethod || "Not Added"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Geolocation</p>
            <p className="text-lg font-medium">
              {user?.latitude && user?.longitude
                ? `${user.latitude}, ${user.longitude}`
                : "Not Available"}
            </p>
          </div>
        </div>

        {/* EDIT BUTTON */}
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
        <EditprofileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;