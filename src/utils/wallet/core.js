var { ethers } = require("ethers");
require("dotenv").config();
const { RS_NETWORK } = process.env;
const provider = new ethers.providers.JsonRpcProvider(RS_NETWORK);

const core = {
  async createWallet() {
    const wallet = await ethers.Wallet.createRandom();

    return wallet;
  },

  async restoreWallet(mnemonic) {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    return wallet;
  },

  async encryptWallet(passCode, wallet) {
    const encryptedWallet = await wallet.encrypt(passCode);
    return encryptedWallet;
  },

  async restoreFromEncryptedWallet(encryptedWallet, passCode) {
    const wallet = await ethers.Wallet.fromEncryptedWallet(
      encryptedWallet,
      passCode
    );
  },
};

module.exports = core;
