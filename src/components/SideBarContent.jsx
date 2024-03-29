import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { BsXLg } from "react-icons/bs";

const SideBarContent = ({ handleShowMenu, setActive }) => {
  const navigate = useNavigate();
  const logOutUser = () => {
    signOut(auth);
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="mobileNav">
      <BsXLg className="openNav" onClick={handleShowMenu} />
      <section className="mobileLinks">
        <div>
          <NavLink
            to="/dashboard"
            className="navLinks"
            activeclassname="active"
          >
            <div className="navLinkActive">
              <MdOutlineSpaceDashboard className="navIcon" />
              <p>Dashboard</p>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/courses" className="navLinks">
            <div className="navLinkActive">
              <FaUsers className="navIcon" />
              <p>Courses</p>
            </div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/profile" className="navLinks">
            <div className="navLinkActive">
              <FaUsers className="navIcon" />
              <p>Profile</p>
            </div>
          </NavLink>
        </div>
        <div>
          <div
            className="logOut"
            onClick={() =>
              logOutUser(console.log("You have succesfully logged out"))
            }
          >
            <MdOutlineLogout className="logOutIcon" />
            <p>LogOut</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideBarContent;
