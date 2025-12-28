import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#F5AFAF] text-center flex justify-between mb-9">
        <h3 className="text-2xl font-extrabold text-white">My MakeupApp</h3>
        <div className="p-2 flex gap-3 text-small">
          <Link to={"/"} className="text-black">
            {" "}
            Home{" "}
          </Link>
          <Link to={"/about"} className="text-black">
            {" "}
            About{" "}
          </Link>
          <Link to={"/contact"} className="text-black">
            {" "}
            Contact{" "}
          </Link>
          <Link to={"/product"} className="text-black">
            {" "}
            Product{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
