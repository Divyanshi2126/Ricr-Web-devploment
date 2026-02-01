import React, { useState, useEffect } from "react";
import UserSidebar from "../../components/userDasboard/UserSidebar";
import UserOverview from "../../components/userDasboard/UserOverview";
import UserProfile from "../../components/userDasboard/UserProfile";
import UserOrders from "../../components/userDasboard/UserOrder";
import UserTransactions from "../../components/userDasboard/UserTransaction";
import UserHelpDesk from "../../components/userDasboard/UserHelpDesk";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigate = useNavigate();
  const { isLogin, role } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  if (role !== "customer") {
    return (
      <>
        <div>You are not Logged as Customer. Please login again</div>
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
          <UserSidebar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={`${isCollapsed ? "w-58/60" : "w-48/60"} duration-300`}>
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transactions" && <UserTransactions />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
