import axios, { AxiosInstance } from "axios";

const createAxiosApi = (): AxiosInstance => {
    return axios.create({
        baseURL: "/api/v1",
        headers: {
    
        }
    })
}

export const API = createAxiosApi()