import React from "react";
import { FaLaptop, FaRegistered, FaRegLaughWink, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../images/logo.png";
import Student from "../images/student.webp";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <nav>
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-links">
          <Link to="/register" className="link-normal">
            <Button Text={"Register"} styles={"nav-btn nav-register"} />
          </Link>
          <Link to="/login" className="link-normal">
            <Button Text={"Login"} styles={"nav-btn"} />
          </Link>
        </div>
      </nav>
      <main>
        <section className="first-text">
          <div className="first-text__left">
            <h2>Learn online on your class schedule.</h2>
            <p>
              Learn online on your class schedule aywhere, everyday and anytime
            </p>
            <Link to="/login" className="link-normal">
              <Button
                Text={"Start Learning Today"}
                styles={"started-btn btn-black"}
              />
            </Link>
          </div>
          <div className="first-text__right">
            <div className="box">
              <img src={Student} alt="person" />
            </div>
          </div>
        </section>
        <section className="second-text">
          <div className="second-text__container">
            <p className="numbers">Our numbers tells more about us</p>
            <div className="about">
              <div className="branches">
                <p className="text-blue">6+</p>
                <p className="number-text">
                  Total branches opened in the last year
                </p>
              </div>
              <div className="new-student">
                <p className="text-blue">5k</p>
                <p className="number-text">New student in the last 30days</p>
              </div>
              <div className="comments">
                <p className="text-blue">15k</p>
                <p className="number-text">Comments made by our students</p>
              </div>
            </div>
          </div>
        </section>
        <section className="third-text">
          <div className="third-text__container">
            <div className="student-value">
              <p>We add value to our students journey</p>
              <Button Text={"Learn more"} styles={"btn-black"} />
            </div>
            <div className="value-grid">
              <div className="grid-1">
                <div className="grid-1__icon">
                  <FaLaptop className="grid-icon" />
                </div>
                <p className="online-class">Online classes</p>
                <p className="grid-1__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="grid-1">
                <div className="grid-1__icon">
                  <FaRegistered className="gird-icon2" />
                </div>
                <p className="online-class">Easy registration</p>
                <p className="grid-1__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="grid-1">
                <div className="grid-1__icon">
                  <FaUser className="grid-icon-2" />
                </div>
                <p className="online-class">Expert trainers</p>
                <p className="grid-1__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="grid-1">
                <div className="grid-1__icon">
                  <FaRegLaughWink className="grid-icon" />
                </div>
                <p className="online-class">Easy to use</p>
                <p className="grid-1__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
