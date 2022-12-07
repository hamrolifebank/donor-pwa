const fs = require("fs");

let tries = 5;
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
    }
  }
}
