import React, { useState } from "react";
import UserSidebar from "../../components/userDasboard/UserSidebar";
import UserProfile from "../../components/userDasboard/UserProfile";
import UserHelpDesk from "../../components/userDasboard/UserHelpDesk";
import UserOrder from "../../components/userDasboard/UserOrder";
import UserOverview from "../../components/userDasboard/UserOverview";
import UserTransaction from "../../components/userDasboard/UserTransaction";
const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="w-full  h-[91vh] flex">
        <div className="border border-b-blue-950 w-1/7">
          <UserSidebar active={active} setActive={setActive} />
        </div>
        <div className="border border-b-blue-400 w-6/7">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "order" && <UserOrder />}
          {active === "transaction" && <UserTransaction/>}
          {active === "helpdesk" && <UserHelpDesk/>}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
