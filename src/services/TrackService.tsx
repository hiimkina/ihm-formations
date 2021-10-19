import axios, { AxiosInstance, AxiosResponse } from 'axios';

const CONFIG = require('../config/config.json');

export default class TrackService {
    axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: CONFIG.apiUrl,
        });
    }

    getRecent():Promise<AxiosResponse> {
        return this.axiosInstance.get('track/recents').then((results: AxiosResponse) => results);
    }
}
