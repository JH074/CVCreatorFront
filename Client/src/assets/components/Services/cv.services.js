import axios from "axios";

const BASE_URL = "http://localhost:4001/api/v1";

export const createCV = async (formData, token) => {
    try {
      const response = await axios.post(`${BASE_URL}/cv`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error occurred while creating the CV. Please try again.");
    }
  };

  export const updateCV = async (CVId, formData) => {
    try {
      const response = await axios.put(`${BASE_URL}/cv/${CVId}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error occurred while updating the CV. Please try again.");
    }
  };

  export const getAllCVs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/cv`);
      // console.log(response); // DEBUG
  
      if (response.status === 200) return response.data.data;
      else return [];
    } catch (error) {
      console.log("Error:", error.message);
      return [];
    }
  };

  export const getOneCV = async (CVId) => {
    try {
      if (!CVId) throw new Error("CVId is required!");
  
      const response = await axios.get(`${BASE_URL}/cv/${CVId}`);
      // console.log(response);
  
      if (response.status === 200) return response.data.data;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };

  export const deleteOneMovie = async (CVId) => {
    try {
      if (!CVId) throw new Error("CVId is required!");
  
      const response = await axios.delete(
        `${BASE_URL}/cv/${CVId}`
      );
      // console.log(response);
  
      if (response.status === 200) return true;
      else return undefined;
    } catch (error) {
      console.log("Error:", error.message);
      return undefined;
    }
  };