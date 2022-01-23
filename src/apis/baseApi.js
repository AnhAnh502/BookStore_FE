import axios from 'axios';

const getAccessToken = () => {
    const token = window.localStorage.getItem("accessToken");
    return token;
}

export const axiosInstance = axios.create({
    baseURL: "http://167.71.211.204/api/v1"
})

axiosInstance.interceptors.request.use(function (config) {
    const accessToken = getAccessToken();
    if(accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});