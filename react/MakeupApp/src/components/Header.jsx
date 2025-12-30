import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#f2047b] text-center flex justify-between ">
        <h3 className="text-2xl font-extrabold p-2">My MakeupApp</h3>
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
          <Link to={"/signup"} className="text-black">
            {" "}
            Signup{" "}
          </Link>
          <Link to={"/login"} className="text-black">
            {" "}
            Login{" "}
          </Link>

         
        </div>
      </div>
    </>
  );
};
export default Header;
