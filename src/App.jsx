import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MealdetailsInterception from "./components/MealdetailsInterception";
import Navbar from "./components/Navbar";
import NotSign from "./components/NotSign";
import PrivateRoute from "./components/PrivateRoute";
import SpoonacularContext from "./context/SpoonacularContext";
import { db } from "./firebase.config";
import { useAuthStatus } from "./hooks/useAuthStatus";
import { useGetMeals } from "./hooks/useGetMeals";
import { useGetMealsTry } from "./hooks/useGetMealsTry";
import { useLikeStatus } from "./hooks/useLikeStatus";
import BuyingList from "./pages/BuyingList";
import Creation from "./pages/Creation";
import FavMeals from "./pages/FavMeals";
import ForgotPassword from "./pages/ForgotPassword";
import Mealdetails from "./pages/Mealdetails";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import RandomMeal from "./pages/RandomMeal";
import SharePage from "./pages/SharePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import styles from "./styles";

function App() {
  // Todo: outsource
  const { user, dispatch } = useContext(SpoonacularContext);
  const { loggedIn, checkingStatus } = useAuthStatus();
  const { handleGetMeals, handleGetCombos } = useGetMeals();
  const { singleFavMeals, comboFavMeals } = useLikeStatus();
  const { handleMeals, handleCombos, handleCatalogMeals, handleShareCombos } =
    useGetMealsTry();

  // set global context
  const getUserInformation = async (user) => {
    const docSnapFavMeals = await getDoc(doc(db, "users", user.uid));
    if (docSnapFavMeals.exists()) {
      let userInfo = docSnapFavMeals.data();
      let favoriteMeals = await handleGetMeals(userInfo.favMeals);
      let favoriteCombos = await handleGetCombos(userInfo.favCombos);
      userInfo.favoriteMeals = singleFavMeals(favoriteMeals);
      userInfo.favoriteCombos = comboFavMeals(
        favoriteCombos,
        userInfo.favMeals
      );

      // favCombos
      // const { formattedCombos, formattedMeals } = await handleCombos(
      //   { 1234: "haha", 290833: "haha", 630720: "haha" },
      //   {
      //     "9e8b3ac1-c20f-4aaa-be88-a8257934da52": "haha",
      //   },
      //   userInfo.favCombos,
      //   userInfo.favMeals,
      //   "favCombos"
      // );
      // console.log(formattedCombos, formattedMeals);
      // dispatch({ type: "INSERT_MEALS", payload: formattedMeals });

      // single Meals
      const mealContext = {
        1234: "haha",
        290833: "haha",
        630720: "haha",
        100172: "haha",
        1005954: "haha",
        149251: "haha",
        199358: "haha",
        338734: "haha",
        1047713: "haha",
        1091888: "haha",
      };
      const testDrive = await handleMeals(
        mealContext,
        userInfo.favMeals,
        "collection"
      );
      console.log(mealContext, testDrive);

      // sharepage combo
      // const testDrive = await handleShareCombos(
      //   { 1234: "haha", 290833: "haha", 630720: "haha" },
      //   {
      //     "9e8b3ac1-c20f-4aaa-be88-a8257934da52": "haha",
      //   },
      //   userInfo.favCombos,
      //   userInfo.favMeals
      // );
      // console.log(testDrive)

      dispatch({
        type: "UPDATE_USER_INFORMATION_INIT",
        payload: { ...userInfo },
      });
    } else {
      console.log("No such data");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      getUserInformation(loggedIn);
    }
  }, [loggedIn]);

  // get all meal ids for comparing in useStore
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "meals", "ids"), (doc) => {
      let allMealIds = doc.data();
      allMealIds = allMealIds.allMealIds;
      dispatch({
        type: "UPDATE_STORED_MEAL_IDS",
        payload: [...allMealIds],
      });
    });

    return () => unsub();
  }, []);

  if (checkingStatus) {
    return <h4>its Loading...</h4>;
  }

  return (
    <div className={`w-full h-screen ${styles.flexCenter} bg-navCol`}>
      <div
        className={`realative h-full max-w-[1440px] w-full flex bg-bgPrimaryCol overflow-hidden`}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/randomMeal" element={<RandomMeal />} />
            <Route path="/buyinglist" element={<BuyingList />} />
            <Route
              path="/mealdetails/:id"
              element={<MealdetailsInterception />}
            >
              <Route path="/mealdetails/:id" element={<Mealdetails />} />
            </Route>
            <Route path="/favorites" element={<PrivateRoute />}>
              <Route path="/favorites" element={<FavMeals />} />
            </Route>
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/home" element={<RandomMeal />} />
            <Route path="/" element={<RandomMeal />} />
            <Route path="/sharepage" element={<SharePage />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/creation" element={<Creation />} />
            <Route path="/sign" element={<NotSign />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </div>
    //</SpoonacularProvider>
  );
}

export default App;
