import axios from "axios";

const api = axios.create({
    baseURL:process.env.API_URL_DEV,
});

export default api;