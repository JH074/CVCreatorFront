import axios from "axios";
import { useAuthContext} from "../../hooks/useAuthContext";

const BASE_URL = "http://localhost:4001/api/v1";

export const createProfile = async (formData, token) => {
    try {
      const response = await axios.post(`${BASE_URL}/profile`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error occurred while creating the profile. Please try again.");
    }
  };

  export const updateProfile = async (profileId, formData) => {
    try {
      const response = await axios.put(`${BASE_URL}/profile/${profileId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error occurred while updating the profile. Please try again.");
    }
  };

  export const getProfiles = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/profile`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      // console.log(response); // DEBUG
  
      if (response.status === 200) return response.data.data;
      else return [];
    } catch (error) {
      console.log("Error:", error.message);
      return [];
    }
  };

  export const getOneProfile = async (profileId) => {
    try {
      if (!profileId) throw new Error("movieId is required!");
  
      const response = await axios.get(`${BASE_URL}/profile/${profileId}`);
      // console.log(response);
  
      if (response.status === 200) return response.data.data;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };

  export const deleteOneProfile = async (profileId) => {
    try {
      if (!profileId) throw new Error("movieId is required!");
  
      const response = await axios.delete(
        `${BASE_URL}/movies/${profileId}`
      );
      // console.log(response);
  
      if (response.status === 200) return true;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };