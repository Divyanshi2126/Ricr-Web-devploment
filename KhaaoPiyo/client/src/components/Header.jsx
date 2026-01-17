import React from "react";
import tranparent from "../assets/transparent.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-(--color-primary) px-6 py-3 flex justify-between items-center shadow-md">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img
            src={tranparent}
            alt="Logo"
            className="h-12 w-20 object-contain"
          />
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm font-semibold">
          <Link
            to={"/"}
            className="text-white hover:text-(--color-accent) transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-white hover:text-(--color-accent) transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-white hover:text-(--color-accent) transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/Login")}
            className="border border-white text-white px-4 py-2 rounded-lg text-sm font-semibold
                       hover:bg-white hover:text-(--color-primary)
                       transition-all duration-200"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/Register")}
            className="bg-(--color-secondary) px-4 py-2 rounded-lg text-sm font-semibold
                       hover:bg-(--color-secondary-hover) hover:text-white
                       transition-all duration-200 shadow"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
