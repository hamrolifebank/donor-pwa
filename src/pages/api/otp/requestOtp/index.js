import { otpList } from "src/otpList/otpList";
const fs = require("fs");

export default function handler(req, res) {
  if (req.method === "POST") {
    const phoneNumber = req.body.phoneNum;
    if (phoneNumber) {
      const otp = Math.floor(1000 + Math.random() * 9000);
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
      res.status(200).json({
        response: {
          // data: otp,
          msg: `Enter the otp, we send to ${phoneNumber}`,
        },
      });
    } else {
      res.status(400).json({ msg: "Please specificy your phone number" });
    }
  }
}
