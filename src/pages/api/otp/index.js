// REQUEST OTP API

import { otpList } from "../../../otpList/otpList";

export default function handler(req, res) {
  if (req.method === "POST") {
    const phoneNumber = req.body.phoneNum;
    if (phoneNumber) {
      const otp = Math.floor(1000 + Math.random() * 9000);
      otpList.push(otp);
      console.log("otpList request: ", otpList);
      res.status(200).json({
        response: {
          data: otp,
          msg: `Enter the otp, we send to ${phoneNumber}`,
        },
      });
    } else {
      res.status(400).json({ msg: "Please specificy your phone number" });
    }
  }
}



// VERIFICATIN REQUEST FOR OTP 

export default function handler(req, res) {
    console.log("verification request ", req.body.otp);
    if (req.method === "POST") {
      const otpProvidedByUser = req.body.otp;
      if (otpProvidedByUser) {
        console.log("if entered", otpProvidedByUser);
        console.log("otpList verification: ", otpList);
        const matchedOtp = otpList.find((otp) => otp === otpProvidedByUser);
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
    }
  }


  // RESEND REQUEST FOR OTP 


  export default function handler(req, res) {
    if (req.method === "POST") {
      const { phoneNumber } = req.body;
      if (phoneNumber) {
        const otp = Math.floor(1000 + Math.random() * 9000);
        res.status(200).json({
          response: {
            data: otp,
            msg: "We have resent a new OTP",
          },
        });
        otpList.push(otp);
      } else {
        res.status(400).json({ msg: "Please specificy your phone number" });
      }
    }
  }