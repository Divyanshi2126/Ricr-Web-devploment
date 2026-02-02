import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from "../../../config/Api";

const EditManagerModal = ({ onClose }) => {
  const { user: restaurant, setUser, setIsLogin } = useAuth();

  const [formData, setFormData] = useState({
    managerName: restaurant?.managerName || "",
    email: restaurant?.email || "",
    contactNumber: restaurant?.contactNumber || "",
    restaurantName: restaurant?.restaurantName || "",
    address: restaurant?.address || "",
    cuisineType: restaurant?.cuisineType || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await api.put("/restaurant/update", formData);
      sessionStorage.setItem("KhaaoPiyo", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        {/* Modal */}
        <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-6 relative">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Edit Manager</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Restaurant Name
              </label>
              <input
                type="text"
                name="restaurantName"
                value={formData.restaurantName}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Manager Name
              </label>
              <input
                type="text"
                name="managerName"
                value={formData.managerName}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Cuisine Type
              </label>
              <input
                type="text"
                name="cuisineType"
                value={formData.cuisineType}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl border hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default EditManagerModal;
