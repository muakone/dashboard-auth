/*import React, { useState } from "react";
import StudentLogin from "./StudentLogin"
import Register from "./Register"

const Auth = (props) => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <StudentLogin props={props} /> : <Register props={props} />}
      <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </div>
  );
};

export default Auth; */