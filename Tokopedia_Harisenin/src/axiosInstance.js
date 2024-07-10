import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Adjust the base URL as per your backend setup
});

export default axiosInstance;
