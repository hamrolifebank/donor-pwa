const ethers = require("ethers");
const axios = require("axios");
import { walletKey, walletSign } from "@config";
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(otpRoute, {
  cookieName: "secret_otp",
  password: process.env.password,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});

async function otpRoute(req, res) {
  if (req.method === "POST") {
    const phoneNumber = req.body.phoneNum;
    if (phoneNumber) {
      let wallet = new ethers.Wallet(`${walletKey}`);
      const signature = await wallet.signMessage(`${walletSign}`);
      const otp = Math.floor(1000 + Math.random() * 9000);

      if (Object.keys(req.session).length) {
        req.session = {
          ...req.session,
          otp,
        };
      } else {
        req.session = {
          otp,
          tries: 5,
        };
      }
      await req.session.save();

      try {
        const { data } = await axios.post(
          `https://services.rumsan.net/sms`,
          { phone: 9991109671, message: JSON.stringify(otp) },
          {
            headers: {
              signature,
            },
          }
        );
        if (data.success) {
          return res.send({ ok: true });
        } else {
          return res.send({ ok: false, message: data.message });
        }
      } catch (e) {
        return res.json({ ok: false, ...e.response.data });
      }
    } else {
      res.status(400).json({ msg: "Please specificy your phone number" });
    }
  }
}
