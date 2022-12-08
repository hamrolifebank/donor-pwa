const ethers = require("ethers");
const axios = require("axios");
<<<<<<< HEAD
import { withIronSessionApiRoute } from "iron-session/next";
=======
const fs = require("fs");
>>>>>>> 649f3a288243b890597045a6d85cbae75ab7fe3d

export default withIronSessionApiRoute(otpRoute, {
  cookieName: "secret_otp",
  password: "password@12345678910112231123213213",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});

async function otpRoute(req, res) {
  console.log("the line 20", req.session);
  if (req.method === "POST") {
    const phoneNumber = req.body.phoneNum;
    const email = req.body.emailaddress;

    if (phoneNumber) {
      let wallet = new ethers.Wallet(
        "0x8fb2d8e49fdc7bb4cc946e41813f335024eb766300cada35f80545341d19273f"
      );
      console.log("Wallet address:", wallet.address);

      const signature = await wallet.signMessage("rumsan");

      const otp = Math.floor(1000 + Math.random() * 9000);

<<<<<<< HEAD
      if (Object.keys(req.session).includes(email)) {
        console.log("the if entered");
        req.session[email] = {
          ...req.session[email],
          otp,
        };
      } else {
        req.session[email] = {
          otp,
          tries: 5,
        };
      }
      console.log("the re.session", req.session);
      await req.session.save();
      res.send({ ok: true });
=======
      const newOtp = {
        otp,
      };

      fs.writeFile("./otp.json", JSON.stringify(newOtp), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("file sucess written");
        }
      });
>>>>>>> 649f3a288243b890597045a6d85cbae75ab7fe3d

      const { data } = await axios.post(
        `https://services.rumsan.net/sms`,
        { phone: 9991109671, message: JSON.stringify(otp) },
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
}

// export default sessionExpress(handler);
// export default handler;
