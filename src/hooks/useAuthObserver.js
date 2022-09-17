import { useContext, useEffect, useReducer, useRef, useState } from "react";
// onAuthStateChanged: everytime the state changes, if we go from logged in to logged out then his will fire off
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
// import SpoonacularContext from "../context/SpoonacularContext";
import spoonacularReducer from "../context/SpoonacularReducer";

// using useRef to prevent leaking

export const useAuthObserver = () => {
  // check to see if we are logged in and right after the response we set checkStatus to false and logged in to true
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  // Context not in hooks
  // const { user } = useContext(SpoonacularContext);
  

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if(user) {
          setLoggedIn(true);
          getUserData(user);
        } else {
          // call reducer and set userProfile = null
        }
      });
    }

    const getUserData = async (user) => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        const userInformation = docSnap.data()
        // await dispatch({ type: "UPDATE_USER_INFORMATION", payload: userInformation  });
        // call Reducer and setProfile = docSnap.data()
      }
    };

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return {};
};
