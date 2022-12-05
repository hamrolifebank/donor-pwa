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
