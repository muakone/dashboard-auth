import React, { useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
import {
  signInWithEmailAndPassword,
  //createUserWithEmailAndPassword,
  // onAuthStateChanged,
  //signOut,
  //updateProfile,
  //sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../context/UserContext";
import UseEffect from "../hooks/UseEffect";
import { MdErrorOutline } from "react-icons/md";

const StudentLogin = ({ runError, error }) => {
  const [{ loading }, dispatch] = useStateValue();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  UseEffect();

  const signInUser = (email, password) => {
    dispatch({
      type: actionTypes.SET_LOADING,
      loading: true,
    });
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.user));
        JSON.parse(localStorage.getItem("user"));
        navigate("/dashboard");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const errorOutput = errorCode.substring(5);
        const editedError = errorOutput.replace(/-/g, " ").toUpperCase();
        // ..
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

  const signInWithEmail = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const SignInWithGoogleFunc = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        const user = res.user;
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const errorOutput = errorCode.substring(5);
        const editedError = errorOutput.replace(/-/g, " ").toUpperCase();
        // ..
        runError(editedError);
        console.log("ERROR:", errorCode, errorMessage);
      });
  };

  return (
    <form className="studentForm">
      {error.err && (
        <div className="error-message">
          <p>{error.message}</p>
          <MdErrorOutline className="formIcon" />
        </div>
      )}
      <div className="email">
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <i>
          <FaUserAlt className="formIcon" />
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
        <div className="loginGoogle" onClick={(e) => SignInWithGoogleFunc(e)}>
          <FcGoogle className="google" />
          <Button Text={"Continue with Google"} styles={"loginGoogleButton"} />
        </div>
        <div className="btnState">
          {!loading ? (
            <div onClick={(e) => signInWithEmail(e)}>
              <Button Text={"Login"} styles={"loginButton"} />
            </div>
          ) : (
            <Button Text={"Please Wait ...."} styles={"loginButton"} />
          )}
        </div>
      </div>
      <div className="not-registered">
        <p>Not registered yet?</p>
        <Link to="/register" className="not-registered__link">
          Click here
        </Link>
      </div>
    </form>
  );
};

export default StudentLogin;
