import React from "react";
import LunchImg from "../../assets/images/lunchExample.webp";
import { useUpdateNavbar } from "../../hooks/useUpdateNavbar";
import styles from "../../styles";
import BuyinglistCard from "./view/BuyinglistCard";
import BuyinglistNewIngredient from "./view/BuyinglistNewIngredient";

const BuyingList = () => {
  const { updateShowNavbar } = useUpdateNavbar();

  return (
    <div className={`${styles.flexCenter} w-full h-screen`}>
      {/* <Helmet>
        <title>Buyinglist</title>
        <meta name="description" content="" />
      </Helmet> */}
      <div
        onScroll={updateShowNavbar}
        className="relative w-full md:max-w-[534px] lg:max-w-[600px] h-screen overflow-scroll bg-bgPrimaryCol pt-10 pb-28 md:pb-10 flex flex-col"
      >
        <div className="flex flex-col">
          {/* titel */}
          <div className="w-full text-center">
            <p className={`${styles.heading32} text-lightTextCol`}>
              Your Buyinglist
            </p>
          </div>

          {/* cards */}
          <div className="flex flex-col gap-y-4 p-5 overflow-auto">
            <BuyinglistCard />

            <BuyinglistNewIngredient />
          </div>
        </div>
      </div>
      <div
        className="hidden 900:flex w-full h-full bg-black bg-center bg-cover"
        style={{ backgroundImage: `url(${LunchImg})` }}
      >
        <div className="w-full h-full buyinglistImgGradient"></div>
      </div>
    </div>
  );
};

export default BuyingList;
