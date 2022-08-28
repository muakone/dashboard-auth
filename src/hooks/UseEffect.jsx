import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useStateValue } from "../context/UserContext";
import { actionTypes } from "../reducer";

const UseEffect = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    dispatch({
      type: actionTypes.SET_LOADING,
      loading: true,
    });

    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        localStorage.setItem("user", JSON.stringify(res));
        console.log(res);

        JSON.parse(localStorage.getItem("user"));
        /* dispatch({
          type: actionTypes.SET_USER,
          user: user,
        }); */
      } else {
        /* dispatch({
          type: actionTypes.SET_USER,
          user: user,
        }); */
      }
      dispatch({
        type: actionTypes.SET_LOADING,
        loading: false,
      });
    });
    return unsubscribe;
  }, [dispatch]);
};

export default UseEffect;
