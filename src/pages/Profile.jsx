import React from "react";
import Sidebar from "../layout/Sidebar";
import MobileSidebar from "../layout/MobileSidebar";
import Avatar from "../images/user.png";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="profile">
      <div className="navBar">
        <MobileSidebar className="smallNav" />
        <Sidebar className="desktopNav" />
      </div>
      <div className="profileContainer">
        <h2>Profile Setting</h2>
        <p>Personal Details</p>

        <div className="profileContent">
          <div className="avatar">
            {user.photoURL == null ? (
              <img src={Avatar} alt="avatar" />
            ) : (
              <img src={user.photoURL} alt="avatar" />
            )}
          </div>
          <section className="profileDetails">
            <div className="profileNameEmail">
              <span>Full Name</span>
              <h5>{user.displayName}</h5>
            </div>
            <div className="profileNameEmail">
              <span>Email</span>
              <h5>{user.email}</h5>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
