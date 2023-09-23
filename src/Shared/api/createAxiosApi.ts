import axios, { AxiosInstance } from "axios";

const createAxiosApi = (): AxiosInstance => {
    return axios.create({
        baseURL: "http://localhost:3000",
        headers: {
    
        }
    })
}

export const api = createAxiosApi()