import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiStore2Fill } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const RestaurantSidebar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { key: "overview", title: "Overview", icon: <MdDashboard /> },
    { key: "profile", title: "Restaurant Profile", icon: <RiStore2Fill /> },
    { key: "menu", title: "Menu", icon: <MdRestaurantMenu /> },
    { key: "orders", title: "Orders", icon: <FaClipboardList /> },
    { key: "transactions", title: "Transactions", icon: <TbTransactionRupee /> },
    { key: "support", title: "Help Desk", icon: <RiCustomerService2Fill /> },
    { key: "menu", title: "Menu", icon: <RiCustomerService2Fill />}

  ];

  return (
    <div className={`h-screen bg-blue-700 text-white p-4 ${isCollapsed ? "w-20" : "w-64"}`}>
      <div className="flex justify-between items-center mb-6">
        {!isCollapsed && <h1 className="text-xl font-bold">Restaurant</h1>}
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          <GiHamburgerMenu />
        </button>
      </div>

      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer
            ${active === item.key ? "bg-white text-blue-700" : "hover:bg-blue-600"}`}
          >
            {item.icon}
            {!isCollapsed && item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantSidebar;
