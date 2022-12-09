import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { arEG } from "date-fns/locale";
import { getIsPasscodeSet, setIsPasscodeSet } from "@utils/sessionManager";

const initialState = {
  isPasscodeset: false,
  changeIsPasscodeSet: () => {},
  isAppLocked: false,
  changeIsAppLocked: () => {},
};
const PasscodeContext = createContext(initialState);

PasscodeProvider.propTypes = {
  children: PropTypes.node,
};

function PasscodeProvider({ children }) {
  const [appState, setAppState] = useState(initialState);

  useEffect(() => {
    const isPasscodeset = getIsPasscodeSet();
    if (isPasscodeset) {
      setAppState((prev) => ({
        ...prev,
        isPasscodeset: true,
        isAppLocked: true,
      }));
    }
  }, []);

  const changeIsPasscodeSet = useCallback(() => {
    setAppState((prev) => ({ ...prev, isPasscodeset: true }));
    setIsPasscodeSet(true);
  }, []);

  const changeIsAppLocked = useCallback(() => {
    setAppState((prev) => ({ ...prev, isAppLocked: !prev.isAppLocked }));
  }, []);
  const contextValue = {
    ...appState,
    changeIsPasscodeSet,
    changeIsAppLocked,
  };

  return (
    <PasscodeContext.Provider value={contextValue}>
      {children}
    </PasscodeContext.Provider>
  );
}
export { PasscodeContext, PasscodeProvider };
export const usePasscodeContext = () => useContext(PasscodeContext);
