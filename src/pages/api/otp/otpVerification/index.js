import { otpList } from "src/otpList/otpList";
const fs = require("fs");

export default function handler(req, res) {
  if (req.method === "POST") {
    const otpProvidedByUser = req.body.otp;
    if (otpProvidedByUser) {
      fs.readFile("./otp.json", "utf-8", (err, jsonString) => {
        if (err) {
          console.log(err);
        } else {
          const data = JSON.parse(jsonString);
          const matchedOtp = Number(data.otp) === Number(otpProvidedByUser);
          const tries = [];
          if (!matchedOtp && tries.length < 2) {
            tries.push("try");
            res
              .status(400)
              .json({ msg: "You entered wrong otp, you have 1 more tries" });
          } else if (!matchedOtp && tries.length === 2) {
            res.status(400).json({ msg: "Please contact our team" });
          } else {
            res.status(200).json({ msg: "Phone number successfully verified" });
          }
        }
      });
    }
  }
}
