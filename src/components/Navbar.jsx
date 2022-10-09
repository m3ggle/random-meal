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
      <div className="z-[60] hidden w-[80px] flex-col justify-between  bg-navCol py-[32px] md:fixed md:flex md:h-screen">
        {/* navbar top */}
        <div className="flex h-fit w-full flex-col items-center gap-y-[24px]">
          {/* Logo */}
          <div className={`h-[80px] w-[80px] ${styles.flexCenter}`}>
            <img src={ODonutLogo} alt="Logo" className="h-[54px] w-[54px]" />
          </div>

          {/* Items */}
          <div className="align-center flex flex-col">
            {/* profile */}
            <Link
              to={"/profile"}
              className={`h-[80px] w-[80px] ${
                styles.flexCenter
              }  cursor-pointer ${
                site === "/profile" ? "bg-navCol" : "bg-bgPrimaryCol"
              }`}
            >
              <div
                className={`h-[80px] w-[80px] ${styles.flexCenter} ${
                  site === "/profile"
                    ? "rounded-l-[50px] bg-bgPrimaryCol"
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
              className={`h-[80px] w-[80px] ${styles.flexCenter}  cursor-pointer
            ${
              site === "/buyinglist" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`h-[80px] w-[80px] ${styles.flexCenter} 
              ${
                site === "/buyinglist"
                  ? "rounded-l-[50px] bg-bgPrimaryCol"
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
              className={`h-[80px] w-[80px] ${styles.flexCenter}  cursor-pointer
            ${
              site === "/home" || site === "/" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`h-[80px] w-[80px] ${styles.flexCenter} 
              ${
                site === "/home" || site === "/"
                  ? "rounded-l-[50px] bg-bgPrimaryCol"
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
              className={`h-[80px] w-[80px] ${styles.flexCenter}  cursor-pointer
            ${
              site === "/favorites" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`h-[80px] w-[80px] ${styles.flexCenter} 
              ${
                site === "/favorites"
                  ? "rounded-l-[50px] bg-bgPrimaryCol"
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
              className={`h-[80px] w-[80px] ${styles.flexCenter}  cursor-pointer
            ${
              site === "/sharepage" ? "bg-navCol" : "bg-bgPrimaryCol"
            }            
            `}
            >
              <div
                className={`h-[80px] w-[80px] ${styles.flexCenter} 
              ${
                site === "/sharepage"
                  ? "rounded-l-[50px] bg-bgPrimaryCol"
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
        <div className="flex w-full flex-col items-center gap-y-[35px]">
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
        } absolute bottom-0 z-[60] flex h-24 max-h-[112px] w-full justify-center rounded-t-[20px] bg-bgPrimaryCol py-3 600:h-28 600:pb-0 md:hidden`}
      >
        <div className="flex h-20 w-[90%] min-w-[340px] max-w-[450px] justify-between rounded-xl bg-bgSecondaryDarkCol py-[10px] px-[20px]">
          <Link
            to={"/sharepage"}
            className={`h-[60px] w-[60px] ${styles.flexCenter} ${
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
            className={`h-[60px] w-[60px] ${styles.flexCenter} ${
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
            className={`h-[60px] w-[60px] ${styles.flexCenter} ${
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
            className={`h-[60px] w-[60px] ${styles.flexCenter} ${
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
            className={`h-[60px] w-[60px] ${styles.flexCenter} ${
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
