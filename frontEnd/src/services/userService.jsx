import { apiCall } from "./api";

export const signIn = (data) => {
  apiCall(data, "signin");
};
