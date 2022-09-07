// import styles from './styles'
// import Inputs from './utilities/Inputs'
// import Profile from './pages/Profile';
// import Buttons from './utilities/Buttons'
import Navbar from "./components/Navbar";
import RandomMeal from "./pages/RandomMeal";
// import HomeCards1280 from "./utilities/HomeCards1280";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import ForgotPassword from "./pages/ForgotPassword"
import Mealdetails from "./components/Mealdetails";

function App() {
  return (
    <div className={`relative w-full md:flex md:flex-row bg-bgPrimaryCol`}>
      
      {/* <Buttons /> */}
      <Navbar />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <ForgotPassword /> */}
      {/* <Profile /> */}
      {/* <Cards /> */}
      <RandomMeal />
      <Mealdetails />
    </div>
  );
}

export default App;
