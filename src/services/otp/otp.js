import axios from "axios";

const API = "/api/otp";

export const sendRequestForOTP = async (phoneNum) => {
  console.log(phoneNum);
  const response = await axios.post(`${API}/requestOtp`, {
    method: "POST",
    phoneNum,
  });
  return response;
};

export const sendVerificationRequestForOTP = async (otp) => {
  const response = await axios.post(`${API}/otpVerification`, otp);
  return response;
};

export const reSendVerificationRequestForOTP = async (otp) => {
  const response = await axios.post(`${API}/resend`, otp);
  return response;
};
