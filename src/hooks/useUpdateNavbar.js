import { useEffect, useState } from "react";
import { useNavbarContext } from "../context/navbar/NavbarContext";

export const useUpdateNavbar = () => {
  const { dispatchNavbar } = useNavbarContext();

  const [lastKnowScroll, setLastKnowScroll] = useState(0);

  useEffect(() => {
    // when init
    dispatchNavbar({ type: "UPDATE_NAVBARSTATUS", payload: true });
  }, []);

  const updateShowNavbar = (e) => {
    const currentY = e.currentTarget.scrollTop;
    var difference = function (a, b) {
      return Math.abs(a - b);
    };
    if (difference(lastKnowScroll, currentY) > 120) {
      dispatchNavbar({
        type: "UPDATE_NAVBARSTATUS",
        payload: lastKnowScroll < e.currentTarget.scrollTop ? false : true,
      });
      setLastKnowScroll(e.currentTarget.scrollTop);
    }
  };

  return { updateShowNavbar };
};
