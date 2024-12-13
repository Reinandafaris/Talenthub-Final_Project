import axios from "axios";

const API_URL = import.meta.env.VITE_URL_API;

export const getAllCategories = async (callback, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await axios.get(`${API_URL}/category`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export const getAllMenu = async (callback, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await axios.get(`${API_URL}/menu`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};

export const getAllDetail = async (callback, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await axios.get(`${API_URL}/detail`);
    callback(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};
