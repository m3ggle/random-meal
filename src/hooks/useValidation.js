export default function useValidation() {
  const distributor = ({ id, condition, values, validation }) => {
    switch (validation) {
      case "fullName":
        return validateFullName(values);
      case "username":
        return validateUsername(values);
      case "email":
        return validateEmail(values);
      case "password":
        return validatePassword(values);
      case "wordInIt":
        return validateWordInIt({ id, values });
      case "userInformation":
        return validateUserInformation({ condition, values });
      case "maxWords":
        return validateMaxWords(values);
      case "noValidation":
        return { result: true, errorMsg: "Invalid value" };
      case "symbols400":
        return validateCharacterCount(values);
      default:
    }
  };

  const validateMaxWords = (word) => {
    return {
      result: word.length <= 20 && word.length > 2,
      errorMsg: "Keep it under 20 Characters",
    };
  };

  const validateFullName = (fullName) => {
    return {
      result: fullName.length >= 6,
      errorMsg: "Please Enter Your Full Name With At Least 6 Characters",
    };
  };

  const validateUsername = (username) => {
    return {
      result: username.length >= 4,
      errorMsg: "Your Username Should Have More Than 4 Characters",
    };
    // and
    // Firebase check if username is already taken
  };

  const validateEmail = (email) => {
    return {
      result: email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
      errorMsg: "Enter A Valid E-Mail Address",
    };
  };

  const validatePassword = (password) => {
    return {
      result: password.match(
        /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/
      ),
      errorMsg:
        "At Least 8 Characters (Uppercase And Lower Letter + Number + Symbol)",
    };
  };

  const validateUserInformation = ({ condition, values }) => {
    // condition: to check if only have to be in the state success/defaultSuccess or all
    if (condition === "all") {
      return values.every((item) => item.includes("uccess"));
    } else if (condition === "one") {
      console.log(values);
      if (values.filter((item) => item.includes("uccess")).length >= 1) {
        if (
          values.filter(
            (item) => item.includes("warning") || item.includes("failure")
          ).length >= 1
        ) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  };

  const validateWordInIt = ({ id, values }) => {
    return {
      result: values.length === 0 ? true : values.includes(id),
      errorMsg:
        "Word " +
        id.charAt(0).toUpperCase() +
        id.slice(1) +
        " Has To Be Included",
    };
  };

  const validateCharacterCount = (characters) => {
    return {
      result: characters.length < 400,
      errorMsg: "Too Much Information",
    };
  };

  return {
    validateUsername,
    validateEmail,
    validatePassword,
    validateUserInformation,
    distributor,
    validateCharacterCount,
  };
}

/*
Full Name
  Err: Please Enter Your Full Name With At Least 6 Characters
*/
