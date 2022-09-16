export default function useValidation() {
  const distributor = ({ id, condition, values }) => {
    switch (id) {
      case "fullName": 
        return validateFullName(values)
      case "username":
        return validateUsername(values);
      case "email":
        return validateEmail(values);
      case "password":
        return validatePassword(values);
      case "pinterest":
        return validatePinterest(values);
      case "twitter":
        return validateTwitter(values);
      case "instagram":
        return validateInstagram(values);
      case "userInformation":
        return validateUserInformation({condition, values});
      default:
    }
  };

  const validateFullName = (fullName) => {
    return {
      result: fullName.length >= 6,
      errorMsg: "Please Enter Your Full Name With At Least 6 Characters"
    }
  }

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
    return values.every((item) => item.includes("uccess"));
  };

  const validatePinterest = (link) => {
    return {
      result: link.includes("pinterest"),
      errorMsg: "Word Pinterest Has To Be Included",
    };
  };

  const validateTwitter = (link) => {
    return {
      result: link.includes("twitter"),
      errorMsg: "Word Twitter Has To Be Included"
    }
  };

  const validateInstagram = (link) => {
    return {
      result: link.includes("instagram"),
      errorMsg: "Word Instagram Has To Be Included"
    }
  };

  return {
    validateUsername,
    validateEmail,
    validatePassword,
    validateUserInformation,
    validatePinterest,
    validateTwitter,
    validateInstagram,
    distributor,
  };
}

/*
Full Name
  Err: Please Enter Your Full Name With At Least 6 Characters
*/
