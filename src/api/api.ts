import axios from "axios";

const createAPI = () => {
  const api = axios.create({
    baseURL: "https://cinemaguide.skillbox.cc/",
    timeout: 5000,
  });

  api.interceptors.request.use((config) => {
    // foo для проверки авторизации пользователя
    return config;
  });

  api.interceptors.response.use((response) => {
    return response;
  });

  return api;
};

export { createAPI };
