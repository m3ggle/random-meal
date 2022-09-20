import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import SpoonacularContext from "./context/SpoonacularContext";
import { db } from "./firebase.config";
import { useAuthStatus } from "./hooks/useAuthStatus";
import { useGetMeals } from "./hooks/useGetMeals";
import BuyingList from "./pages/BuyingList";
import Creation from "./pages/Creation";
import FavMeals from "./pages/FavMeals";
import ForgotPassword from "./pages/ForgotPassword";
import Mealdetails from "./pages/Mealdetails";
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
  const { handleGetMeals } = useGetMeals();

  // set global context
  const getUserInformation = async (user) => {
    const docSnapFavMeals = await getDoc(doc(db, "users", user.uid));
    if (docSnapFavMeals.exists()) {
      let userInfo = docSnapFavMeals.data();
      const favoriteMeals = await handleGetMeals(userInfo.favMeals);
      userInfo.favoriteMeals = favoriteMeals;
      dispatch({
        type: "UPDATE_USER_INFORMATION",
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
        payload: [ ...allMealIds ],
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
        className={`realative max-w-[1440px] w-full flex bg-bgPrimaryCol overflow-hidden`}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/randomMeal" element={<RandomMeal />} />
            <Route path="/buyinglist" element={<BuyingList />} />
            <Route path="/mealdetails/:id" element={<Mealdetails />} />
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
