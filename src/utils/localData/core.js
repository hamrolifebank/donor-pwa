var { ethers } = require("ethers");


const core = {
  async setInLocal(key,value) {
    window.localStorage.setItem(`${key}`, value);
  },

  async getFromLocal() {
    const walletFromLocal = window.localStorage.getItem(
      "wallet",
      JSON.parse(walletFromLocal)
    );
    if (walletFromLocal) {
      return true;
    } else return null;
  },
}
  
module.exports = core;
