import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase.config";

export default function useHandleGoogleSubmit() {
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user; //this gives us the user
      // check for user
      const docRef = doc(db, "users", user.uid); //creates reference
      const docSnap = await getDoc(docRef);

      // if user doesnt exist create user
      if (!docSnap.exists()) {
        const data = {
          fullName: "",
          username: user.displayName,
          email: user.email,
          bio: "",
          pinterest: "",
          twitter: "",
          instagram: "",
          photoUrl: "",
          buyinglist: [],
          favMeals: [],
          timestamp: serverTimestamp(),
        };
        await setDoc(doc(db, "users", user.uid), data);
      }
      navigate("/");
    } catch (error) {
      console.log(error)
      console.log("Could not authorize with Google");
    }
  };

  return { handleGoogle };
}
