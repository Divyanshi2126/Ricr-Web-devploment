import React, { useState } from "react";
import UserSidebar from "../../components/userDasboard/UserSidebar";
import UserProfile from "../../components/userDasboard/UserProfile";
import UserHelpDesk from "../../components/userDasboard/UserHelpDesk";
import UserOrder from "../../components/userDasboard/UserOrder";
import UserOverview from "../../components/userDasboard/UserOverview";
import UserTransaction from "../../components/userDasboard/UserTransaction";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState("false");
  return (
    <>
      <div className="w-full  h-[91vh] flex">
        <div
          className={
            'bg-(--color-background) duration-300 ${isCollasped ? "w-2/60" : "w-12/60"} '
          }
        >
          <UserSidebar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={'${isCollasped ? "w-58/60" : "w-48/60"}duration-300'}>
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "order" && <UserOrder />}
          {active === "transaction" && <UserTransaction />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
