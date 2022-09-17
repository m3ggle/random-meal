import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { SpoonacularProvider } from "./context/SpoonacularContext";
import { useAuthObserver } from "./hooks/useAuthObserver";
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

function App() {
  useAuthObserver();
  return (
    <SpoonacularProvider>
      <div
        className={`relative w-full flex md:flex-row bg-bgPrimaryCol overflow-hidden`}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path="/randomMeal" element={<RandomMeal />} />
            <Route path="/buyinglist" element={<BuyingList />} />
            <Route path="/mealdetails/:id" element={<Mealdetails />} />
            <Route path="/favorites" element={<FavMeals />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/home" element={<RandomMeal />} />
            <Route path="/" element={<RandomMeal />} />
            <Route path="/sharepage" element={<SharePage />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/creation" element={<Creation />} />
            {/* <Route path="/profile" element={<PrivateRoute />}> */}
            <Route path="/profile" element={<Profile />} />
            {/* </Route> */}
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </SpoonacularProvider>
    //</SpoonacularProvider>
  );
}

export default App;
