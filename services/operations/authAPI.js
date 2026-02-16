import { axiosInstance } from "../apiConnector";
import { authEndpoints } from "../api";

const { SIGN_IN , GET_USER} = authEndpoints;


export const login = async (data) => {
  try {
    const response = await axiosInstance.post(SIGN_IN, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

//get logged in user :  
export const getUser = async () => {
  try {
    const response = await axiosInstance.get(GET_USER);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};