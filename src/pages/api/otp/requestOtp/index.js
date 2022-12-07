import { otpObj } from "../otpObj";

const ethers = require("ethers");
const axios = require("axios");

const handler = async (req, res) => {
  if (req.method === "POST") {
    const phoneNumber = req.body.phoneNum;

    if (phoneNumber) {
      let wallet = new ethers.Wallet(
        "0x8fb2d8e49fdc7bb4cc946e41813f335024eb766300cada35f80545341d19273f"
      );
      console.log("Wallet address:", wallet.address);

      const signature = await wallet.signMessage("rumsan");

      const otp = Math.floor(1000 + Math.random() * 9000);

      otpObj.otpNum = otp;

      console.log(otpObj);

      const { data } = await axios.post(
        `https://services.rumsan.net/sms`,
        { phone: phoneNumber, message: JSON.stringify(otp) },
        {
          headers: {
            signature,
          },
        }
      );
      console.log(data);
    } else {
      res.status(400).json({ msg: "Please specificy your phone number" });
    }
  }
};

export default handler;
