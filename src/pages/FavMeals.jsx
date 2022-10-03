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
      navigate("/signIn");
    }
  }, []);

  // context
  useEffect(() => {
    if (user.favMeals) {
      updateContext();
    }

    // navbar 
    dispatch({ type: "UPDATE_NAVBARSTATUS", payload: true })
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
  const [lastKnowScroll, setLastKnowScroll] = useState(0)
  const updateShowNavbar = (e) => {
    const currentY = e.currentTarget.scrollTop
    var difference = function (a, b) {
      return Math.abs(a - b);
    };
    if (difference(lastKnowScroll, currentY) > 120) {
      console.log("bigger than 120")
      dispatch({ type: "UPDATE_NAVBARSTATUS", payload: lastKnowScroll < e.currentTarget.scrollTop
        ? false
        : true});
    setLastKnowScroll(e.currentTarget.scrollTop)
    }
  };

  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // const handleScroll = () => {
  //   console.log("hallo");
  //   const currentScrollPos = window.scrollY;

  //   if (currentScrollPos > prevScrollPos) {
  //     setVisible(false);
  //   } else {
  //     setVisible(true);
  //   }

  //   console.log(currentScrollPos > prevScrollPos);
  //   setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     console.log("bang bang")
  //     handleScroll()
  //   });

  //   console.log(window);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

// const checkHeader = () => {
//   // Detect scroll position
//   let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//   if (viewportWidth > 1100) {
//     let scrollPosition = Math.round(window.scrollY);

//     if (scrollPosition > 100) {
//       // document.querySelector("#nav").classList.add(`${headerStyles.sticky}`);
//       console.log("smt")
//     } else {
//       console.log("other smt")
//       // document.querySelector("#nav").classList.remove(`${headerStyles.sticky}`);
//     }
//   } else {
//   }
// };

// // Check that window exists before accessing it
// if (typeof window !== "undefined") {
//   // Run the checkHeader function every time you scroll
//   window.addEventListener("scroll", checkHeader);
// }

  return (
    <div
      onScroll={updateShowNavbar}
      className="w-full h-full overflow-scroll flex flex-col gap-y-3">
      <Helmet>
        <title>Favorite Meals</title>
        <meta name="description" content="" />
      </Helmet>

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

      <div onClick={updateContext} className="w-11 h-6 bg-slate-500">
        Click me to load more Meals
      </div>

      {/* 1 Meal vs 3 Meals */}
      <TwoChoice
        callbackTwoChoice={handleTwoChoice}
        firstChoice="1 Meal"
        secondChoice="3 Meals"
      />

      {twoChoice === "first" ? (
        <FavMealsOne filteredMeals={filteredMeals} />
      ) : (
        <FavMealsThree filteredCombos={filteredCombos} />
      )}
    </div>
  );
};

export default FavMeals;
