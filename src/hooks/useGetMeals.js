import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

export const useGetMeals = () => {
  const handleGetMeals = async (mealsIds) => {
    try {
      let meals = [];

      // const docSnap = (await getDoc(doc(db, "meals", ids[0].toString()))).data();
      // console.log(docSnap)
      const getTenMeals = query(
        collection(db, "meals"),
        where("id", "in", mealsIds),
        limit(10)
      );
      const querySnapshot = await getDocs(getTenMeals);
      querySnapshot.forEach((doc) => {
        meals.push(doc.data());
      });
      return meals;
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetMeals };
};
