import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import Courses from "../pages/Course";
import SingleCourse from "../pages/SingleCourse";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Error from "../pages/Error";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Router = ({ error, runError }) => {
  const [active, setActive] = useState(false);
  console.log(localStorage.length);
  const userNumber = localStorage.length;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
    return unsubscribe;
  }, [userNumber]);

  //const activeUser = localStorage.getItem("active")

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={<Login error={error} runError={runError} />}
      />
      <Route
        path="/register"
        element={<Register error={error} runError={runError} />}
      />
      {active && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<SingleCourse />} />
          <Route path="/profile" element={<Profile />} />
        </>
      )}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Router;
