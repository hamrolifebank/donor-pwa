import jwtDecode from "jwt-decode";
import localData from "./localData";

export const getCurrentUser = () => {
  let user = null;
  const data = localData.getFromStorage("user");
  if (data) user = data;
  return user;
};

export const setUserData = (value) => {
  const user = localData.getFromStorage("user");
  if (user) {
    console.log(user.events);
    user.events.push(value);
  }
};

export const setCurrentUser = (value) => {
  localData.setInStorage("user", value);
};

export const setPublicKey = (value) => {
  localData.setInStorage("publicKey", value);
};

export const getPublicKey = () => {
  return localData.getFromStorage("publicKey");
};

export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

export const setWallet = (wallet) => {
  localData.setInStorage("wallet", wallet);
};

export const getWallet = () => {
  return localData.getFromStorage("wallet");
};

export const deletePublicAddressLocal = () =>
  typeof window !== "undefined" ? localStorage.removeItem("publicKey") : "";

export const deleteUserLocal = () =>
  typeof window !== "undefined" ? localStorage.removeItem("user") : null;

export const deleteWalletFromLocal = () =>
  typeof window !== "undefined" ? localStorage.removeItem("wallet") : null;
