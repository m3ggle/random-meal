import { useEffect, useRef, useState } from "react";
// onAuthStateChanged: everytime the state changes, if we go from logged in to logged out then his will fire off
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          console.log("logged in")
          setLoggedIn(user);
        } else {
          console.log("not logged in");
          setLoggedIn(false);
        }
      });
      setCheckingStatus(false);
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, checkingStatus };
};
