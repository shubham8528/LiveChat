import { apiCall } from "./api";

export const signIn = (data) => {
  apiCall(data, "post", "signin");
};

export const signUp = (data) => {
  apiCall(data, "post", "signup");
};
