var { ethers } = require("ethers");
require("dotenv").config();
const { RS_NETWORK } = process.env;
const provider = new ethers.providers.JsonRpcProvider(RS_NETWORK);

const library = {
  async createWallet() {
    const wallet = await ethers.Wallet.createRandom();
    return wallet;
  },

  async postInLocal(wallet) {
    const walletInLocal = window.localStorage.setItem("wallet", wallet);
  },

  async postInContext() {
    const walletFromLocal = window.localStorage.getItem("wallet");
    if (walletFromLocal) {
      const setInContext = JSON.parse(walletFromLocal);
      return setInContext;
    }
  },

  async loadWallet() {
    const walletFromLocal = window.localStorage.getItem(
      "wallet",
      JSON.parse(walletFromLocal)
    );
    if (walletFromLocal) {
      return true;
    } else return null;
  },

  async restoreWallet(mnemonic) {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    return wallet;
  },

  async encryptWallet(passCode, wallet) {
    const encryptedWallet = await wallet.encrypt(passCode, wallet);
    return { encryptedWallet };
  },

  async restoreFromEncryptedWallet(encryptedWallet, passCode) {
    const wallet = ethers.Wallet.fromEncryptedJson(encryptedWallet, passCode);
  },
};

module.exports = library;
