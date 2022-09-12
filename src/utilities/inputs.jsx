import {
  FaEdit,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFilter,
  FaSearch,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import styles from "../styles";

// samples

function inputs() {
  return (
    <div className="flex justify-center items-center h-screen  w-full">
      <div className="bg-slate-800 w-[512px] h-[512px] rounded-xl flex justify-center items-center flex-col gap-y-8 p-6">
        {/* input closed (icon txt) */}
        <div className="w-full flex flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input closed (icon txt + filter) */}
        <div className="w-full flex flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="w-full flex gap-x-[10px]">
            <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaSearch className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="Search For Combinations..."
              />
            </div>
            <div
              className={`relative w-[50px] h-[46px] border-[1px] rounded-xl ${styles.flexCenter} text-lightTextCol z-[60]`}
            >
              <FaFilter size="14px" />
              {/* Filter */}
              <div className="flex hidden w-[256px] absolute bg-bgSecondaryDarkCol informationBoxShadow rounded-2xl top-[110%] right-0 flex-col p-4">
                <p
                  className={`${styles.heading14} border-b-[1px] border-lightTextCol mb-2`}
                >
                  Filter for:
                </p>
                {/* content */}
                <div className="flex flex-col">
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] hover:px-2 rounded-[4px] py-2 cursor-pointer">
                    <p className={`${styles.paragraph14} w-[110px]`}>
                      Breakfast
                    </p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagBreakfast rounded-full ${styles.tag10}`}
                      >
                        Breakfast
                      </div>
                      <div className="flex">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] rounded-[4px] py-2 cursor-pointer hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>Lunch</p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagLunch rounded-full ${styles.tag10}`}
                      >
                        Lunch
                      </div>
                      <div className="flex">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] rounded-[4px] py-2 cursor-pointer hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>Dinner</p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagDinner rounded-full ${styles.tag10}`}
                      >
                        Dinner
                      </div>
                      <div className="flex">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] rounded-[4px] py-2 cursor-pointer hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>
                      Vegeterian
                    </p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagBreakfast rounded-full ${styles.tag10}`}
                      >
                        Vegeterian
                      </div>
                      <div className="flex">
                        <FaTimes />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] rounded-[4px] py-2 cursor-pointer hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>Vegan</p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagBreakfast rounded-full ${styles.tag10}`}
                      >
                        Vegan
                      </div>
                      <div className="flex">
                        <FaTimes />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input closed (icon txt icon) */}
        <div className="w-full flex flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaEdit className="text-inputCol" size="15px" />
            </div>
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input open (icon txt) */}
        <div className="w-full flex flex-col">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input open (icon txt icon) */}
        <div className="w-full flex flex-col">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center  px-[10px] gap-[8px] py-[12px]">
            {/* icon */}
            <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
            <div
              className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
            >
              <FaEdit className="text-inputCol w-[15px]" />
            </div>
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
        </div>
      </div>
    </div>
  );
}

export default inputs;
