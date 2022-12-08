import axios from "axios";

const API = "/api/otp";

export const sendRequestForOTP = async (phoneNum, emailaddress) => {
  try {
    const response = await axios.post(`${API}/requestOtp`, {
      method: "POST",
      phoneNum,
      emailaddress,
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const sendVerificationRequestForOTP = async (otp, email) => {
  try {
    const response = await axios.post(`${API}/otpVerification`, {
      method: "POST",
      otp,
      email,
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
};

export const reSendVerificationRequestForOTP = async (otp) => {
  const response = await axios.post(`${API}/resend`, otp);
  return response;
};
