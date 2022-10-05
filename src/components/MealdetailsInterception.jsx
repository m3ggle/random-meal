import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"; //Navigate is the old redirect
import { db } from "../firebase.config";
import Mealdetails from "../pages/Mealdetails"
import Loading from "./Loading";

const MealdetailsInterception = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(location.state);
  const [navigateTo, setNavigateTo] = useState(undefined)

  useEffect(() => {
    const getData = async () => {
      if (data === null) {
        await getMealFromFirestore(params.id);
      } else {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const getMealFromFirestore = async (id) => {
    const docRef = doc(db, "meals", id);
    const docSnap = (await getDoc(docRef)).data();
    if (docSnap !== undefined) {
      setData(docSnap);
      setNavigateTo("/")
      setLoading(false);
    } else {
      navigate("/not-found");
    }
  };

  return loading ? <Loading /> : <Mealdetails data={data} navigateTo={navigateTo} />;
};

export default MealdetailsInterception;
