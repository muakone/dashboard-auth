import React, { useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../context/UserContext";
import { MdEmail, MdErrorOutline } from "react-icons/md";

const StudentRegister = ({ runError, error }) => {
  const [{ loading }, dispatch] = useStateValue();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const registerUser = (email, password, name) => {
    dispatch({
      type: actionTypes.SET_LOADING,
      loading: true,
    });
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });

        navigate("/login");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const errorOutput = errorCode.substring(5);
        const editedError = errorOutput.replace(/-/g, " ").toUpperCase();
        runError(editedError);
        console.log("ERROR:", errorCode, errorMessage);
      })
      .finally(() =>
        dispatch({
          type: actionTypes.SET_LOADING,
          loading: false,
        })
      );
  };

  const signUpWithEmail = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  //UseEffect()

  return (
    <form className="studentForm">
      {error.err && (
        <div className="error-message">
          <p>{error.message}</p>
          <MdErrorOutline />
        </div>
      )}
      <div className="text">
        <input type="text" placeholder="Enter your name" ref={nameRef} />
        <i>
          <FaUserAlt className="formIcon" />
        </i>
      </div>
      <div className="email">
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <i>
          <MdEmail className="formIcon" />
        </i>
      </div>
      <div className="password">
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <i>
          <GiPadlock className="formIcon" />
        </i>
      </div>
      <div className="formButton">
        <div className="btnState">
          {!loading ? (
            <div onClick={(e) => signUpWithEmail(e)}>
              <Button Text={"Signup with password"} styles={"loginButton"} />
            </div>
          ) : (
            <Button Text={"Please Wait ...."} styles={"loginButton"} />
          )}
        </div>
      </div>
      <div className="not-registered">
        <p>Already have an account?</p>
        <Link to="/login" className="not-registered__link">
          Click here
        </Link>
      </div>
    </form>
  );
};

export default StudentRegister;
