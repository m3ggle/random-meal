import React from "react";
import { FaPinterestP, FaTimes, FaTwitter } from "react-icons/fa";
import ProfilePic from "../assets/images/ProfilePic.webp";
import InstagramIcon from "../assets/svg/instagramIcon.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles";
import CardsSamples from "../utilities/cards/CardsSamples";

const ProfileOthers = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="fixed top-0 left-0 z-[100] h-screen w-full bg-bgPrimaryCol">
      <div className="relative flex h-screen w-full justify-center overflow-auto ">
        {/* beginning of the actual modal */}
        <div
          className={`modalShadow absolute top-[6%] flex min-h-[94%] w-full flex-col rounded-t-[30px] bg-bgPrimaryCol py-10 px-6 900:top-[13%] 900:min-h-[87%] 900:w-10/12 sm:px-10`}
        >
          <div
            className={`absolute ${
              width > 600 ? "top-12 right-12" : "top-6 right-6"
            } h-11 w-11 rounded-full ${styles.flexCenter}`}
          >
            <FaTimes
              size={width > 600 ? "30px" : "24px"}
              className="text-lightTextCol"
            />
          </div>
          {/* top info */}
          <div className={`${styles.flexCenter} w-full py-10`}>
            <div className="flex flex-col items-center 500:flex-row 500:gap-10">
              {/* pic */}
              <img src={ProfilePic} alt="" className="h-[204px] w-[204px]" />
              {/* info */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center gap-1">
                  <p
                    className={
                      width > 600
                        ? `${styles.heading32} text-lightTextCol`
                        : `${styles.heading24} text-lightTextCol`
                    }
                  >
                    Marry
                  </p>
                  <p className={`${styles.paragraph16} text-lightTextCol`}>
                    Maria Hinterdorf
                  </p>
                  {/* Socials */}
                  <div className="flex gap-x-16">
                    <FaPinterestP
                      size="25px"
                      className="cursor-pointer text-[#B00000]"
                    />
                    <img
                      src={InstagramIcon}
                      alt="Instagram Icon"
                      className="cursor-pointer"
                    />
                    <FaTwitter
                      size="25px"
                      className="cursor-pointer text-[#16A1F1]"
                    />
                  </div>
                </div>
                {/* Sub */}
                <div className="flex cursor-pointer items-center gap-x-6">
                  <p className={`text-base font-semibold text-lightTextCol`}>
                    391 Subscriber
                  </p>
                  <div
                    className={`${styles.flexCenter} subscribe h-11 rounded-lg px-4`}
                  >
                    <p className="text-base font-semibold text-lightTextCol">
                      Subscribe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom meals */}
          <div className="flex w-full flex-col gap-y-2">
            <p
              className={
                width > 600
                  ? `${styles.heading32} text-lightTextCol`
                  : `${styles.heading24} text-lightTextCol`
              }
            >
              Marry's favorite Meals
            </p>
            <div className="flex w-full max-w-[1350px] flex-wrap  justify-center gap-2 overflow-scroll 600:gap-6">
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
              {width < 600 ? (
                <CardsSamples type="mobile" />
              ) : (
                <CardsSamples type="little" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOthers;
