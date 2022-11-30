import axios from "axios";

const API = "https://fakeapi:8998/api/otp";

export const sendRequestForOTP = async (phoneNum) => {
  try {
    const response = await axios.post(API, phoneNum);
    return response;
  } catch (error) {
    return error.response.data.message;
  }
};

export const sendVerificationRequestForOTP = async (otp) => {
  try {
    const response = await axios.post(API, otp);
    return response;
  } catch (error) {
    return error.response.data.message;
  }
};

export const reSendVerificationRequestForOTP = async (otp) => {
  try {
    const response = await axios.post(`${API}/resend`, otp);
    return response;
  } catch (error) {
    return error.response.data.message;
  }
};
