import { isValid } from "date-fns";
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
// utils
// import { isValidToken, setSession } from '../utils/jwt';
import {
  isValidToken,
  savePublicAddress,
  getPublicAddress,
  deleteAccessToken,
  saveCurrentUser,
  getCurrentUser,
  saveWallet,
  getWallet,
} from "../utils/sessionManager";

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false, // should be false by default,
  isInitialized: false,
  isMnemonicWritten: false,
  wallet: null,
  publicAddress: null,
  user: null,
};

const AppAuthContext = createContext({
  ...initialState,
  method: "jwt",
  addPublicAddress: () => {},
  addWallet: () => {},
  deleteToken: () => {},
});

// ----------------------------------------------------------------------

AppAuthProvider.propTypes = {
  children: PropTypes.node,
};

const localPublicAddress = getPublicAddress();
const localUser = getCurrentUser();
const wallet = getWallet();

function AppAuthProvider({ children }) {
  const [authState, setAuthState] = useState(initialState);

  const addWallet = (payload) => {
    setAuthState((prev) => ({
      ...prev,
      wallet: payload,
    }));
    saveWallet(payload);
  };

  const addPublicAddress = (payload) => {
    if (payload) {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: true,
        publicAddress: payload,
      }));
      savePublicAddress(payload);
    }
  };

  const addUser = (payload) => {
    if (payload) {
      setAuthState((prev) => ({
        ...prev,
        user: payload,
      }));
      saveCurrentUser(payload);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      setAuthState((prev) => ({ ...prev, isInitialized: true }));
      try {
        if (localPublicAddress) {
          setAuthState((prev) => ({
            ...prev,
            isAuthenticated: true,
            publicAddress: localPublicAddress,
          }));
        } else {
          setAuthState((prev) => ({ ...prev, isAuthenticated: false }));
        }
        if (wallet) {
          setAuthState((prev) => ({
            ...prev,
            wallet: wallet,
          }));
        }
        if (localUser) {
          setAuthState((prev) => ({
            ...prev,
            user: localUser,
          }));
        }
      } catch (err) {
        console.error(err);
      }
    };

    initialize();
  }, []);

  const deleteToken = () => {
    deleteAccessToken();
    setAuthState((prev) => ({ ...prev, isInitialized: true, token: "" }));
  };
  const contextProps = {
    ...authState,
    deleteToken,
    addWallet,
    addPublicAddress,
    addUser,
  };

  return (
    <AppAuthContext.Provider value={contextProps}>
      {children}
    </AppAuthContext.Provider>
  );
}

export { AppAuthContext, AppAuthProvider };

export const useAppAuthContext = () => useContext(AppAuthContext);
