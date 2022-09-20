import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom"; //Navigate is the old redirect

const PrivateRoute = () => {
  const auth = getAuth();
  return auth ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoute;
