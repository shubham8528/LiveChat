import axios from "axios";

export const apiCall = (data, endPoint) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    axios.post(`${API_URL}/${endPoint}`, data);
    console.log(data, endPoint, API_URL, "......");
  } catch (err) {
    console.log(err);
  }
};
