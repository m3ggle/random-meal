import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FavMealsOne from "../components/FavMealsOne";
import FavMealsThree from "../components/FavMealsThree";
import SearchFilter from "../components/SearchFilter";
import TwoChoice from "../components/TwoChoice";
import { useComboContext } from "../context/combos/ComboContext";
import { useMealContext } from "../context/meals/MealContext";
import { useUserContext } from "../context/user/UserContext";
import { useGetMeals } from "../hooks/useGetMeals";
import { useUpdateNavbar } from "../hooks/useUpdateNavbar";

const FavMeals = () => {
  //* context
  const { user } = useUserContext();
  const { meals, dispatchMeal } = useMealContext();
  const { combos, dispatchCombo } = useComboContext();

  //* states
  const [filteredMeals, setFilteredMeals] = useState();
  const [filteredCombos, setFilteredCombos] = useState();
  const [internalFavorite, setInternalFavorite] = useState([]);
  const [internalCombos, setInternalCombos] = useState([]);
  const [twoChoice, setTwoChoice] = useState("first");

  //* import fct/hooks
  const { handleGetMealsCombos } = useGetMeals();
  const { updateShowNavbar } = useUpdateNavbar();

  //* destructuring

  //* variables
  const navigate = useNavigate();

  //* on you go
  // check signed in
  useEffect(() => {
    const auth = getAuth();
    if (!auth.currentUser) {
      navigate("/sign-in");
    }
  }, []);

  // context
  useEffect(() => {
    if (user.favMeals) {
      updateContext();
    }
  }, []);

  const updateContext = async () => {
    console.log(user.favMeals);
    const { formattedCollectedMeals, formattedCombos } =
      await handleGetMealsCombos(
        meals,
        combos,
        user.favMeals,
        user.favCombos,
        "favorite"
      );
    if (Object.keys(formattedCollectedMeals).length > 0) {
      dispatchMeal({
        type: "UPDATE_MEALS",
        payload: formattedCollectedMeals,
      });
    }
    if (Object.keys(formattedCombos).length > 0) {
      dispatchCombo({
        type: "UPDATE_COMBOS",
        payload: formattedCombos,
      });
    }
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

  return (
    <div
      onScroll={updateShowNavbar}
      className="flex h-full w-full flex-col gap-y-3 overflow-scroll"
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
