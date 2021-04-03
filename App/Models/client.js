import axios from 'axios';

export default function client() {
    const instance = axios.create();
    instance.defaults.baseURL = 'https://api.github.com/';
    instance.interceptors.request.use(
        async (config) => {
            return config;
        },
        (error) => Promise.reject(error),
    );

    return instance;
}
