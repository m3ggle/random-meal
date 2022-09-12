import { useEffect, useRef, useState } from "react";
// onAuthStateChanged: everytime the state changes, if we go from logged in to logged out then his will fire off
import { getAuth, onAuthStateChanged } from "firebase/auth";

// using useRef to prevent leaking

export const useAuthStatus = () => {
  // check to see if we are logged in and right after the response we set checkStatus to false and logged in to true
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      console.log(auth);
      // takes in auth and a function, the function gives us back a user obj
      onAuthStateChanged(auth, (user) => {
        console.log(user);
        if (user) {
          setLoggedIn(true);
        }
        setCheckingStatus(false); //we only want to render if the checkingStatus is false
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, checkingStatus };
};

/* before using useRef to prevent the leak:

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setCheckingStatus(false);
      });
      
      return {loggedIn, checkingStatus}
  }, []);
};

*/
