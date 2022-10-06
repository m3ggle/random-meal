import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaPinterestP,
  FaShoppingCart,
  FaStar,
  FaTwitter,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ODonutLogo from "../assets/images/ODonut.webp";
import InstagramIcon from "../assets/svg/instagramIcon.svg";
import { useNavbarContext } from "../context/navbar/NavbarContext";
import styles from "../styles";

const Navbar = () => {
  const { navbarStatus } = useNavbarContext();

  const location = useLocation();

  const [activeSite, setActiveSite] = useState({
    site: useLocation().pathname,
    hidden:
      location.pathname.includes("/sign-in") ||
      location.pathname.includes("/sign-up") ||
      location.pathname.includes("/forgot-password"),
  });
  const { site, hidden } = activeSite;

  // mainly for rerender otherwise the ui will not update if clicked on a navbar btn
  useEffect(() => {
    const activeSiteCopy = {
      site: location.pathname,
      hidden:
        location.pathname.includes("/sign-in") ||
        location.pathname.includes("/sign-up") ||
        location.pathname.includes("/forgot-password"),
    };
    setActiveSite({ ...activeSiteCopy });
  }, [location]);

  return (
    <div className={`${hidden ? "hidden" : "flex"} w-0px md:w-[80px]`}>
      {/* desktop Navbar */}
      <div className="hidden md:flex w-[80px] md:fixed md:h-screen  bg-navCol py-[32px] flex-col justify-between z-[60]">
        {/* navbar top */}
        <div className="w-full h-fit flex flex-col items-center gap-y-[24px]">
          {/* Logo */}
          <div className={`w-[80px] h-[80px] ${styles.flexCenter}`}>
            <img src={ODonutLogo} alt="Logo" className="w-[54px] h-[54px]" />
          </div>

          {/* Items */}
          <div className="flex flex-col align-center">
            {/* profile */}
            <Link
              to={"/profile"}
              className={`w-[80px] h-[80px] ${
                styles.flexCenter
              }  cursor-pointer ${
                site === "/profile" ? "bg-navCol" : "bg-bgPrimaryCol"
              }`}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} ${
                  site === "/profile"
                    ? "bg-bgPrimaryCol rounded-l-[50px]"
                    : "bg-navCol"
                } 
              ${site === "/buyinglist" ? "rounded-br-[50px]" : ""} 
              `}
              >
                <FaUserAlt
                  size="25px"
                  className="text-lightTextCol hover:text-[#3b593e]"
                />
              </div>
            </Link>

            {/* buyinglist */}
            <Link
              to={"/buyinglist"}
              className={`w-[80px] h-[80px] ${styles.flexCenter}  cursor-pointer
            ${
              site === "/buyinglist" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} 
              ${
                site === "/buyinglist"
                  ? "bg-bgPrimaryCol rounded-l-[50px]"
                  : "bg-navCol"
              }
                ${site === "/profile" ? "rounded-tr-[50px]" : ""} 
                ${site === "/home" || site === "/" ? "rounded-br-[50px]" : ""} 
              `}
              >
                <FaShoppingCart
                  size="25px"
                  className="text-lightTextCol hover:text-[#3b593e]"
                />
              </div>
            </Link>

            {/* home */}
            <Link
              to={"/home"}
              className={`w-[80px] h-[80px] ${styles.flexCenter}  cursor-pointer
            ${
              site === "/home" || site === "/" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} 
              ${
                site === "/home" || site === "/"
                  ? "bg-bgPrimaryCol rounded-l-[50px]"
                  : "bg-navCol"
              }
                ${site === "/buyinglist" ? "rounded-tr-[50px]" : ""} 
                ${site === "/favorites" ? "rounded-br-[50px]" : ""} 
              `}
              >
                <FaHome
                  size="25px"
                  className="text-lightTextCol hover:text-[#3b593e]"
                />
              </div>
            </Link>

            {/* favorites */}
            <Link
              to={"/favorites"}
              className={`w-[80px] h-[80px] ${styles.flexCenter}  cursor-pointer
            ${
              site === "/favorites" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} 
              ${
                site === "/favorites"
                  ? "bg-bgPrimaryCol rounded-l-[50px]"
                  : "bg-navCol"
              }
                ${site === "/home" || site === "/" ? "rounded-tr-[50px]" : ""} 
                ${site === "/sharepage" ? "rounded-br-[50px]" : ""} 
              `}
              >
                <FaStar
                  size="25px"
                  className="text-lightTextCol hover:text-[#3b593e]"
                />
              </div>
            </Link>

            {/* sharepage */}
            <Link
              to={"/sharepage"}
              className={`w-[80px] h-[80px] ${styles.flexCenter}  cursor-pointer
            ${
              site === "/sharepage" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`w-[80px] h-[80px] ${styles.flexCenter} 
              ${
                site === "/sharepage"
                  ? "bg-bgPrimaryCol rounded-l-[50px]"
                  : "bg-navCol"
              }
                ${site === "/favorites" ? "rounded-tr-[50px]" : ""} 
              `}
              >
                <FaUsers
                  size="25px"
                  className="text-lightTextCol hover:text-[#3b593e]"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* navbar bottom */}
        <div className="flex flex-col w-full gap-y-[35px] items-center">
          <a
            href="https://www.pinterest.de/megglebande/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterestP size="25px" className="text-[#B00000]" />
          </a>
          <a
            href="https://www.instagram.com/m1ggle/?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={InstagramIcon} alt="Instagram Icon" />
          </a>
          <a
            href="https://twitter.com/Asmongold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size="25px" className="text-[#16A1F1]" />
          </a>
        </div>
      </div>

      {/* mobile Navbar */}
      <div
        className={`${
          navbarStatus ? "flex" : "hidden"
        } md:hidden absolute bottom-0 w-full h-24 600:h-28 max-h-[112px] flex justify-center z-[60] bg-bgPrimaryCol py-3 600:pb-0 rounded-t-[20px]`}
      >
        <div className="flex justify-between py-[10px] px-[20px] min-w-[340px] w-[90%] max-w-[450px] h-20 rounded-xl bg-bgSecondaryDarkCol">
          <Link
            to={"/sharepage"}
            className={`w-[60px] h-[60px] ${styles.flexCenter} ${
              site === "/sharepage" ? "rounded-full bg-bgPrimaryCol" : ""
            } cursor-pointer`}
          >
            <FaUsers
              size="25px"
              className="text-lightTextCol 600:hover:text-[#3b593e]"
            />
          </Link>
          <Link
            to={"/favorites"}
            className={`w-[60px] h-[60px] ${styles.flexCenter} ${
              site === "/favorites" ? "rounded-full bg-bgPrimaryCol" : ""
            } cursor-pointer`}
          >
            <FaStar
              size="25px"
              className="text-lightTextCol 600:hover:text-[#3b593e]"
            />
          </Link>
          <Link
            to={"/home"}
            className={`w-[60px] h-[60px] ${styles.flexCenter} ${
              site === "/home" ? "rounded-full bg-bgPrimaryCol" : ""
            } cursor-pointer`}
          >
            <FaHome
              size="25px"
              className="text-lightTextCol 600:hover:text-[#3b593e]"
            />
          </Link>
          <Link
            to={"/buyinglist"}
            className={`w-[60px] h-[60px] ${styles.flexCenter} ${
              site === "/buyinglist" ? "rounded-full bg-bgPrimaryCol" : ""
            } cursor-pointer`}
          >
            <FaShoppingCart
              size="25px"
              className="text-lightTextCol 600:hover:text-[#3b593e]"
            />
          </Link>
          <Link
            to={"/profile"}
            className={`w-[60px] h-[60px] ${styles.flexCenter} ${
              site === "/profile" ? "rounded-full bg-bgPrimaryCol" : ""
            } cursor-pointer`}
          >
            <FaUserAlt
              size="25px"
              className="text-lightTextCol 600:hover:text-[#3b593e]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
