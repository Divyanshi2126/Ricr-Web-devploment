import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { toast } from "react-hot-toast";
import api from "../../config/Api";

const UserSidebar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { key: "overview", title: "OverView", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <ImProfile /> },
    { key: "orders", title: "Orders", icon: <TiShoppingCart /> },
    {
      key: "transactions",
      title: "Transactions",
      icon: <TbTransactionRupee />,
    },
    { key: "helpdesk", title: "Help Desk", icon: <RiCustomerService2Fill /> },
  ];

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);

      setUser("");
      setIsLogin(false);

      sessionStorage.clear();
      localStorage.clear();

      window.location.href = "/login";
    } catch (error) {
      toast.error("Logout failed");
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-2">
        <div>
          <div className="h-10 text-xl font-bold flex gap-5 items-center mb-3">
            <button
              className="ms-2 hover:scale-105"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <GiHamburgerMenu />
            </button>{" "}
            {!isCollapsed && (
              <span className="overflow-hidden text-nowrap">
                User Dashboard
              </span>
            )}
          </div>
          <hr />

          <div className="py-6 space-y-5 w-full">
            {menuItems.map((item, idx) => (
              <button
                className={`flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full text-nowrap overflow-hidden duration-300
                ${
                  active === item.key
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70 "
                } 
              `}
                onClick={() => setActive(item.key)}
                key={idx}
              >
                {" "}
                {item.icon}
                {!isCollapsed && item.title}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            className={`flex gap-3 items-center p-2 rounded-xl duration-300 text-base h-12 w-full text-nowrap 
                       hover:bg-amber-200/70 hover:text-red-600 bg-red-500 text-white`}
            onClick={handleLogout}
          >
            <MdLogout />
            {!isCollapsed && "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
