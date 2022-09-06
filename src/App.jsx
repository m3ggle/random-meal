// import styles from './styles'
// import Inputs from './utilities/Inputs'
// import Profile from './pages/Profile';
// import Buttons from './utilities/Buttons'
import Navbar from "./components/Navbar";
import RandomMeal from "./pages/RandomMeal";
// import Cards from './utilities/Cards';
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import ForgotPassword from "./pages/ForgotPassword"

function App() {
  return (
    <div className="relative w-full md:flex md:flex-row">
      {/* <Buttons /> */}
      <Navbar />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <ForgotPassword /> */}
      {/* <Profile /> */}
      {/* <Cards /> */}
      <RandomMeal />
    </div>
  );
}

export default App;
