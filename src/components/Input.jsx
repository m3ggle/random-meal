import React from "react";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import useHandleInput from "../hooks/useHandleInput";
import styles from "../styles";

const Input = ({ ...take }) => {
  const {
    callbackFct,
    formData,
    specificInputObject,
    label,
    stateArray,
    condition,
    validation,
  } = take;

  const { handleInputFocus, handleInputChange, handleInputBlur } =
    useHandleInput();

  const handleFocus = (e) => {
    callbackFct(handleInputFocus({ e, formData, validation }));
  };
  const handelChange = (e) => {
    callbackFct(handleInputChange({ e, formData, validation }));
  };
  const handleBlur = (e) => {
    callbackFct(
      handleInputBlur({ e, formData, stateArray, condition, validation })
    );
  };

  return (
    <div className="flex w-full flex-col">
      {/* Label */}
      {label && (
        <label className={`text-inputCol ${styles.paragraph12}`}>
          {specificInputObject.displayName}
        </label>
      )}
      <div
        className={`w-full border-b-[1px] border-solid text-inputCol ${
          specificInputObject.state === "warning"
            ? "border-warning"
            : specificInputObject.state === "success"
            ? "border-success"
            : specificInputObject.state === "failure"
            ? "border-failure"
            : "border-default"
        } flex items-center gap-[8px] px-[10px] py-[12px]`}
      >
        {/* icon */}
        <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
          <i
            className={`${specificInputObject.icon} text-[15px] text-inputCol`}
          ></i>
        </div>
        {/* text */}
        <input
          id={specificInputObject.id}
          value={specificInputObject.inputValue}
          onChange={handelChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={specificInputObject.type}
          className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
          placeholder={specificInputObject.placeholder}
        />
        <div className={`h-[20px] ${styles.flexCenter} gap-2`}>
          {specificInputObject.active &&
            (specificInputObject.state === "success" ? (
              <FaCheck className="text-success" />
            ) : (
              <FaExclamationCircle className="text-warning" />
            ))}
        </div>
      </div>
      <div
        className={`${
          specificInputObject.state === "failure" ? "flex" : "hidden"
        }  items-center gap-x-[8px] px-2`}
      >
        <div className={`h-[20px] w-[20px] ${styles.flexCenter}`}>
          <FaExclamationTriangle className=" text-failure" />
        </div>
        <p className={`${styles.paragraph12} text-inputCol`}>
          {specificInputObject.errorMessage}
        </p>
      </div>
    </div>
  );
};

export default Input;

/*
// Password eye
const [viewPassword, setViewPassword] = useState(false);
<div className={`h-[20px] ${styles.flexCenter} gap-2`}>
  <div
    className={formData.password.active ? "hidden" : "flex"}
    onClick={() => setViewPassword((prevState) => !prevState)}
  >
    {viewPassword ? <FaEye /> : <FaEyeSlash />}
  </div>
  {formData.password.active &&
    (formData.password.state === "success" ? (
      <FaCheck className="text-success" />
    ) : (
      <FaExclamationCircle className="text-warning" />
    ))}
</div>;
*/
