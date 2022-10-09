import {
  FaCheck,
  FaEdit,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFilter,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import styles from "../styles";

// samples

function inputs() {
  return (
    <div className="flex h-screen w-full items-center  justify-center">
      <div className="flex h-[512px] w-[512px] flex-col items-center justify-center gap-y-8 rounded-xl bg-slate-800 p-6">
        {/* input closed (icon txt) */}
        <div className="flex w-full flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="flex w-full items-center gap-[8px] rounded-xl border-[1px] border-solid px-[10px] py-[12px] text-inputCol">
            {/* icon */}
            <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex hidden items-center gap-x-[8px]`}
          >
            <FaExclamationTriangle className="hidden pb-[2px] text-failure" />
            <FaExclamationCircle className="hidden pb-[2px] text-warning" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input closed (icon txt + filter) */}
        <div className="flex w-full flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="flex w-full gap-x-[10px]">
            <div className="flex w-full items-center gap-[8px] rounded-xl border-[1px] border-solid px-[10px] py-[12px] text-inputCol">
              {/* icon */}
              <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
                <FaSearch className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="Search For Combinations..."
              />
            </div>
            <div
              className={`relative h-[46px] w-[50px] rounded-xl border-[1px] ${styles.flexCenter} z-[60] text-lightTextCol`}
            >
              <FaFilter size="14px" />
              {/* Filter */}
              <div className="informationBoxShadow absolute top-[110%] right-0 flex hidden w-[256px] flex-col rounded-2xl bg-bgSecondaryDarkCol p-4">
                <p
                  className={`${styles.heading14} mb-2 border-b-[1px] border-lightTextCol`}
                >
                  Filter for:
                </p>
                {/* content */}
                <div className="flex flex-col">
                  {/* one line */}
                  <div className="flex cursor-pointer items-center rounded-[4px] py-2 hover:bg-[#3E4150] hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>
                      Breakfast
                    </p>
                    <div className="flex flex-grow items-center justify-between gap-x-4">
                      <div
                        className={`tagBreakfast w-fit rounded-full px-4 py-1 ${styles.tag10}`}
                      >
                        Breakfast
                      </div>
                      <div className="flex">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex cursor-pointer items-center rounded-[4px] py-2 hover:bg-[#3E4150] hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>Lunch</p>
                    <div className="flex flex-grow items-center justify-between gap-x-4">
                      <div
                        className={`tagLunch w-fit rounded-full px-4 py-1 ${styles.tag10}`}
                      >
                        Lunch
                      </div>
                      <div className="flex">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex cursor-pointer items-center rounded-[4px] py-2 hover:bg-[#3E4150] hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>Dinner</p>
                    <div className="flex flex-grow items-center justify-between gap-x-4">
                      <div
                        className={`tagDinner w-fit rounded-full px-4 py-1 ${styles.tag10}`}
                      >
                        Dinner
                      </div>
                      <div className="flex">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex cursor-pointer items-center rounded-[4px] py-2 hover:bg-[#3E4150] hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>
                      Vegeterian
                    </p>
                    <div className="flex flex-grow items-center justify-between gap-x-4">
                      <div
                        className={`tagBreakfast w-fit rounded-full px-4 py-1 ${styles.tag10}`}
                      >
                        Vegeterian
                      </div>
                      <div className="flex">
                        <FaTimes />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex cursor-pointer items-center rounded-[4px] py-2 hover:bg-[#3E4150] hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>Vegan</p>
                    <div className="flex flex-grow items-center justify-between gap-x-4">
                      <div
                        className={`tagBreakfast w-fit rounded-full px-4 py-1 ${styles.tag10}`}
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
            className={`text-inputCol ${styles.paragraph14} flex hidden items-center gap-x-[8px]`}
          >
            <FaExclamationTriangle className="hidden pb-[2px] text-failure" />
            <FaExclamationCircle className="hidden pb-[2px] text-warning" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input closed (icon txt icon) */}
        <div className="flex w-full flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="flex w-full items-center gap-[8px] rounded-xl border-[1px] border-solid px-[10px] py-[12px] text-inputCol">
            {/* icon */}
            <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
            {/* icon */}
            <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
              <FaEdit className="text-inputCol" size="15px" />
            </div>
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex hidden items-center gap-x-[8px]`}
          >
            <FaExclamationTriangle className="hidden pb-[2px] text-failure" />
            <FaExclamationCircle className="hidden pb-[2px] text-warning" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input open (icon txt) */}
        <div className="flex w-full flex-col">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="flex w-full items-center gap-[8px] border-b-[1px] border-solid  px-[10px] py-[12px] text-inputCol">
            {/* icon */}
            <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex hidden items-center gap-x-[8px]`}
          >
            <FaExclamationTriangle className="hidden pb-[2px] text-failure" />
            <FaExclamationCircle className="hidden pb-[2px] text-warning" />
            Please Enter The Correct Password
          </div>
        </div>

        {/* input open (icon txt icon) */}
        <div className="flex w-full flex-col">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="flex w-full items-center gap-[8px] border-b-[1px] border-solid  px-[10px] py-[12px] text-inputCol">
            {/* icon */}
            <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Combinations..."
            />
            <div
              className={`h-[20px] w-[20px] ${styles.flexCenter} cursor-pointer`}
            >
              <FaEdit className="w-[15px] text-inputCol" />
            </div>
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex hidden items-center gap-x-[8px]`}
          >
            <FaExclamationTriangle className="hidden pb-[2px] text-failure" />
            <FaExclamationCircle className="hidden pb-[2px] text-warning" />
            Please Enter The Correct Password
          </div>
        </div>
      </div>
    </div>
  );
}

export default inputs;
