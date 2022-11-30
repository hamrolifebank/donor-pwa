import { otpList } from "src/otpList/otpList";

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
