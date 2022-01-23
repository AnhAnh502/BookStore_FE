import axios from "axios";

const getAccessToken = () => {
  const user = window.localStorage.getItem("user");
  const token = JSON.parse(user).token;
  return token;
};

export const axiosInstance = axios.create({
  baseURL: "http://167.71.211.204:3000/api/v1",
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
