// import styles from './styles'
// import Inputs from './utilities/Inputs'
// import Profile from './pages/Profile';
// import Buttons from './utilities/Buttons'
import Creation from "./components/Creation";
import Navbar from "./components/Navbar";
import BuyingList from "./pages/BuyingList";
import FavMeals from "./pages/FavMeals";
import RandomMeal from "./pages/RandomMeal";
// import HomeCards1280 from "./utilities/HomeCards1280";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import ForgotPassword from "./pages/ForgotPassword"
// import Mealdetails from "./components/Mealdetails";

function App() {
  return (
    <div
      className={`relative w-full flex md:flex-row bg-bgPrimaryCol overflow-hidden`}
    >
      {/* <Buttons /> */}
      <Navbar />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <ForgotPassword /> */}
      {/* <Profile /> */}
      {/* <Cards /> */}
      {/* <RandomMeal /> */}
      {/* <Mealdetails /> */}
      {/* <BuyingList /> */}
      <FavMeals />
      {/* <Creation /> */}
    </div>
  );
}

export default App;
