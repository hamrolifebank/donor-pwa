<<<<<<< HEAD
import { withIronSessionApiRoute } from "iron-session/next";
=======
const fs = require("fs");

>>>>>>> 649f3a288243b890597045a6d85cbae75ab7fe3d
let tries = 5;
export default withIronSessionApiRoute(verifyOtp, {
  cookieName: "secret_otp",
  password: "password@12345678910112231123213213",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
async function verifyOtp(req, res) {
  if (req.method === "POST") {
    const otpProvidedByUser = req.body.otp;
<<<<<<< HEAD
    const email = req.body.email;
    if (otpProvidedByUser) {
      const matchedOtp = req.session[email].otp === Number(otpProvidedByUser);
      console.log("the otp macthced", matchedOtp);
      if (!matchedOtp && req.session[email].tries !== 0) {
        req.session[email] = {
          ...req.session[email],
          tries: req.session[email].tries - 1,
        };
        await req.session.save();

        res.status(400).json({
          msg: `You entered wrong otp, you have ${req.session[email].tries} more tries`,
        });
      } else if (!matchedOtp && req.session[email].tries <= 1) {
        res.status(400).json({ msg: "Please contact our team" });
      } else {
        res.status(200).json({ msg: "Phone number successfully verified" });
      }
=======

    if (otpProvidedByUser) {
      fs.readFile("./otp.json", "utf-8", (err, jsonString) => {
        if (err) {
          console.log(err);
        } else {
          const data = JSON.parse(jsonString);
          const matchedOtp = Number(data.otp) === Number(otpProvidedByUser);

          if (!matchedOtp && tries !== 0) {
            tries--;
            res.status(400).json({
              msg: `You entered wrong otp, you have ${tries} more tries`,
            });
          } else if (!matchedOtp && tries <= 1) {
            res.status(400).json({ msg: "Please contact our team" });
          } else {
            res.status(200).json({ msg: "Phone number successfully verified" });
          }
        }
      });
>>>>>>> 649f3a288243b890597045a6d85cbae75ab7fe3d
    }
  }
}
