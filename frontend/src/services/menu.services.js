import axios from "axios";

export const getAllCategories = async (callback, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await axios.get("http://localhost:8000/category");
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
    const res = await axios.get("http://localhost:8000/menu");
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
    const res = await axios.get("http://localhost:8000/detail");
    callback(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};
