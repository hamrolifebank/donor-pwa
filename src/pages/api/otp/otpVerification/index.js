import { withIronSessionApiRoute } from "iron-session/next";
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
    if (otpProvidedByUser) {
      const matchedOtp = req.session.otp === Number(otpProvidedByUser);
      if (!matchedOtp && req.session.tries !== 0) {
        req.session = {
          ...req.session,
          tries: req.session.tries - 1,
        };
        await req.session.save();

        res.status(400).json({
          msg: `You entered wrong otp, you have ${req.session.tries} more tries`,
        });
      } else if (!matchedOtp && req.session.tries <= 1) {
        res.status(400).json({ msg: "Please contact our team" });
      } else {
        await req.session.destroy();
        res.status(200).json({ msg: "Phone number successfully verified" });
      }
    }
  }
}
