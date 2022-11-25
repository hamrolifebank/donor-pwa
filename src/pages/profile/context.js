import { createContext, useState } from "react";
import { getExample } from "./services";

const initialState = {
  stateValue: "", // initial state value ** for auto complete ** used as interface
  testFunction: () => {},
  testData: [],
};

export const ProfileContext = createContext(initialState);

export const ProfileContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const testFunction = async () => {
    // do something
    const res = await getExample();
    setState((prev) => ({ ...prev, testData: res.data }));
  };

  const contextProps = {
    ...state,
    testFunction,
  };

  return (
    <ProfileContext.Provider value={contextProps}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => useContext(ProfileContext);

export default function context() {}
