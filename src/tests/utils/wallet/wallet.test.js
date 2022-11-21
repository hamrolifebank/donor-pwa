var { ethers } = require("ethers");

const core = require("../../../utils/wallet");

describe("Wallet library tests", () => {
  describe("createWallet tests", () => {
    test("wallet of type object is returned on creation of wallet.", async () => {
      const wallet = await core.createWallet();

      expect(typeof wallet).toBe("object");
    });

    test("wallet returned should have address, mnemonic.", async () => {
      let wallet = await core.createWallet();
      expect(Object.keys(wallet)).toContain("address", "_mnemonic");
    });
  });

  // test("wallet restored from mnemonic.", async () => {
  //   const restoredwallet = await core.restoreWallet();
  // const mnemonic=restoredwallet.split(" ")
  //   expect(mnemonic).toHaveLength(12);
  // });

  // test("wallet of type object is returned on creation of wallet.", async () => {
  //   const wallet = await core.createWallet();
  //   expect(typeof wallet).toBe("object");
  // });
});
