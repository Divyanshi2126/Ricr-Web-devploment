import React, { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Paneer Butter Masala", price: 220, category: "Main Course", available: true },
    { id: 2, name: "Veg Biryani", price: 180, category: "Rice", available: true },
    { id: 3, name: "Cold Coffee", price: 120, category: "Beverages", available: false },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      ...formData,
      price: Number(formData.price),
    };
    setMenuItems([...menuItems, newItem]);
    setFormData({ name: "", price: "", category: "", available: true });
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Menu Management</h2>

      {/* Add Item Form */}
      <form onSubmit={handleAddItem} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-xl px-3 py-2"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded-xl px-3 py-2"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="border rounded-xl px-3 py-2"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl px-4 py-2 hover:bg-blue-700"
        >
          <FaPlus /> Add Item
        </button>
      </form>

      {/* Menu Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Item</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price (₹)</th>
              <th className="p-3">Available</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">₹{item.price}</td>
                <td className="p-3">
                  {item.available ? (
                    <span className="text-green-600">Yes</span>
                  ) : (
                    <span className="text-red-600">No</span>
                  )}
                </td>
                <td className="p-3 flex gap-3">
                  <button className="text-blue-600 hover:underline">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {menuItems.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No menu items added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantMenu;
