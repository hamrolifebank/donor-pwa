const { WindowSharp } = require("@mui/icons-material");
var { ethers } = require("ethers");
import { STORAGE } from "@config";

const setInStorageType = (key, value, storage) => {
  {
    const stored =
      storage === STORAGE.LOCAL_STORAGE
        ? typeof window !== "undefined"
          ? localStorage.setItem(`${key}`, JSON.stringify(value))
          : null
        : "";
  }
};

const getFromStorageType = (key, storage) => {
  {
    const stored =
      storage === STORAGE.LOCAL_STORAGE
        ? typeof window !== "undefined"
          ? localStorage.getItem(`${key}`)
          : ""
        : "";
    return JSON.parse(stored);
  }
};

const core = {
  async setInStorage(key, value, storage = STORAGE.LOCAL_STORAGE) {
    return setInStorageType(key, value, storage);
  },

  async getFromStorage(key, storage = STORAGE.LOCAL_STORAGE) {
    const dataFromLocal = getFromStorageType(key, storage);
    if (dataFromLocal) {
      return true;
    } else return null;
  },
};

module.exports = core;
