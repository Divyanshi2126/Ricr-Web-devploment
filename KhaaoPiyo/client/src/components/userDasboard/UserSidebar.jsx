import React from "react";
import { MdDashboard } from "react-icons/md";
import {
  FaUser,
  FaShoppingBag,
  FaMoneyBill,
  FaQuestionCircle,
} from "react-icons/fa";

const UserSidebar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold">User Dashboard</div>
        <hr />

        <div className="grid gap-3 p-6">
          <button
            className={`flex items-center gap-2 p-3 rounded-xl 
                ${
                  active === "overview"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
            onClick={() => setActive("overview")}
          >
            <MdDashboard />
            Overview
          </button>

          <button
            className={`flex items-center gap-2 p-3 rounded-xl 
                ${
                  active === "profile"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
            onClick={() => setActive("profile")}
          >
            <FaUser />
            Profile
          </button>

          <button
            className={`flex items-center gap-2 p-3 rounded-xl 
                ${
                  active === "order"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
            onClick={() => setActive("order")}
          >
            <FaShoppingBag />
            Orders
          </button>

          <button
            className={`flex items-center gap-2 p-3 rounded-xl 
                ${
                  active === "transaction"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
            onClick={() => setActive("transaction")}
          >
            <FaMoneyBill />
            Transaction
          </button>

          <button
            className={`flex items-center gap-2 p-3 rounded-xl 
                ${
                  active === "helpdesk"
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70"
                }`}
            onClick={() => setActive("helpdesk")}
          >
            <FaQuestionCircle />
            Help desk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
