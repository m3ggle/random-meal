import { createContext, useContext, useReducer } from "react";
import userReducer from "./UserReducer";

const UserContext = createContext();
UserContext.displayName = "UserContext";

export function useUserContext() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const initialState = {
    user: {
      favMeals: [],
      favCombos: [],
    },
    creation: {
      mealtitle: {
        title:
          "I live by this rule - breakfast like a king, lunch like a prince and dinner like a pauper. ~ Suniel Shetty",
        subTitle: "Choose the Title",
        text: "",
      },
      breakfast: {
        title:
          "There are times when breakfast seems the one thing worth getting up for. ~ Peter De Vries",
        subTitle: "Choose your Breakfast 🥪",
        id: 0,
      },
      lunch: {
        title: "A place deserves somewhere to eat lunch. ~ John Fetterman",
        subTitle: "Choose your Lunch 🥗",
        id: 0,
      },
      dinner: {
        title:
          "Tell the truth, work hard, and come to dinner on time. ~ Gerald R. Ford",
        subTitle: "Choose your Dinner 🥘",
        id: 0,
      },
      preview: {
        title:
          "I don't stop eating when I'm full. The meal isn't over when I'm full. It's over when I hate myself. ~ Louis C. K.",
        subTitle: "Preview 🥪 🥗 🥘",
        combo: {},
      },
    },
  };

  const [state, dispatchUser] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
