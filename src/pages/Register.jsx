import React from "react";
import Logo from "../images/logo.png";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import VectorLogin from "../images/register.svg";
import StudentRegister from "../components/Register";

const Register = ({ error, runError }) => {
  return (
    <div className="Login">
      <div className="loginSection">
        <Link to="/" className="loginCancel">
          <BsXLg className="cancel" />
        </Link>
        <section className="loginFormSection">
          <div className="lefttLogin">
            <h3>Register</h3>
            <img src={VectorLogin} alt="vector login" />
          </div>
          <div className="rightLogin">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="studentLogin">
              <StudentRegister error={error} runError={runError} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
