import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom"; //Navigate is the old redirect
import SpoonacularContext from "../context/SpoonacularContext";
import { db } from "../firebase.config";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoute = () => {
  const { dispatch } = useContext(SpoonacularContext);
  const { loggedIn, checkingStatus } = useAuthStatus();
  const navigate = useNavigate();

  // set global context
  const getUserInformation = async (user) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userInformation = docSnap.data();
      dispatch({
        type: "UPDATE_USER_INFORMATION",
        payload: { ...userInformation },
      });
    } else {
      console.log("No such data");
    }
  };

  useEffect(() => {
      if (loggedIn) {
        getUserInformation(loggedIn)
      }
  }, [loggedIn]);


  if (checkingStatus) {
    return <h4>its Loading...</h4>;
  }

  console.log(loggedIn);

  // return loggedIn ? <Outlet /> :
  //   () => { toast.error("You have to be logged in");  navigate("/signIn")}

  return loggedIn ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoute;
