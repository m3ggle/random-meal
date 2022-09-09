import React, { useState } from "react";
import {
  FaHome,
  FaPinterestP,
  FaShoppingCart,
  FaStar,
  FaTwitter,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import InstagramIcon from "../assets/svg/instagramIcon.svg";
import Logo from "../assets/svg/Logo.svg";
import styles from "../styles";

const Navbar = () => {
  const [activeSite] = useState("home");

  return (
    <div className="w-0px md:w-[80px]">
      {/* desktop Navbar */}
      <div className="hidden md:flex w-[80px] md:fixed md:h-screen  bg-navCol py-[32px] flex-col justify-between z-[60]">
        {/* navbar top */}
        <div className="w-full h-fit flex flex-col items-center gap-y-[24px]">
          {/* Logo */}
          <div className={`w-[80px] h-[80px] ${styles.flexCenter}`}>
            <img src={Logo} alt="Logo" className="w-[54px] h-[54px]" />
          </div>

          {/* Items */}
          <div className="flex flex-col align-center">
            {/* profile */}
            <div
              className={`w-[80px] h-[80px] ${styles.flexCenter} ${
                activeSite === "profile" ? "bg-navCol" : "bg-bgPrimaryCol"
              }`}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} ${
                  activeSite === "profile"
                    ? "bg-bgPrimaryCol rounded-l-[50px]"
                    : "bg-navCol"
                } 
              ${activeSite === "buyinglist" ? "rounded-br-[50px]" : ""} 
              `}
              >
                <FaUserAlt size="25px" className="text-lightTextCol" />
              </div>
            </div>

            {/* buyinglist */}
            <div
              className={`w-[80px] h-[80px] ${styles.flexCenter} 
            ${
              activeSite === "buyinglist" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} 
              ${
                activeSite === "buyinglist"
                  ? "bg-bgPrimaryCol rounded-l-[50px]"
                  : "bg-navCol"
              }
                ${activeSite === "profile" ? "rounded-tr-[50px]" : ""} 
                ${activeSite === "home" ? "rounded-br-[50px]" : ""} 
              `}
              >
                <FaShoppingCart size="25px" className="text-lightTextCol" />
              </div>
            </div>

            {/* home */}
            <div
              className={`w-[80px] h-[80px] ${styles.flexCenter} 
            ${
              activeSite === "home" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} 
              ${
                activeSite === "home"
                  ? "bg-bgPrimaryCol rounded-l-[50px]"
                  : "bg-navCol"
              }
                ${activeSite === "buyinglist" ? "rounded-tr-[50px]" : ""} 
                ${activeSite === "favorites" ? "rounded-br-[50px]" : ""} 
              `}
              >
                <FaHome size="25px" className="text-lightTextCol" />
              </div>
            </div>

            {/* favorites */}
            <div
              className={`w-[80px] h-[80px] ${styles.flexCenter} 
            ${
              activeSite === "favorites" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} 
              ${
                activeSite === "favorites"
                  ? "bg-bgPrimaryCol rounded-l-[50px]"
                  : "bg-navCol"
              }
                ${activeSite === "home" ? "rounded-tr-[50px]" : ""} 
                ${activeSite === "sharepage" ? "rounded-br-[50px]" : ""} 
              `}
              >
                <FaStar size="25px" className="text-lightTextCol" />
              </div>
            </div>

            {/* sharepage */}
            <div
              className={`w-[80px] h-[80px] ${styles.flexCenter} 
            ${
              activeSite === "sharepage" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} 
              ${
                activeSite === "sharepage"
                  ? "bg-bgPrimaryCol rounded-l-[50px]"
                  : "bg-navCol"
              }
                ${activeSite === "favorites" ? "rounded-tr-[50px]" : ""} 
              `}
              >
                <FaUsers size="25px" className="text-lightTextCol" />
              </div>
            </div>
          </div>
        </div>

        {/* navbar bottom */}
        <div className="flex flex-col w-full gap-y-[35px] items-center">
          <FaPinterestP size="25px" className="text-[#B00000]" />
          <img src={InstagramIcon} alt="Instagram Icon" />
          <FaTwitter size="25px" className="text-[#16A1F1]" />
        </div>
      </div>

      {/* mobile Navbar */}
      <div
        className={`md:hidden absolute top-[86%] w-full h-[14%] max-h-[190px] flex justify-center z-[60] bg-bgPrimaryCol pt-3 rounded-t-[20px]`}
      >
        <div className="flex justify-between py-[10px] px-[20px] min-w-[320px] w-9/12 max-w-[450px] h-20 rounded-xl bg-bgSecondaryDarkCol">
          <div className={`w-[60px] h-[60px] ${styles.flexCenter}`}>
            <FaUsers size="25px" className="text-lightTextCol" />
          </div>
          <div className={`w-[60px] h-[60px] ${styles.flexCenter}`}>
            <FaStar size="25px" className="text-lightTextCol" />
          </div>
          <div className={`w-[60px] h-[60px] ${styles.flexCenter}`}>
            <FaHome size="25px" className="text-lightTextCol" />
          </div>
          <div className={`w-[60px] h-[60px] ${styles.flexCenter}`}>
            <FaShoppingCart size="25px" className="text-lightTextCol" />
          </div>
          <div className={`w-[60px] h-[60px] ${styles.flexCenter}`}>
            <FaUserAlt size="25px" className="text-lightTextCol" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
