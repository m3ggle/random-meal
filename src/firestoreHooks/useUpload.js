import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase.config";

export const useUploadToFirestore = () => {
  const uploadFavMeals = async (favMeals) => {
    try {
      const auth = getAuth();
      if (auth.currentUser) {
        await setDoc(
          doc(db, "users", auth.currentUser.uid),
          {
            favMeals: favMeals,
          },
          { merge: true }
        );
      } else {
        toast.error("😤 Not logged in");
      }
    } catch (error) {
      console.log(error)
      toast.error("🍅 Could not upload the Update");
    }
  };
    
      const uploadBuyinglist = async (buyinglist) => {
        try {
          const auth = getAuth();
          if (auth.currentUser) {
            await setDoc(
              doc(db, "users", auth.currentUser.uid),
              {
                buyinglist: buyinglist,
              },
              { merge: true }
            );
          } else {
            toast.error("😤 Not logged in");
          }
        } catch (error) {
          toast.error("🍅 Could not upload the Update");
        }
      };
    
    return { uploadFavMeals, uploadBuyinglist };
};
