import axios from "axios";

const API = "http://localhost:3001/api/eventPledgers";

export const sendDonorInfoInRegistryApp = async (
  pledgerEthAddress,
  pledgerInfo,
  eventsId
) => {
  try {
    const response = await axios.post(`${API}/register`, {
      method: "POST",
      pledgerEthAddress,
      pledgerInfo,
      eventsId,
    });
  } catch (error) {
    return error.response.data;
  }
};
