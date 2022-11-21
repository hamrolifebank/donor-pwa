import jwtDecode from "jwt-decode";
import localData from "./localData";

export const getCurrentUser = () => {
  let user = null;
  const data = localData.getFromStorage("user");
  if (data) user = data;
  return user;
};

export const setCurrentUser = (value) => {
  localData.setInStorage("user", value);
};

export const getPublicKey = () => {
  return localData.getFromStorage("publicKey");
};

export const setPublicKey = (value) => {
  localData.setInStorage("publicKey", value);
};

export const deletePublicAddressLocal = () =>
  typeof window !== "undefined"
    ? localStorage.removeItem("public-address")
    : "";

export const deleteAccessToken = () =>
  typeof window !== "undefined" ? localStorage.removeItem("accessToken") : null;

export const deleteWalletFromLocal = () =>
  typeof window !== "undefined" ? localStorage.removeItem("wallet") : null;

export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};
