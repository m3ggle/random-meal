import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import NotSign from "./components/NotSign";
import PrivateRoute from "./components/PrivateRoute";
import { useBuyinglistContext } from "./context/buyinglist/buyinglistContext";
import { useMealContext } from "./context/meals/MealContext";
import { useUserContext } from "./context/user/UserContext";
import { db } from "./firebase.config";
import { useAuthStatus } from "./hooks/useAuthStatus";
import BuyingList from "./pages/buyinglist/BuyingList";
import Creation from "./pages/Creation";
import FavMeals from "./pages/FavMeals";
import ForgotPassword from "./pages/ForgotPassword";
import Mealdetails from "./pages/mealdetails/Mealdetails";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import RandomMeal from "./pages/RandomMeal";
import SharePage from "./pages/SharePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import styles from "./styles";

function App() {
  //* context
  const { dispatchUser } = useUserContext();
  const { dispatchMeal } = useMealContext();
  const { dispatchBuyinglist } = useBuyinglistContext();

  //* states
  //* import fct/hooks
  const { loggedIn, checkingStatus } = useAuthStatus();

  //* destructuring
  //* variables
  //* on you go
  // Todo: outsource
  // set global context
  const getUserInformation = async (user) => {
    const docSnapFavMeals = await getDoc(doc(db, "users", user.uid));
    if (docSnapFavMeals.exists()) {
      let userInfo = docSnapFavMeals.data();
      dispatchUser({
        type: "UPDATE_USER_INFORMATION",
        payload: { ...userInfo },
      });
      if (userInfo.buyinglist.length > 0) {
        dispatchBuyinglist({
          type: "UPDATE_BUYINGLIST",
          payload: [...userInfo.buyinglist],
        });
      }
    } else {
      toast.error("🤷‍♂️ Could not find your data!");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      getUserInformation(loggedIn);
    }
  }, [loggedIn]);

  // when loading and when closing the window
  window.onunload = function () {
    localStorage.clear();
  };
  window.onbeforeunload = function () {
    localStorage.clear();
  };

  return (
    <div className={`h-screen w-full ${styles.flexCenter} bg-navCol`}>
      {/* <Helmet>
        <title>Random Meal</title>
        <meta name="description" content="" />
        <meta name="keywords" content="Food, Planning, Meals, Buyinglist, Random Meals, New Meals"/>
      </Helmet> */}
      {checkingStatus ? (
        <Loading />
      ) : (
        <div
          className={`realative flex h-full w-full max-w-[1440px] overflow-hidden bg-bgPrimaryCol`}
        >
          <Router>
            <Navbar />
            <Routes>
              <Route path="/buyinglist" element={<BuyingList />} />
              <Route path="/mealdetails/:id" element={<Mealdetails />} />
              <Route path="/randomMeal" element={<RandomMeal />} />
              <Route path="/home" element={<RandomMeal />} />
              <Route path="/" element={<RandomMeal />} />
              <Route path="/favorites" element={<PrivateRoute />}>
                <Route path="/favorites" element={<FavMeals />} />
              </Route>
              <Route path="/sharepage" element={<SharePage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
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
