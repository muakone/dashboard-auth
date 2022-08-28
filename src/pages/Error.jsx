import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../images/logo.png";
import Error404 from "../images/error-404.svg";

const Error = () => {
  return (
    <div className="error-page">
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
        <div className="error-content">
          <span>
            <h2>Page 404</h2>
            <h3>Not found</h3>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            quisquam nostrum. Non asperiores veniam, possimus ullam ea illum
            fugiat doloremque inventore mollitia nobis quas? Natus, obcaecati?
            Porro, saepe eos? Obcaecati.
          </p>
          <Link to="/login" className="link-normal">
            <Button Text={"Get Started"} styles={"error-login"} />
          </Link>
        </div>
        <div className="error-img">
          <img src={Error404} alt="error-404" />
        </div>
      </main>
    </div>
  );
};

export default Error;
