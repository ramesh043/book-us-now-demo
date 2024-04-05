import React from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import "./Navbar.css";
import Navlinks from "./Navlinks";
function Navbar() {
  return (
    <>
      <div>
        <div className="navbar">
          <div>
            <h3 className="heading">BookUsNow</h3>
          </div>
          <div className="menu">
            <IoIosMenu />
            <h6>Categories</h6>
          </div>
          <div className="search-icon">
            <input
              type="search"
              placeholder="search anything"
              className="search"
            />
            <IoMdSearch className="searchIcon" />
          </div>
          <div className="favourites">
            <FaHeart />
            <h5>Favourites</h5>
          </div>
          <div className="signin-btn">
            <button className="btn">Sign in</button>
          </div>
        </div>
      </div>
      <div className="nav_main_link">
        <Navlinks />
      </div>
    </>
  );
}

export default Navbar;
