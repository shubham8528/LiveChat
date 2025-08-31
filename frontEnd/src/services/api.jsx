import axios from "axios";

export const apiCall = async (data, request, endPoint) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const apiRequest = axios({
      method: request,
      url: `${API_URL}/${endPoint}`,
      data,
    });
    return apiRequest.data;
  } catch (err) {
    console.log(err);
  }
};
