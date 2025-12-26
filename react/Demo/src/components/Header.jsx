import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>My Website</h1>
        <div className=" d-flex gap-3">
          <Link to={"/"} className="text-decoration-none test-light">
            {" "}
            Home{" "}
          </Link>
          <Link to={"/about"} className="text-decoration-none test-light">
            {" "}
            About{" "}
          </Link>
          <Link to={"/contact"} className="text-decoration-none test-light">
            {" "}
            Contact{" "}
          </Link>
          <Link to={"/product"} className="text-decoration-none test-light">
            {" "}
            Product{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
