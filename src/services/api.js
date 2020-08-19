import axios from "axios";

const api = axios.create({
    baseURL:"https://scrapbook-api-vagner.herokuapp.com"
});

export default api;