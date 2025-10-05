import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
export const UseGetCurrentUser = () => {
  const dispatch = useDispatch();
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        let result = await axios.get(
          `${"http://localhost:8000"}/api/user/current`,
          {
            withCredentials: true,
          }
        );
        dispatch(setUserData(result?.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
};
