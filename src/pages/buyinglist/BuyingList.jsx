import React from "react";
import LunchImg from "../../assets/images/lunchExample.webp";
import { useUpdateNavbar } from "../../hooks/useUpdateNavbar";
import styles from "../../styles";
import BuyinglistCard from "./view/BuyinglistCard";
import BuyinglistNewIngredient from "./view/BuyinglistNewIngredient";

const BuyingList = () => {
  const { updateShowNavbar } = useUpdateNavbar();

  return (
    <div className={`${styles.flexCenter} h-screen w-full`}>
      {/* <Helmet>
        <title>Buyinglist</title>
        <meta name="description" content="" />
      </Helmet> */}
      <div
        onScroll={updateShowNavbar}
        className="relative flex h-screen w-full flex-col overflow-scroll bg-bgPrimaryCol pt-10 pb-28 md:max-w-[534px] md:pb-10 lg:max-w-[600px]"
      >
        <div className="flex flex-col">
          {/* titel */}
          <div className="w-full text-center">
            <p className={`${styles.heading32} text-lightTextCol`}>
              Your Buyinglist
            </p>
          </div>

          {/* cards */}
          <div className="flex flex-col gap-y-4 overflow-auto p-5">
            <BuyinglistCard />

            <BuyinglistNewIngredient />
          </div>
        </div>
      </div>
      <div
        className="hidden h-full w-full bg-black bg-cover bg-center 900:flex"
        style={{ backgroundImage: `url(${LunchImg})` }}
      >
        <div className="buyinglistImgGradient h-full w-full"></div>
      </div>
    </div>
  );
};

export default BuyingList;
