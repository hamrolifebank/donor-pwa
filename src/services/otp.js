import axios from "axios";

const API = "/api/otp";

export const sendRequestForOTP = async (phoneNum) => {
  const response = await axios.post(`${API}/requestOtp`, {
    method: "POST",
    phoneNum,
  });
  return response;
};

export const sendVerificationRequestForOTP = async (otp) => {
  try {
    const response = await axios.post(`${API}/otpVerification`, {
      method: "POST",
      otp,
    });
    // console.log("the send verificvation", response.data.msg);
    return response.data.msg;
  } catch (error) {
    return error.response.data;
  }
};

export const reSendVerificationRequestForOTP = async (otp) => {
  const response = await axios.post(`${API}/resend`, otp);
  return response;
};
