import useValidation from "./useValidation";

export default function useHandleInput() {
  const { distributor } = useValidation();

  const handleInputFocus = ({ e, formData }) => {
    const { id, value: values } = e.target;
    const { result, errorMsg } = distributor({id, values});
    formData = {
      ...formData,
      [id]: {
        ...formData[id],
        state: result ? "success" : "warning",
        active: true,
        errorMessage: errorMsg,
      },
    };
    return formData;
  };

  const handleInputChange = ({ e, formData }) => {
    const { id, value: values } = e.target;
    const { result } = distributor({id, values});
    formData = {
      ...formData,
      [id]: {
        ...formData[id],
        state: result ? "success" : "warning",
        inputValue: values,
      },
    };
    return formData;
  };

  const handleInputBlur = ({ e, formData, stateArray, condition }) => {
    const { id, value: values } = e.target;
    const { result } = distributor({id, values});
    formData = {
      ...formData,
      [id]: {
        ...formData[id],
        state: result ? "defaultSuccess" : "failure",
        active: false,
      },
      userInformaiton: distributor({id: "userInformation", values: stateArray, condition}),
    };
    return formData;
  };

  return { handleInputFocus, handleInputChange, handleInputBlur };
}
