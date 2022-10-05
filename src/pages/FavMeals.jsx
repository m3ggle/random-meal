import { getAuth } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import FavMealsOne from "../components/FavMealsOne";
import FavMealsThree from "../components/FavMealsThree";
import SearchFilter from "../components/SearchFilter";
import TwoChoice from "../components/TwoChoice";
import SpoonacularContext from "../context/SpoonacularContext";
import { useGetMeals } from "../hooks/useGetMeals";

const FavMeals = () => {
  const { user, meals, combos, dispatch } = useContext(SpoonacularContext);
  const { handleGetMealsCombos } = useGetMeals();
  const [filteredMeals, setFilteredMeals] = useState();
  const [filteredCombos, setFilteredCombos] = useState();
  const [internalFavorite, setInternalFavorite] = useState([]);
  const [internalCombos, setInternalCombos] = useState([]);
  const [twoChoice, setTwoChoice] = useState("first");

  const navigate = useNavigate();

  // check signed in
  useEffect(() => {
    const auth = getAuth();
    if (!auth.currentUser) {
      navigate("/sign-in");
    }

    // const testDrive = async () => {
    //   const results = await getTenMealsFromCollection()
    //   console.log(results)
    // }

    // testDrive()
  }, []);

  // const getTenMealsFromCollection = async () => {
  //   let meals = [];
  //   const collectionRef = collection(db, "meals");
  //   const q = query(collectionRef, limit(10), startAfter(10));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     meals.push(doc.data());
  //   });
  //   return meals;
  // };

  // context
  useEffect(() => {
    if (user.favMeals) {
      updateContext();
    }

    // navbar
    dispatch({ type: "UPDATE_NAVBARSTATUS", payload: true });
  }, []);

  const updateContext = async () => {
    const { formattedCollectedMeals, formattedCombos } =
      await handleGetMealsCombos(
        meals,
        combos,
        user.favMeals,
        user.favCombos,
        "favorite"
      );
    dispatch({
      type: "UPDATE_MEALS_AND_COMBOS",
      payload: {
        meals: formattedCollectedMeals,
        combos: formattedCombos,
      },
    });
  };

  // set/updatefavorite Meals (internal)
  useEffect(() => {
    if (user.favMeals) {
      let internalFavoriteMeals = [];
      Object.keys(meals).map((mealId) => {
        if (user.favMeals.includes(parseInt(mealId))) {
          internalFavoriteMeals.push({ ...meals[mealId] });
        }
      });
      setInternalFavorite(internalFavoriteMeals);
    }
  }, [user.favMeals, meals]);

  useEffect(() => {
    if (user.favCombos) {
      let internalFavoriteCombos = [];
      Object.keys(combos).map((comboId) => {
        if (user.favCombos.includes(comboId)) {
          internalFavoriteCombos.push({ ...combos[comboId] });
        }
      });
      setInternalCombos(internalFavoriteCombos);
    }
  }, [user.favCombos, meals]);

  const handleTwoChoice = (msg) => setTwoChoice(msg);

  const handleCallbackFilteredMeals = (newlyFiltered) => {
    setFilteredMeals(newlyFiltered);
  };
  const handleCallbackFilteredCombos = (newlyFiltered) => {
    setFilteredCombos(newlyFiltered);
  };

  // navbar
  const [lastKnowScroll, setLastKnowScroll] = useState(0);
  const updateShowNavbar = (e) => {
    const currentY = e.currentTarget.scrollTop;
    var difference = function (a, b) {
      return Math.abs(a - b);
    };
    if (difference(lastKnowScroll, currentY) > 120) {
      dispatch({
        type: "UPDATE_NAVBARSTATUS",
        payload: lastKnowScroll < e.currentTarget.scrollTop ? false : true,
      });
      setLastKnowScroll(e.currentTarget.scrollTop);
    }
  };

  return (
    <div
      onScroll={updateShowNavbar}
      className="w-full h-full overflow-scroll flex flex-col gap-y-3"
    >
      {/* <Helmet>
        <title>Favorite Meals</title>
        <meta name="description" content="" />
      </Helmet> */}

      <SearchFilter
        callbackFilteredMeals={handleCallbackFilteredMeals}
        callbackFilteredCombos={handleCallbackFilteredCombos}
        meals={internalFavorite}
        combos={internalCombos}
        twoChoice={twoChoice}
        // normal order because meals are first and combos are second
        first="first"
        second="second"
      />

      {/* <div onClick={updateContext} className="w-11 h-6 bg-slate-500">
        Click me to load more Meals
      </div> */}

      {/* 1 Meal vs 3 Meals */}
      <TwoChoice
        callbackTwoChoice={handleTwoChoice}
        firstChoice="1 Meal"
        secondChoice="3 Meals"
      />

      {twoChoice === "first" ? (
        <FavMealsOne filteredMeals={filteredMeals} navigationOn={true} />
      ) : (
        <FavMealsThree filteredCombos={filteredCombos} />
      )}
    </div>
  );
};

export default FavMeals;
