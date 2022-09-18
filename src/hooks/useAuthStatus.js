import { useEffect, useRef, useState } from "react";
// onAuthStateChanged: everytime the state changes, if we go from logged in to logged out then his will fire off
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";

export const useAuthStatus = () => {
  // check to see if we are logged in and right after the response we set checkStatus to false and logged in to true
  const [loggedIn, setLoggedIn] = useState(null);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      console.log('in here')
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // setLoggedIn(true);
          // const result = getUserData(user);
          // setLoggedIn(result)
          // console.log(result);
          // console.log("logged in");
          // return getUserData(user);
          setLoggedIn(user)
        } else {
          setLoggedIn(false);
          console.log("not logged in");
        }
      });
      setCheckingStatus(false);
    }

    const getUserData = async (user) => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // const rere = await getDoc(db, "users", user.uid).then(docSnap => {return docSnap})
      // console.log(rere)

      if (docSnap.exists()) {
        const userInformation = docSnap.data();
        console.log(userInformation)
        return userInformation;
      } else {
        console.log("No such data")
      }
    };



    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, checkingStatus };
};
