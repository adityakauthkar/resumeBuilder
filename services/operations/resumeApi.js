import { axiosInstance } from "../apiConnector";
import { resumeEndpoints } from "../api";

const { GET_ALL_RESUMES } = resumeEndpoints;

export const getAllresume = async () => {
  try {
    const response = await axiosInstance.get(GET_ALL_RESUMES);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
