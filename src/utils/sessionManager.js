import jwtDecode from "jwt-decode";
import localData from "./localData";

export const getCurrentUser = () => {
  let user = null;
  const data = localStorage.getFromStorage(key);
  if (data) user = data;

  // if (data) user = JSON.parse(data);
  return user;
};

export const setCurrentUser = (value) => {
  localData.getFromStorage(key);
};

export const getPublicKey = () => {
  return localData.getFromStorage(key);
};

export const setPublicKey = (value) => {
  localData.setInStorage(key, value);
};

export const deleteAccessToken = () =>
  typeof window !== "undefined" ? localStorage.removeItem("accessToken") : null;

export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};
