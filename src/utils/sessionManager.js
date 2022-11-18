import jwtDecode from "jwt-decode";

export const saveWallet = (wallet) => {
  return typeof window !== "undefined"
    ? localStorage.setItem("wallet", wallet)
    : "";
};

export const getWallet = () => {
  return typeof window !== "undefined" ? localStorage.getItem("wallet") : "";
};

export const getCurrentUser = () => {
  // let user = null;
  // const data = localStorage.getItem("currentUser");
  // if (data) user = JSON.parse(data);
  // return user;
  return typeof window !== "undefined"
    ? localStorage.getItem("currentUser")
    : "";
};

export const saveCurrentUser = (userData) =>
  typeof window !== "undefined"
    ? localStorage.setItem("currentUser", JSON.stringify(userData))
    : "";

export const getPublicAddress = () =>
  typeof window !== "undefined" ? localStorage.getItem("public-address") : "";

export const savePublicAddress = (address) =>
  typeof window !== "undefined"
    ? localStorage.setItem("public-address", address)
    : null;

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
