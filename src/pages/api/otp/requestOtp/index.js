export default function handler(req, res) {
  if (req.method === "POST") {
    const phoneNumber = req.body.phoneNum;

    if (phoneNumber) {
      res.status(200);
    } else {
      res.status(400).json({ msg: "Please specificy your phone number" });
    }
  }
}
