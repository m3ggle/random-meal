import { collection, doc, getDoc, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

// Todo: caller should provide startafter

export const useDownloadFromFirestore = () => {
  const getTenFavCombos = async (favCombos) => {
    let combos = [];
    if (favCombos.length > 0) {
      favCombos = favCombos.slice(0, 10);
      // get ten combos which the user likes from firestore
      const getTenCombos = query(
        collection(db, "combos"),
        where("comboId", "in", favCombos),
        limit(10)
      );
      const querySnapshot = await getDocs(getTenCombos);
      querySnapshot.forEach((doc) => {
        combos.push(doc.data());
      });
    }
    return combos;
  };

  const getTenCombosFromCollection = async () => {
    let combos = [];
    const collectionRef = collection(db, "combos");
    const q = query(collectionRef, limit(10));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      combos.push(doc.data());
    });
    return combos;
  };

  const getTenFavMeals = async (missingMeals) => {
    let meals = [];
    if (missingMeals.length > 0) {
      missingMeals = missingMeals.slice(0, 10);
      const getTenMeals = query(
        collection(db, "meals"),
        where("mealinformation.id", "in", missingMeals),
        limit(10)
      );
      const querySnapshot = await getDocs(getTenMeals);
      querySnapshot.forEach((doc) => {
        meals.push(doc.data());
      });
    }
    return meals;
  };

  const getTenMealsFromCollection = async () => {
    let meals = [];
    const collectionRef = collection(db, "meals");
    const q = query(collectionRef, limit(10));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      meals.push(doc.data());
    });
    return meals;
  };

  const getMealsById = async (mealIds) => {
    try {
      let meals = [];
      mealIds = mealIds.slice(0, 10);
      if (mealIds.length > 0) {
        const getTenMeals = query(
          collection(db, "meals"),
          where("mealinformation.id", "in", mealIds),
          limit(10)
        );
        const querySnapshot = await getDocs(getTenMeals);
        querySnapshot.forEach((doc) => {
          meals.push(doc.data());
        });
      }

      return meals;
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleMealById = async (mealId) => {
    if (mealId) {
      const docRef = doc(db, "meals", mealId.toString());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        return undefined
      }
    }
  }

  return {
    getTenFavCombos,
    getTenCombosFromCollection,
    getTenFavMeals,
    getTenMealsFromCollection,
    getMealsById,
    getSingleMealById,
  };
};
