import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditManagerModal from "./modals/EditManagerModal";

const RestaurantProfile = () => {
  const { user: restaurant } = useAuth();
  const [isEditManagerModalOpen, setIsEditManagerModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-4xl bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Restaurant Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500">Restaurant Name</p>
            <p className="text-lg font-medium">
              {restaurant?.restaurantName || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Manager Name</p>
            <p className="text-lg font-medium">
              {restaurant?.managerName || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium">
              {restaurant?.email || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Contact Number</p>
            <p className="text-lg font-medium">
              {restaurant?.contactNumber || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-lg font-medium">
              {restaurant?.address || "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Cuisine Type</p>
            <p className="text-lg font-medium">
              {restaurant?.cuisineType || "-"}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={() => setIsEditManagerModalOpen(true)}
            className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
          >
            Edit Manager
          </button>
        </div>
      </div>

      {isEditManagerModalOpen && (
        <EditManagerModal onClose={() => setIsEditManagerModalOpen(false)} />
      )}
    </>
  );
};

export default RestaurantProfile;
