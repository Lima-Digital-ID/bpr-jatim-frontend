import axios from "axios";

const $axios = axios.create({
  // baseURL: "http://localhost:8000/api/",
  baseURL: "https://backoffice.bankumkm.id/api/",
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    // withCredentials: true,
    "Content-Type": "application/json",
  },
});

$axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default $axios;
