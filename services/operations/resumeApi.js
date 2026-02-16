import { axiosInstance } from "../apiConnector";
import { resumeEndpoints } from "../api";

const { GET_ALL_RESUMES, GET_RESUME  , UPDATE_RESUME ,DELETE_RESUME , CREATE_RESUME} = resumeEndpoints;

//get all resumes 
export const getAllresume = async () => {
  try {
    const response = await axiosInstance.get(GET_ALL_RESUMES);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

//get resume
export const getResume = async (id) => {
  try {
    const response = await axiosInstance.get(`${GET_RESUME}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

//update 
export const updateResume = async (id , data) => {
  try {
    const response = await axiosInstance.patch(`${UPDATE_RESUME}/${id}` , data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

//create new resume 
export const createResume = async (data) => {
  try {
    const response = await axiosInstance.post(CREATE_RESUME , data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};