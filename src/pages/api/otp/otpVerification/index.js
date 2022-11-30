import { otpList } from "src/otpList/otpList";

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
