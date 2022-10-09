import React, { useEffect, useState } from "react";
import Catalog from "../components/Catalog";
import SearchFilter from "../components/SearchFilter";
import ShareCombos from "../components/ShareCombos";
import TwoChoice from "../components/TwoChoice";
import { useComboContext } from "../context/combos/ComboContext";
import { useMealContext } from "../context/meals/MealContext";
import { useUserContext } from "../context/user/UserContext";
import { useGetMeals } from "../hooks/useGetMeals";
import { useUpdateNavbar } from "../hooks/useUpdateNavbar";

const SharePage = () => {
  //* context
  const { user } = useUserContext();
  const { meals, dispatchMeal } = useMealContext();
  const { combos, dispatchCombo } = useComboContext();

  //* states
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [filteredCombos, setFilteredCombos] = useState([]);
  const [internalMeals, setInternalMeals] = useState([]);
  const [internalCombos, setInternalCombos] = useState([]);
  const [twoChoice, setTwoChoice] = useState("first");

  //* import fct/hooks
  const { handleGetMealsCombos } = useGetMeals();
  const { updateShowNavbar } = useUpdateNavbar();

  //* destructuring

  //* variables

  //* on you go
  // context
  useEffect(() => {
    const updateContext = async () => {
      const { formattedCollectedMeals, formattedCombos } =
        await handleGetMealsCombos(
          meals,
          combos,
          user.favMeals,
          user.favCombos,
          "collection"
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

    updateContext();
  }, []);

  // set/updatefavorite Meals (internal)
  useEffect(() => {
    let internalMealsMeals = [];
    Object.keys(meals).map((mealId) => {
      internalMealsMeals.push({ ...meals[mealId] });
    });
    setInternalMeals(internalMealsMeals);
  }, [user.favMeals, meals]);

  useEffect(() => {
    let internalMealsCombos = [];
    Object.keys(combos).map((comboId) => {
      internalMealsCombos.push({ ...combos[comboId] });
    });
    setInternalCombos(internalMealsCombos);
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
      className="w-full h-full overflow-scroll flex flex-col gap-y-3"
    >
      {/* <Helmet>
        <title>Share is Caring</title>
        <meta name="description" content="" />
      </Helmet> */}

      <SearchFilter
        callbackFilteredMeals={handleCallbackFilteredMeals}
        callbackFilteredCombos={handleCallbackFilteredCombos}
        meals={internalMeals}
        combos={internalCombos}
        twoChoice={twoChoice}
        // reversed because combos are first and then meals
        first="second"
        second="first"
      />

      {/* 1 Meal vs 3 Meals */}
      <TwoChoice
        callbackTwoChoice={handleTwoChoice}
        firstChoice="Sharing"
        secondChoice="Catalog"
      />

      {twoChoice === "first" ? (
        <ShareCombos filteredCombos={filteredCombos} />
      ) : (
        <Catalog filteredMeals={filteredMeals} navigationOn={true} />
      )}
    </div>
  );
};

export default SharePage;
