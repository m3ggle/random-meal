import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Mealdetails from "./components/Mealdetails";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import BuyingList from "./pages/BuyingList";
import FavMeals from "./pages/FavMeals";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import RandomMeal from "./pages/RandomMeal";
import SharePage from "./pages/SharePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div
      className={`relative w-full flex md:flex-row bg-bgPrimaryCol overflow-hidden`}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<RandomMeal />} />
          <Route path="/buyinglist" element={<BuyingList />} />
          <Route path="/mealdetails/:id" element={<Mealdetails />} />
          <Route path="/buyinglist" element={<BuyingList />} />
          <Route path="/favMeals" element={<FavMeals />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/randomMeal" element={<RandomMeal />} />
          <Route path="/sharepage" element={<SharePage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
