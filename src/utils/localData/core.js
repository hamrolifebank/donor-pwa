var { ethers } = require("ethers");

const core = {
  async setInLocal(key, value) {
    window.localStorage.setItem(`${key}`, value);
  },

  async getFromLocal(key) {
    const walletFromLocal = window.localStorage.getItem(
      `${key}`,
      JSON.parse(walletFromLocal)
    );
    if (walletFromLocal) {
      return true;
    } else return null;
  },
};

module.exports = core;
