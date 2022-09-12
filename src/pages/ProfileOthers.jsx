import React from 'react'
import styles from '../styles'
import ProfilePic from '../assets/images/ProfilePic.webp'
import { FaPinterestP, FaTwitter, FaTimes } from 'react-icons/fa'
import InstagramIcon from "../assets/svg/instagramIcon.svg";
import CardsSamples from "../utilities/cards/CardsSamples"
import useWindowDimensions from '../hooks/useWindowDimensions';

const ProfileOthers = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[100] bg-bgPrimaryCol">
      <div className="relative w-full h-screen overflow-auto flex justify-center ">
        {/* beginning of the actual modal */}
        <div
          className={`absolute top-[6%] 900:top-[13%] w-full min-h-[94%] 900:min-h-[87%] 900:w-10/12 rounded-t-[30px] modalShadow flex flex-col py-10 bg-bgPrimaryCol px-6 sm:px-10`}
        >
          <div
            className={`absolute ${
              width > 600 ? "top-12 right-12" : "top-6 right-6"
            } w-11 h-11 rounded-full ${styles.flexCenter}`}
          >
            <FaTimes
              size={width > 600 ? "30px" : "24px"}
              className="text-lightTextCol"
            />
          </div>
          {/* top info */}
          <div className={`${styles.flexCenter} py-10 w-full`}>
            <div className="flex flex-col 500:flex-row items-center 500:gap-10">
              {/* pic */}
              <img src={ProfilePic} alt="" className="w-[204px] h-[204px]" />
              {/* info */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1 items-center">
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
                      className="text-[#B00000] cursor-pointer"
                    />
                    <img
                      src={InstagramIcon}
                      alt="Instagram Icon"
                      className="cursor-pointer"
                    />
                    <FaTwitter
                      size="25px"
                      className="text-[#16A1F1] cursor-pointer"
                    />
                  </div>
                </div>
                {/* Sub */}
                <div className="flex items-center gap-x-6 cursor-pointer">
                  <p className={`text-base font-semibold text-lightTextCol`}>
                    391 Subscriber
                  </p>
                  <div
                    className={`${styles.flexCenter} px-4 subscribe h-11 rounded-lg`}
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
          <div className="flex flex-col w-full gap-y-2">
            <p
              className={
                width > 600
                  ? `${styles.heading32} text-lightTextCol`
                  : `${styles.heading24} text-lightTextCol`
              }
            >
              Marry's favorite Meals
            </p>
            <div className="gap-2 flex flex-wrap w-full  overflow-scroll 600:gap-6 justify-center max-w-[1350px]">
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
}

export default ProfileOthers