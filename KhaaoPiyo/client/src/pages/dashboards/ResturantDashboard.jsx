import React, { useState, useEffect } from "react";
import RestaurantSidebar from "../../components/RestaurantDashboard/RestaurantSidebar";
import RestaurantOverview from "../../components/RestaurantDashboard/RestaurantOverview";
import RestaurantProfile from "../../components/RestaurantDashboard/RestaurantProfile";
import RestaurantMenu from "../../components/RestaurantDashboard/RestaurantMenu";
import RestaurantTransaction from "../../components/RestaurantDashboard/RestaurantTransaction";
import RestaurantHelpDesk from "../../components/RestaurantDashboard/RestaurantHelpDesk";

import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RestaurantDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigate = useNavigate();
  const { isLogin, role } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  if (role !== "customer" && role !== "partner") {
    return (
      <>
        <div>You are not Logged as Restaurant. Please login again</div>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div
          className={`bg-(--color-background) duration-300 ${
            isCollapsed ? "w-2/60" : "w-12/60"
          }`}
        >
          <RestaurantSidebar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>

        <div className={`${isCollapsed ? "w-58/60" : "w-48/60"} duration-300`}>
          {active === "overview" && <RestaurantOverview />}
          {active === "profile" && <RestaurantProfile />}
          {active === "menu" && <RestaurantMenu />}
          {active === "transactions" && <RestaurantTransaction />}
          {active === "helpdesk" && <RestaurantHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default RestaurantDashboard;
