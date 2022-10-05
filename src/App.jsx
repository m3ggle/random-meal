import { Helmet } from "react-helmet";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
import MealdetailsInterception from "./components/MealdetailsInterception";
import Navbar from "./components/Navbar";
import NotSign from "./components/NotSign";
import PrivateRoute from "./components/PrivateRoute";
import SpoonacularContext from "./context/SpoonacularContext";
import { db } from "./firebase.config";
import { useAuthStatus } from "./hooks/useAuthStatus";
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
  const { dispatch } = useContext(SpoonacularContext);
  const { loggedIn, checkingStatus } = useAuthStatus();

  // set global context
  const getUserInformation = async (user) => {
    const docSnapFavMeals = await getDoc(doc(db, "users", user.uid));
    if (docSnapFavMeals.exists()) {
      let userInfo = docSnapFavMeals.data();
      dispatch({
        type: "UPDATE_USER_INFORMATION_INIT",
        payload: { ...userInfo },
      });
    } else {
      toast.error("🤷‍♂️ Could not find your data!");
    }
  };

  useEffect(() => {
    
    if (loggedIn) {
      console.log("wam bam")
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

  return (
    <div className={`w-full h-screen ${styles.flexCenter} bg-navCol`}>
      {/* <Helmet>
        <title>Random Meal</title>
        <meta name="description" content="" />
        <meta name="keywords" content="Food, Planning, Meals, Buyinglist, Random Meals, New Meals"/>
      </Helmet> */}
      {checkingStatus ? (
        <Loading />
      ) : (
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
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/home" element={<RandomMeal />} />
              <Route path="/" element={<RandomMeal />} />
              <Route path="/sharepage" element={<SharePage />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/creation/:stepName" element={<Creation />} />
              <Route path="/sign" element={<NotSign />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/profile" element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </Router>
            <ToastContainer limit={4} />
        </div>
      )}
    </div>
  );
}

export default App;
