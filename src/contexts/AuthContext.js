import { encryptWallet, restoreFromEncryptedWallet } from "@utils/wallet";
import { isValid } from "date-fns";
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
// utils
// import { isValidToken, setSession } from '../utils/jwt';
import {
  setPublicKey,
  getPublicKey,
  setCurrentUser,
  getCurrentUser,
  deletePublicAddressLocal,
  setWallet,
  getWallet,
  deleteWalletFromLocal,
} from "../utils/sessionManager";

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false, // should be false by default,
  isInitialized: false,

  wallet: null,
  publicAddress: null,
  user: null,
};

const AppAuthContext = createContext({
  ...initialState,
  method: "jwt",
  addPublicAddress: () => {},
  addWallet: () => {},
  addUser: () => {},
  deleteToken: () => {},
  addEventInUser: () => {},
  changeUserPhoneVerified: () => {},
});

// ----------------------------------------------------------------------

AppAuthProvider.propTypes = {
  children: PropTypes.node,
};

const localPublicAddress = getPublicKey();
const localUser = getCurrentUser();
const wallet = getWallet();

function AppAuthProvider({ children }) {
  const [authState, setAuthState] = useState(initialState);

  const addWallet = async (payload, passcode = "") => {
    const encryptedWallet = await encryptWallet(passcode, payload);
    setAuthState((prev) => ({
      ...prev,
      wallet: encryptedWallet,
    }));

    setWallet(encryptedWallet);
    return 1;
  };

  const addPublicAddress = (payload) => {
    if (payload) {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: true,
        publicAddress: payload,
      }));
      setPublicKey(payload);
    }
  };
  const deleteWallet = () => {
    setAuthState((prev) => ({
      ...prev,
      isAuthenticated: false,
      publicAddress: null,
      wallet: null,
    }));

    deletePublicAddressLocal();
    deleteWalletFromLocal();
  };

  const addUser = (payload) => {
    if (payload) {
      setAuthState((prev) => ({
        ...prev,
        user: payload,
      }));
      setCurrentUser(payload);
    }
  };
  const addEventInUser = (event) => {
    // event.currentTarget == event.target

    const eventDetail = {
      id: event.id,
      name: event.name,
      date: event.date,
      location: event.location,
      isRegistered: true,
      isDonated: false,
      isVerified: false,
    };
    const user = getCurrentUser();
    user.events.push(eventDetail);
    addUser(user);
  };

  const changeUserPhoneVerified = () => {
    const user = getCurrentUser();
    setCurrentUser({ ...user, isPhoneVerified: true });
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
    setAuthState((prev) => ({ ...prev, isInitialized: true, token: "" }));
  };
  const contextProps = {
    ...authState,
    deleteToken,
    addWallet,
    addPublicAddress,
    deleteWallet,
    addUser,
    addEventInUser,
    changeUserPhoneVerified,
  };

  return (
    <AppAuthContext.Provider value={contextProps}>
      {children}
    </AppAuthContext.Provider>
  );
}

export { AppAuthContext, AppAuthProvider };

export const useAppAuthContext = () => useContext(AppAuthContext);
