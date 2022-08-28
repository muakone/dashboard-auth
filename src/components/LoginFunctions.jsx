/*import React, { useRef, useState, useEffect } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import SwitchUser from "./SwitchUser";

const LoginFunctions = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();


  const checkAllFields = () => {
    if (passwordRef.length < 6) {
      setError('Password should not be less than 6 characters');
    }
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setLoading(false);
      setError("");
      localStorage.setItem("name", "");
      localStorage.setItem("email", "");
      localStorage.setItem("avatar", "");
    });
    return unsubscribe;
  }, []);

  const SignInWithGoogleFunc = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
        const name = res.user.displayName;
        const email = res.user.email;
        const avatar = res.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("avatar", avatar);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  create user 
  const registerUser = (email, password, name) => {
    checkAllFields()
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
        const email = res.user.email;
        localStorage.setItem("email", email);
        console.log(name)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    
  };
  const signUpWithEmail = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };
  SignIn With User
  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
        const email = res.user.email;
        localStorage.setItem("email", email);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const signInWithEmail = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
  };

  return (
    <div>
      <SwitchUser
        SignInWithGoogleFunc={(e) => SignInWithGoogleFunc(e)}
        signInWithEmail={signInWithEmail}
        signUpWithEmail={signUpWithEmail}
        emailRef={emailRef}
        nameRef={nameRef}
        passwordRef={passwordRef}
        loading={loading}
        error={error}
        user={user}
      />
    </div>
  );
};

export default LoginFunctions; */
