import axios from "axios";

const apiUrl = process.env.API_URL;

const shopeenApi = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
});

export default shopeenApi;